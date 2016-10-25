class TagsController < ApplicationController
  def index
    @items = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
    @items = @tag.questions.where(filter).map { |item| QuestionPresenter.to_list_item(item) }
  end

  private

  def filter
    filter = {}
    filter = ['title LIKE ?', "%#{params[:filter]}%"] if params[:filter]
  end
end
