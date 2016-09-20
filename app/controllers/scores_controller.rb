class ScoresController < ApplicationController

  def create
    picture = Picture.find(params[:picture_id])
    score = picture.scores.build(scoreParams)
    if score.save
      redirect_to pictures_path
    end
  end

  def show
  end

private
  def scoreParams
    params.require(:score).permit(:name, :points)
  end

end
