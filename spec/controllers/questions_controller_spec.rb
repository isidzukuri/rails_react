require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
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

  describe 'index' do
    it 'has a 200 status code' do
      get :index
      expect(response.status).to eq(302)
    end

    it 'has a 200 status code' do
      item = question
      sign_in_user
      get :index
      expect(response.status).to eq(200)
      expect(response).to render_template('index')
    end
  end

  describe 'create' do
    it 'raises an error if missing requred data' do
      params = { question: { mtn: 1 } }
      errors = { 'errors' => [['title', ["can't be blank"]], ['content', ["can't be blank"]]] }
      sign_in_user
      post :create, params
      expect(response.body).to eq errors.to_json
    end

    it 'should have expected data' do
      params = { question: expected_hash }
      sign_in_user
      post :create, params
      expect(JSON.parse(response.body)).to include(expected_hash.as_json)
    end
  end

  describe 'update' do
    it 'raises an error if missing requred data' do
      item = question.as_json
      item['title'] = 'updated'
      item['content'] = 'content!'
      item.delete('updated_at')
      sign_in_user
      post :update, id: item['id'], question: item
      expect(JSON.parse(response.body)).to include(item.as_json)
    end

    it "should not aloow second user update first's question" do
      sign_in user_two
      item = question.as_json
      item['title'] = 'updated'
      expect { post :update, id: item['id'], question: item }.to raise_error SecurityError
    end
  end

  describe 'show' do
    it 'should redirect' do
      get :show
      expect(response.status).to eq(302)
    end
  end
end
