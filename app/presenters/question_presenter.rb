class QuestionPresenter

  def self.present item
    questions_path
    new(item).present
  end

  private

  def initialize item
    item = [item] unless item.is_a?(Array)
    @items = item
  end


  def present
    


    @items = @items.first unless @items.length > 1
    return @items 
  end
  

  
end