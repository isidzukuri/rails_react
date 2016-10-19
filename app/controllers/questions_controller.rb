class QuestionsController < ApplicationController
  before_action :find_item, only: [:update, :destroy, :show]

  def index
    @presenter = {
      items: Question.last(5),
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
    save_responce
  end

  def show
    @presenter = {
      item: @item,
      form: {
        action: question_path(@item),
        method: 'PUT',
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def update
    @item.update(permited_params)
    save_responce
  end

  def destroy
    result = @item ? @item.destroy : false
    render json: result
  end


  private

  def save_responce
    if @item.errors.any?
      result = {errors: @item.errors.messages.to_a}
    else
      result = @item
    end
    render json: result
  end

  def find_item
    @item = Question.find(params[:id])
  end

  def permited_params
    params.require(:question).permit(:title, :content)
  end
end
