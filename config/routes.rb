Rails.application.routes.draw do

  root 'questions#index'

  get 'questions/list', to: 'questions#list'
  get 'questions/', to: 'questions#index'
  get 'questions/details', to: 'questions#details'
  # get 'questions/:id' to: 'questions#show'
  # post 'questions', to: 'questions#create'


  # resources :votes
  # resources :comments
  # resources :answers
  # resources :questions
  # resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
