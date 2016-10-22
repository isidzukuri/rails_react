require 'rails_helper'

RSpec.describe QuestionPresenter do
  include LetCollection

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
