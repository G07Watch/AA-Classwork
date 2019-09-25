Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

 resources :users, only: [:index, :create, :show, :update, :destroy] do
  resources :artworks,only: [:index]
 end

 post '/artworks/', to: "artworks#create"
 get  '/artworks/:id', to: "artworks#show"
 patch '/artworks/:id', to: "artworks#update"
 put '/artworks/:id', to: "artworks#update"
 delete '/artworks/:id', to: "artworks#destroy"

 post 'artwork_shares/', to: "artwork_shares#create"
 delete 'artwork_shares/:id', to: "artwork_shares#destroy"

 get '/users/:id/comments/', to: "comments#index"
 get '/artworks/:id/comments/', to: "comments#index"
 post '/comments/', to: "comments#create"
 delete '/comments/', to: "comments#destroy"

end
