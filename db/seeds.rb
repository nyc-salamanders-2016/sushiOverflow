# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nokogiri = User.create({ username: 'nokogiri', email: "nokogiri@hotmail.com", password: "sushi" })
ryu = User.create({ username: 'ryu', email: "ryu@hotmail.com", password: "sushi" })
yoshi = User.create({ username: 'yoshi', email: "yoshi@hotmail.com", password: "sushi" })

question1 = Question.create({ title: 'Where is the best sushi in NYC???', body: "I need help.", user: nokogiri })
question2 = Question.create({ title: 'Where is the cheapest sushi in NYC???', body: "I need help and money.", user: ryu })
question3 = Question.create({ title: 'Yoshi???', body: "Yoshi.", user: yoshi })

answer1 = Answer.create({ body: "Easy: Tomoe in W Village. I spent all my money there.", question: question1, user: ryu })
answer2 = Answer.create({ body: "Go to Tomoe Sushi with Edwin and eat off his plate", question: question2, user: nokogiri })
answer3 = Answer.create({ body: "Yoshi!", question: question1, user: yoshi })
