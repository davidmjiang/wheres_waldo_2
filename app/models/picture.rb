class Picture < ApplicationRecord
  has_many :scores
  has_many :characters

  def getHighScore
    scores.order(points: :desc).first(5)
  end
end
