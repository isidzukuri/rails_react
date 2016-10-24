class QuestionPresenter
  def self.full(item, author_id = nil)
    new(item, author_id).to_full
  end

  attr_reader :item, :user_id

  def initialize(obj, author_id = nil)
    @item = obj
    @user_id = author_id
  end

  def to_full
    @struct = item.as_json(include: [:user, :comments])
    struct['editable'] = user_id == item.user_id
    struct['votes_total'] = item.votes_total
    struct['date'] = item.created_at.strftime('%H:%M %d.%m.%Y')
    include_answers
    struct
  end

  private

  attr_accessor :struct

  def include_answers
    struct['answers'] = @item.answers.map { |answer| AnswerPresenter.full(answer, user_id) }
  end
end
