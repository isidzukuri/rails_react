class QuestionsController < ApplicationController
  before_action :find_item, only: [:update, :destroy]
  before_action :require_permission, only: [:update, :destroy]

  def index
    items = Question.where(filter).eager_load(:user, :votes).all
    @items = items.map { |item| QuestionPresenter.to_list_item(item) }
  end

  def new
    @presenter = form(questions_path)
  end

  def create
    data = permited_params
    data[:user] = current_user
    @item = Question.new(data)
    if @item.save
      responce = { redirect: question_path(@item) }
      save_tags
    end
    json_responce responce
  end

  def show
    question = Question.eager_load(:answers, :user, :tags, :comments).find(params[:id])
    @item = QuestionPresenter.full(question, current_user.id)
    @presenter = {
      item: @item,
      form: form(question_path(@item), 'PUT')
    }
    # rescue
    #   flash[:error] = "Something wrong with item #{params[:id]}, call your admin."
    #   redirect_to root_path
  end

  def update
    if @item.update(permited_params)
      save_tags
      responce = QuestionPresenter.to_item(@item)
    end
    json_responce responce
  end

  def destroy
    result = @item ? @item.destroy : false
    render json: result
  end

  private

  def form(path, form_method = 'POST')
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
    filter = ['title LIKE ?', "%#{params[:filter]}%"] if params[:filter]
  end

  def save_tags
    if tags = params[:question][:tags]
      @item.tags = tags.split.map { |tag| Tag.find_or_create_by(title: tag.downcase) }
    end
  end
end
