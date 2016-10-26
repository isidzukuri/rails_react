require 'test_helper'

class QuestionDecoratorTest < ActiveSupport::TestCase
  def setup
    @question = Question.new.extend QuestionDecorator
  end

  # test "the truth" do
  #   assert true
  # end
end
