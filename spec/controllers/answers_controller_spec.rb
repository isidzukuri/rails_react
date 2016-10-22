require 'rails_helper'

RSpec.describe AnswersController, type: :controller do
  include LetCollection

  describe 'create' do
    it 'raises an error if missing requred data' do
      params = { answer: { mtn: 1 } }
      errors = { 'errors' => [['question', ['must exist']], ['content', ["can't be blank"]], ['question_id', ["can't be blank"]]] }
      sign_in user
      post :create, params
      expect(response.body).to eq errors.to_json
    end

    it 'should have expected data' do
      params = { answer: expected_answer_hash }
      sign_in user
      question
      post :create, params
      expect(JSON.parse(response.body)).to include(expected_answer_hash.as_json)
    end
  end

  describe 'helpfull' do
    it 'should have expected data' do
      sign_in user
      post :helpfull, id: answer.id
      expect(response.body.to_i).to eq answer.id
    end

    it 'should have expected data' do
      sign_in user
      post :helpfull, id: '11'
      error = { errors: ['item not found'] }
      expect(response.body).to eq error.to_json
    end
  end
end
