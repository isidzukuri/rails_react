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

  describe '#to_list_item' do
    it 'should have data' do
      expect(list_item).to include(question_list_item.as_json)
      expect(list_item['user']).to include({ id: 1, email: 'user@example.com' }.as_json)
    end
  end

  describe '#to_item' do
    it 'should have right data structure' do
      question.tags = [tag, tag2]
      simple_item = QuestionPresenter.to_item(question)
      expect(simple_item).to include(question_hash.as_json)
      expect(simple_item['tags']).to eq question.tags.as_json
      expect(simple_item['tags_string']).to eq 'tag_1 tag_2'
    end
  end
end
