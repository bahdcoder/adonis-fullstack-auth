'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
Route.get('/home', 'HomeController.index')
  .middleware('auth')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
Route.post('/logout', 'Auth/LoginController.logout')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
Route.get('/login', 'Auth/LoginController.showLoginForm')
     .middleware('redirectIfAuth')

/*
|--------------------------------------------------------------------------
| Display registration form
|--------------------------------------------------------------------------
|
*/
Route.get('/register', 'Auth/RegisterController.showRegistrationForm')
     .middleware('redirectIfAuth')

/*
|--------------------------------------------------------------------------
| Post login route
|--------------------------------------------------------------------------
|
*/
Route.post('/login', 'Auth/LoginController.login')
     .validator('LoginUser')
     .middleware('redirectIfAuth')

/*
|--------------------------------------------------------------------------
| Post registration route
|--------------------------------------------------------------------------
|
*/
Route.post('/register', 'Auth/RegisterController.register')
     .validator('RegisterUser')
     .middleware('redirectIfAuth')
