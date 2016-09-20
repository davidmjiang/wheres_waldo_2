class TagsController < ApplicationController
  def index
    @tags = Tag.all
    respond_to do |format|
        format.js
    end
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      respond_to do |format|
        format.html{redirect_to root}
        format.js
      end
    else
      respond_to do |format|
        format.html{render root}
        format.js{head :none}
      end
    end

  end

  private

  def tag_params
    params.require(:tag).permit(:name, :x, :y)
  end

end
