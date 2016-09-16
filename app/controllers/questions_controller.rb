class QuestionsController < ApplicationController

  def index
  end

  def list
    questions = Question.all.to_json(include: {:user => {only:[:username]}})
    render json: questions
  end

  def details
    # add conditional to check if question exists
    details = Question.find(params[:question]).answers # use jbuilder to add comments
    render json: details
  end


  # def show
  #   question = Question.find(params[:id]).to_json(include: {:user => {only:[:username]}})
  #   render json: question
  # end
end
