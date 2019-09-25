# README

================= SCHEMA =================
User
  Record a username; make sure it is unique.

Poll
  A Poll belongs to an author (User)
  Record a title.

Question
  A Poll has many Questions. Record the text.

AnswerChoice
  A Question has many AnswerChoices. These are the options that a User can choose from when responding to the question. Record the text.

Response
  A User answers to a Questions by choosing an AnswerChoice.
  What pair of foreign keys will you need?



================= ASSOCIATIONS =================

User( username )
  authored_polls (user_id) [has_many]
  responses (user_id, question_id?) [has many]

Poll ( title ) 
  author (user_id) [belongs_to]
  questions (poll_id) [has_many]

Question ( body)
  answer_choices (question_id) [has_many]
  poll (poll_id) [belongs_to]
  
AnswerChoice
  question (question_id) [belongs_to]
  responses (answer_choice_id) [has_many]

Response
  answer_choice (answerc_choice_id) [belongs_to]
  respondent (user_id) [belongs_to]
