class VotesController < ApplicationController
  def vote
    model = params[:type].classify.constantize
    item = model.find(params[:item_id])
    vote = item.votes.where(user_id: current_user.id).first
    if !vote
      item.votes.create(user_id: current_user.id, value: params[:vote].to_i)
    else
      vote.update(value: params[:vote].to_i)
    end
    render json: item.votes_total
  end
end
