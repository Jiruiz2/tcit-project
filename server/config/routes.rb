Rails.application.routes.draw do
  get 'posts', to: 'posts#index'
  post 'posts', to: 'posts#create'
  delete 'posts/:id', to: 'posts#delete'
end
