class QuestionPresenter
  def self.full(item, author_id = nil)
    new(item, author_id).to_full
  end

  def self.to_list_item(item)
    new(item).list_item_struct
  end

  def self.to_item(item)
    new(item).to_item
  end

  attr_reader :item, :user_id

  def initialize(obj, author_id = nil)
    @item = obj
    @user_id = author_id
  end

  def to_full
    @struct = item.as_json(include: [:user, :tags])
    struct['editable'] = editable
    struct['votes_total'] = item.votes_total
    struct['date'] = readable_time
    struct['tags_string'] = tags_string
    struct['user']['gravatar'] = item.user.gravatar
    include_answers
    include_comments
    struct
  end

  def list_item_struct
    @struct = item.as_json(include: [:user])
    struct['votes_total'] = item.votes_total
    struct['date'] = readable_time
    struct['timestamp'] = item.created_at.to_i
    struct['user']['gravatar'] = item.user.gravatar
    struct
  end

  def to_item
    @struct = item.as_json(include: :tags)
    struct['tags_string'] = tags_string
    struct
  end

  private

  attr_accessor :struct

  def include_answers
    struct['answers'] = @item.answers.map { |answer| AnswerPresenter.full(answer, user_id) }
  end

  def include_comments
    struct['comments'] = @item.comments.map { |comment| CommentPresenter.with_sub(comment) }
  end

  def readable_time
    item.created_at.strftime('%H:%M %d.%m.%Y')
  end

  def editable
    user_id == item.user_id
  end

  def tags_string
    item.tags.map(&:title).join(' ')
  end
end
