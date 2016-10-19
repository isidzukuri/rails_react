class AnswersController < ApplicationController
  def create
    @item = Answer.new(permited_params)
    @item.save
    save_responce
  end

  def helpfull
    params[:id]
    answer = Answer.find(params[:id])
    if answer
      question = answer.question
      question.answer_id = answer.id
      question.save
      result = QuestionPresenter.json_object(question)
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
