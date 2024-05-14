class PostsController < ApplicationController
  def index
    @posts = Post.all

    render json: @posts
  end

  def create
    @post = Post.new(name: params[:name], description: params[:description])

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def delete
    @post = Post.find(params[:id])

    @post.destroy

    render json: @post
  end
end
