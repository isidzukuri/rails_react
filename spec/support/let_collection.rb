module LetCollection
  def self.included(base)
    base.instance_eval do
      let!(:password) { '123456' }
      let!(:email) { 'user@example.com' }
      let!(:user) do
        User.create(
          email: email,
          password: password,
          password_confirmation: password
        )
      end
      let!(:user_two) do
        User.create(
          email: 'email2@email.com',
          password: 'password',
          password_confirmation: 'password'
        )
      end

      let!(:answer) { Answer.create(question: question, content: 'answer content', user: user) }
      let(:expected_answer_hash) do
        { question_id: 1,
          content: 'answer content',
          user_id: 1,
          votes_total: 0 }
      end

      let!(:question) { Question.create(title: 'question?', content: 'question content?', user: user) }
      let!(:full_question_struct) { QuestionPresenter.full(question, user.id) }
      let!(:question_list_item_struct) { QuestionPresenter.full(question) }
      let(:expected_question_hash) do
        { title: 'question?',
          content: 'question content?',
          user_id: 1,
          editable: true,
          votes_total: 0 }
      end
      let(:question_list_item) do
        { title: 'question?',
          content: 'question content?',
          user_id: 1,
          votes_total: 0 }
      end
      let(:question_hash) do
        { title: 'question?',
          content: 'question content?',
          user_id: 1 }
      end

      

      let!(:tag) do
        Tag.create(
          title: 'tag_1'
        )
      end
      let!(:tag2) do
        Tag.create(
          title: 'tag_2'
        )
      end
    end
  end
end
