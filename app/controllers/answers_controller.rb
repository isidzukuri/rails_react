class AnswersController < ApplicationController

  def create
    @item = Answer.new(permited_params)
    @item.save
    save_responce
  end

  private

  def find_item
    @item = Answer.find(params[:id])
  end

  def permited_params
    params.require(:answer).permit(:question_id, :content)
  end
end
