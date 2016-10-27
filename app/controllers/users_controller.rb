class UsersController < ApplicationController
  def show
    user = User.eager_load(:answers, :questions).find(params[:id])
    @item = user
    @questions = user.questions.map { |item| QuestionPresenter.to_list_item(item) }
    @answers = user.answers.map { |item| AnswerPresenter.for_user_list(item) }
  end
end
