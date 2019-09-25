# README

Users
	null:false 
	password_digest

	index: unique	
		email
		session_token


User model
	generate session token
	reset session token
	ensure session token
	password=(password)
	is_password?(password)

after initialize :ensure session token
	
	find by credentials(email, password)


UsersController

	new
	create
		log in on creation


SessionsController
	resource session (in routes)

	create
		resets user session_token and session[:session_token]
		redirect to user-show page

ApplicationController
	current user
		return current user
	logged_in?
		true or false
	log_in_user!(user)
		reset users session token and cookie
	