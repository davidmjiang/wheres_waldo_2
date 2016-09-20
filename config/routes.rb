Rails.application.routes.draw do

  root 'pictures#index'

  resources :pictures, only: [:index, :show] do
    resources :scores, only: [:create]
  end
  resources :tags, only: [:index, :create, :destroy]
end
