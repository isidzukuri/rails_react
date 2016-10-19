Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :questions
  resources :answers, except: [:show, :edit]

  match ':controller(/:action(/:id))', :via => 'get' 

  root 'questions#index'
end
