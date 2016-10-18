class QuestionsController < ApplicationController

  def index
    @presenter = {
      items: Question.all,
      form: {
        action: questions_path,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def create
    @item = Question.new(permited_params)
    @item.save

    if request.xhr?
      render :json => Question.last(5)
    else
      redirect_to questions_path
    end
  end

  private

  def permited_params
    params.require(:question).permit(:title, :content)
  end
end
