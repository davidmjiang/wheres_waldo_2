Rails.application.routes.draw do

  root 'pictures#show'

  resources :pictures, only: [:index, :show]

end
