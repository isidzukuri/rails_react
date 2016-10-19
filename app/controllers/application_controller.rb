class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def save_responce
    result = if @item.errors.any?
               { errors: @item.errors.messages.to_a }
             else
               @item
             end
    render json: result
  end
end
