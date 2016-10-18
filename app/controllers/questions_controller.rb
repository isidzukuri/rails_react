class QuestionsController < ApplicationController

  def index
    @presenter = {
      :items => Question.all,
      :form => {
        :action => questions_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }
  end

  def create
    @item = Question.new(permited_params)
    @item.save

    # if request.xhr?
    #   render :json => Comment.last(5)
    # else
    #   redirect_to comments_path
    # end
  end

  private

  def permited_params
    params.require(:question).permit(:title, :content)
  end

  # def new
  #   @item = Question.new
  # end

  # def create
  #   authorize! :create, Product
  #   @item = Product.new(permited_params)
  #   if @item.save
  #     add_flash 'Saved successfully'
  #     redirect_to @item
  #   else
  #     render :new
  #   end
  # end

  # def update
  #   @item = Product.find(params[:id])
  #   if @item.update(permited_params)
  #     add_flash 'Saved successfully'
  #     redirect_to @item
  #   else
  #     render :edit
  #   end
  # end

  # def destroy
  #   @item = Product.find(params[:id])
  #   if @item
  #     @item.destroy
  #     add_flash 'Destroyed successfully'
  #   else
  #     add_flash 'Product not found', :error
  #   end
  #   redirect_to root_path
  # end

  # private

  # def find_item
  #   @item = Product.eager_load(:category).find(params[:id])
  # end

  # def permited_params
  #   params.require(:product).permit(:title, :description, :price, :category_id)
  # end
end
