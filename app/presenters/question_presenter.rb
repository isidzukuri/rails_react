class QuestionPresenter
  def self.full(item, author_id = nil)
    new(item, author_id).to_full
  end

  def self.to_list_item(item)
    new(item).list_item_struct
  end

  attr_reader :item, :user_id

  def initialize(obj, author_id = nil)
    @item = obj
    @user_id = author_id
  end

  def to_full
    @struct = item.as_json(include: [:user, :comments])
    struct['editable'] = editable
    struct['votes_total'] = item.votes_total
    struct['date'] = readable_time
    include_answers
    struct
  end

  def list_item_struct
    @struct = item.as_json(include: [:user])
    struct['votes_total'] = item.votes_total
    struct['date'] = readable_time
    struct
  end

  private

  attr_accessor :struct

  def include_answers
    struct['answers'] = @item.answers.map { |answer| AnswerPresenter.full(answer, user_id) }
  end

  def readable_time
    item.created_at.strftime('%H:%M %d.%m.%Y')
  end

  def editable
    user_id == item.user_id
  end
end
