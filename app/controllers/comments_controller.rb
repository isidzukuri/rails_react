class CommentsController < ApplicationController

  def create
    model = params[:type].classify.constantize

    content = params[:content]
    item = model.find(params[:item_id])
    @item = item.comments.create(user_id: current_user.id, content: content)
    save_responce
  end 
end