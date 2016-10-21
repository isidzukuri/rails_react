class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  private

  def save_responce
    result = if @item.errors.any?
               { errors: @item.errors.messages.to_a }
             else
               @item
             end
    render json: result
  end

  def require_permission
    raise SecurityError, 'Resource not belongs to user.' unless current_user == @item.user
  end
end
