# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting old data"

Picture.destroy_all
Score.destroy_all

puts "Creating pictures"

Picture.create(:file_name => "1.jpg")
Picture.create(:file_name => "waldo2.jpg")

puts "Creating scores"

Picture.all.each do |p|
  5.times do 
    p.scores.create({:name => "High Scorer", :points => 0})
  end
end

puts "Done"