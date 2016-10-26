class UsersController < ApplicationController

  def show
    # question = Question.eager_load(:answers, :user, :tags, :comments).find(params[:id])
    # @item = QuestionPresenter.full(question, current_user.id)
    # @presenter = {
    #   item: @item,
    #   form: form(question_path(@item), 'PUT')
    # }
    # # rescue
    # #   flash[:error] = "Something wrong with item #{params[:id]}, call your admin."
    # #   redirect_to root_path
    user = User.eager_load(:answers, :questions).find(params[:id])
    @item = user
    @questions = user.questions.map { |item| QuestionPresenter.to_list_item(item) }
    @answers = user.answers.map { |item| AnswerPresenter.for_user_list(item) }
    # ap @answers
  end

  
end
