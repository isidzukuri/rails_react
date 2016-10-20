require 'rails_helper'

RSpec.describe QuestionPresenter do
  let!(:password) { '123456' }
  let!(:email) { 'user@example.com' }
  let!(:user) do
    User.create(
      email: email,
      password: password,
      password_confirmation: password
    )
  end
  let!(:question) { Question.create(title: 'question?', content: 'question content?', user: user) }
  let!(:answer) { Answer.create(question: question, content: 'answer content', user: user) }
  let!(:result) { QuestionPresenter.full(question, user.id) }
  let(:expected_hash) do
    { title: 'question?',
      content: 'question content?',
      user_id: 1,
      editable: true }
  end
  let(:expected_answer_hash) do
    { question_id: 1,
      content: 'answer content',
      user_id: 1 }
  end

  describe '#full' do
    it 'should have data' do
      expect(result).to include(expected_hash.as_json)
    end

    it 'should have answer' do
      expect(result['answers'].first).to include(expected_answer_hash.as_json)
    end

    it 'should have user' do
      expect(result['user']).to include({ email: email, id: 1 }.as_json)
    end
  end
end
