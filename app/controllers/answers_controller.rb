class AnswersController < ApplicationController
  def create
    data = permited_params
    data[:user] = current_user
    @item = Answer.new(data)
    responce = @item.save ? AnswerPresenter.full(@item) : nil
    json_responce responce
  end

  def helpfull
    answer = Answer.find_by_id(params[:id])
    if answer
      @item = answer.question
      require_permission
      @item.answer_id = answer.id
      @item.save
      result = answer.id
    else
      result = { errors: ['item not found'] }
    end
    render json: result
  end

  private

  def permited_params
    params.require(:answer).permit(:question_id, :content)
  end
end
