require 'rails_helper'

RSpec.describe VotesController, type: :controller do
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

  describe 'vote' do
    it 'should not work without login' do
      get :vote, params: { item_id: 1, vote: 1, type: 'answer' }
      expect(response.body.to_i).to eq 0
    end

    it 'should have return correct votes total' do
      sign_in user
      get :vote, params: { item_id: 1, vote: 1, type: 'answer' }
      expect(response.body.to_i).to eq 1
      sign_out user

      sign_in user_two
      get :vote, params: { item_id: 1, vote: 1, type: 'answer' }
      expect(response.body.to_i).to eq 2
    end

    it 'can go below zero' do
      sign_in user
      get :vote, params: { item_id: 1, vote: -1, type: 'answer' }
      expect(response.body.to_i).to eq -1
    end

    it 'should vwork with questions too' do
      sign_in user
      get :vote, params: { item_id: 1, vote: 1, type: 'question' }
      expect(response.body.to_i).to eq 1
      sign_out user

      sign_in user_two
      get :vote, params: { item_id: 1, vote: -1, type: 'question' }
      expect(response.body.to_i).to eq 0
    end

    it 'should permit user to change his mind' do
      sign_in user
      get :vote, params: { item_id: 1, vote: -1, type: 'answer' }
      expect(response.body.to_i).to eq -1

      get :vote, params: { item_id: 1, vote: 1, type: 'answer' }
      expect(response.body.to_i).to eq 1
    end

    it 'should permit only one vote point per user' do
      sign_in user
      get :vote, params: { item_id: 1, vote: 2, type: 'answer' }
      expect(response.body.to_i).to eq 0

      get :vote, params: { item_id: 1, vote: -222, type: 'answer' }
      expect(response.body.to_i).to eq 0

      get :vote, params: { item_id: 1, vote: 1, type: 'answer' }
      expect(response.body.to_i).to eq 1
    end
  end
end
