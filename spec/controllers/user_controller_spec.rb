require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  include LetCollection

  before do
    sign_in user
  end

  describe 'show' do
    it 'has a 200 status code' do
      get :show, params: { id: user.id }
      expect(response.status).to eq(200)
    end
  end
end
