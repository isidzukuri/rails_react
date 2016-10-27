class CommentsController < ApplicationController
  def create
    model = params[:type].classify.constantize
    content = params[:content]
    item = model.find(params[:item_id])
    @item = item.comments.create(user_id: current_user.id, content: content)
    responce = CommentPresenter.with_sub(@item) if @item.save
    json_responce responce
  end
end
