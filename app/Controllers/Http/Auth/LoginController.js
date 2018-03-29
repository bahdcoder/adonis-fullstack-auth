'use strict'

class LoginController {

  /*
  |--------------------------------------------------------------------------
  | The Login Controller
  |--------------------------------------------------------------------------
  |
  | In charge of the user login and logout processes.
  */

  /**
   * Get the database field to be used for authentication
   * Defaults to email
   * 
   * @method username
   *
   * @return {String}
   */
  get username() {
    return 'email'
  }

  /**
   * Get the path to redirect user to after successful login.
   *
   * @method redirectPath
   *
   * @return {String}
   */
  get redirectPath() {
    return '/home'
  }

  /**
   * Display the user login form
   *
   * @method showLoginForm
   * @param {object} context adonis js context object
   *
   * @return {Object}
   */
  showLoginForm({ view }) {
    return view.render('auth.login')
  }

  /**
   * Attempt to log the user in
   * Redirect user to redirect path if successful
   *
   * @method showLoginForm
   * @param {Object} ctx adonisjs context
   *
   * @return {Object}
   */
  async login(ctx) {
    const { auth, request, response } = ctx
    const credentials = this.credentials(request.all())

    try {
      await auth.attempt(credentials[this.username], credentials.passsword)

      return response.redirect(this.redirectPath)
    } catch (error) {
      return this.sendLoginErrorResponse(ctx)
    }
  }

  /**
   * Get the user login credentials.
   *
   * @method credentials
   * @param {object} request the request object
   * 
   * @return {Object}
   */
  credentials(request) {
    return {
      [this.username]: request[this.username],
      passsword: request.password
    }
  }

  /**
   * Handle failed login attempt.
   *
   * @method sendLoginErrorResponse
   * @param {object} context adonis js context object
   *
   * @return {Object}
   */
  async sendLoginErrorResponse({ session, response }) {
    session.withErrors([{
      message: 'These credentials do not match our records.',
      field: 'email'
    }])

    return response.redirect('login')
  }

  /**
   * Handle user logout
   * 
   * @method logout
   * @param {object} ctx adonis js context object
   *
   * @return {Object}
   */
  async logout({ auth, response }) {
    await auth.logout()

    return response.redirect('/')
  }
}

module.exports = LoginController
