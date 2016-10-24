class QuestionsController < ApplicationController
  before_action :find_item, only: [:update, :destroy]
  before_action :require_permission, only: [:update, :destroy]

  def index
    items = Question.where(filter).eager_load(:user, :votes).all
    @presenter = {
      items: items.map{|item| QuestionPresenter.to_list_item(item) },
      form: form(questions_path)
    }
  end

  def create
    data = permited_params
    data[:user] = current_user
    @item = Question.new(data)
    @item.save
    save_responce
  end

  def show
    question = Question.eager_load(:answers, :user).find(params[:id])
    @item = QuestionPresenter.full(question, current_user.id)
    @presenter = {
      item: @item,
      form: form(question_path(@item), 'PUT')
    }
  rescue
    flash[:error] = "Something wrong with item #{params[:id]}, call your admin."
    redirect_to root_path
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

  def form path, form_method = 'POST'
    {
      action: path,
      method: form_method,
      csrf_param: request_forgery_protection_token,
      csrf_token: form_authenticity_token
    }
  end

  def find_item
    @item = Question.find(params[:id])
  end

  def permited_params
    params.require(:question).permit(:title, :content)
  end

  def filter
    filter = {}
    filter = ['title ILIKE ?', "%#{params[:filter]}%"] if params[:filter] 
  end
end
