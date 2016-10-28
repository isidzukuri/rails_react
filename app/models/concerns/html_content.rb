module HtmlContent
  def self.included(base)
    base.instance_eval do
      before_validation :strip_tags
    end
  end

  def strip_tags
    elements = ['b','a','ul','ol','li','p','br', 'code', 'u']
    attrs = {'a'=> ['href']}
    self.content = Sanitize.fragment(content, :elements => elements, :attributes => attrs).strip unless content.nil?
  end
end
