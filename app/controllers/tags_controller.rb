class TagsController < ApplicationController
  def index
    @items = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
    questions = @tag.questions.where(filter)
    @items = questions.map { |item| QuestionPresenter.to_list_item(item) }
  end

  private

  def filter
    filter = {}
    filter = ['title LIKE ?', "%#{params[:filter]}%"] if params[:filter]
  end
end
