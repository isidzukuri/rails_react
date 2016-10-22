require 'rails_helper'

RSpec.describe AnswersController, type: :controller do
  let!(:user) do
    User.create(
      email: 'email@email.com',
      password: 'password',
      password_confirmation: 'password'
    )
  end

  let!(:user_two) do
    User.create(
      email: 'email2@email.com',
      password: 'password',
      password_confirmation: 'password'
    )
  end
  let(:sign_in_user) { sign_in user }
  let(:expected_hash) do
    { title: 'question?',
      content: 'question content?',
      user_id: 1 }
  end
  let(:question) { Question.create(expected_hash) }
  let(:expected_answer_hash) do
    { question_id: 1,
      content: 'answer content',
      user_id: 1 }
  end
  let(:question) { Question.create(expected_hash) }
  let!(:answer) { Answer.create(question: question, content: 'answer content', user: user) }

  describe 'create' do
    it 'raises an error if missing requred data' do
      params = { answer: { mtn: 1 } }
      errors = { 'errors' => [['question', ['must exist']], ['content', ["can't be blank"]], ['question_id', ["can't be blank"]]] }
      sign_in_user
      post :create, params
      expect(response.body).to eq errors.to_json
    end

    it 'should have expected data' do
      params = { answer: expected_answer_hash }
      sign_in_user
      question
      post :create, params
      expect(JSON.parse(response.body)).to include(expected_answer_hash.as_json)
    end
  end

  describe 'helpfull' do
    it 'should have expected data' do
      sign_in_user
      post :helpfull, id: answer.id
      expect(response.body.to_i).to eq answer.id
    end

    it 'should have expected data' do
      sign_in_user
      post :helpfull, id: '11'
      error = { errors: ['item not found'] }
      expect(response.body).to eq error.to_json
    end
  end
end
