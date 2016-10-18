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

  def show
    item = Question.find(params[:id])
    @presenter = {
      item: item,
      form: {
        action: question_path(item),
        method: 'PUT',
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def update
    item = Question.find(params[:id])
    ap item
    item.update(permited_params)
    redirect_to item
  end

  private

  def permited_params
    params.require(:question).permit(:title, :content)
  end
end
