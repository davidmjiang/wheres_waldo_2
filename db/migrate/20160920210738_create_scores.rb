class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :points
      t.references :picture
      t.timestamps
    end
  end
end
