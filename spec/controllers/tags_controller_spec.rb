require 'rails_helper'

RSpec.describe TagsController, type: :controller do
  include LetCollection

  before do
    sign_in user
    tag
  end

  describe 'index' do
    it 'has a 200 status code' do
      get :index
      expect(response.status).to eq(200)
    end
  end

  describe 'show' do
    it 'has a 200 status code' do
      get :show, params: {id: tag.id}
      expect(response.status).to eq(200)
    end
  end

end
