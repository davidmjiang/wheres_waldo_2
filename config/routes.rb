Rails.application.routes.draw do

  root 'pictures#show'

  resources :pictures, only: [:index, :show]
  resources :tags, only: [:index, :create, :destroy]
end
