class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.references :picture
      t.timestamps
    end
  end
end
