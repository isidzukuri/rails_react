class ReactPresenter
  attr_reader :object

  def initialize(obj)
    @object = obj
  end
  
  def json_object
    object.as_json
  end

  

  
end