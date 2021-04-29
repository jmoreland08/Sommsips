Rails.application.routes.draw do
  resources :notes 
    resources :wines 
      resources :users
  get '/users/:user_id/notes', to: 'notes#index'
  get '/notes', to: 'notes#index'
  get '/users/:user_id/wines', to: 'wines#index'
  get '/wines', to: 'wines#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
