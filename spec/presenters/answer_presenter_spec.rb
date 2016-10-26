require 'rails_helper'

RSpec.describe AnswerPresenter do
  include LetCollection


  describe '#full' do
    it 'should have data' do
      item = AnswerPresenter.full(answer)
      user_itm = {"id"=>1, "email"=>"user@example.com", "gravatar"=>"http://gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af.png?s=20"}
      expect(item).to include(expected_answer_hash.as_json)
      expect(item['user']).to include(user_itm.as_json)
    end
  end

  describe '#for_user_list' do
    it 'should have data' do
      item = AnswerPresenter.for_user_list(answer)
      expect(item['is_correct']).to eq false
      expect(item['question']).to include(question_hash.as_json)
      expect(item).to include(expected_answer_hash.as_json)
    end
  end

end
