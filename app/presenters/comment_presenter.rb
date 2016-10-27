class CommentPresenter
  def self.with_sub(item)
    comments = []
    struct = item.as_json
    struct['comments'] = []
    if item.comments.present?
      struct['comments'] = item.comments.map { |comment| with_sub(comment) }
    end
    struct
  end
end
