require 'rails_helper'

RSpec.describe VotesController, type: :controller do
  include LetCollection

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
      expect(response.body.to_i).to eq 0
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
