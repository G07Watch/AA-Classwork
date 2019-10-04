Rails.application.routes.draw do

  namespace :api do
    get 'benches/index'
    get 'benches/create'
  end
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :create, :show ]
    resource :session, only: [ :create, :destroy ]
    resources :benches, only: [ :index, :create ]
  end
  
  root to: 'static_pages#root'
end
