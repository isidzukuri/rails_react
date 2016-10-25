Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions
  resources :answers, except: [:show, :edit]
  resources :comments, except: [:show, :edit]
  resources :tags

  get '/vote', to: 'votes#vote', as: 'vote'

  match ':controller(/:action(/:id))', :via => 'get' 

  root 'questions#index'
end
