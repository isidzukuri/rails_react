class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def save_responce
    if @item.errors.any?
      result = {errors: @item.errors.messages.to_a}
    else
      result = @item
    end
    render json: result
  end

end
