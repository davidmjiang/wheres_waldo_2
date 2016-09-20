class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end


  def show
    @picture = Picture.find(params[:id])
    @scores = @picture.scores.order(points: :desc).first(5)
  end


end
