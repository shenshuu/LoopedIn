Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :index, :update]
    resources :comments, only: [:create, :update, :destroy, :index]
    resources :likes, only: [:create, :destroy, :index]
    resources :experiences, only: [:create, :destroy, :update, :index]
    resources :educations, only: [:create, :destroy, :update, :index]
    resources :connects, only: [:create, :destroy, :update, :index]
  end 
end
