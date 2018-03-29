'use strict'

const User = use('App/Models/User')

class RegisterController {
  /*
  |--------------------------------------------------------------------------
  | Register Controller
  |--------------------------------------------------------------------------
  |
  | This controller is in charge of registering users
  | and logging them in after registration.
  */

  /**
   * Get the path to redirect user to after successful login.
   *
   * @method redirectPath
   *
   * @return {String}
   */
  get redirectPath () {
    return '/home'
  }

  /**
   * Display the user login form
   *
   * @method showRegistrationForm
   * @param {object} context adonis js context object
   *
   * @return {String}
   */
  showRegistrationForm ({ view }) {
    return view.render('auth.register')
  }

  /**
   * Store a new user to the database
   *
   * @method registerUser
   * @param {Object} request adonisjs request object
   *
   * @return {Object} newly created user
   */
  async registerUser (request) {
    const user = await User.create(
      request.only(['username', 'email', 'password'])
    )

    return user
  }

  /**
   * Register a new user and log the user in
   *
   * @method register
   * @param {Object} ctx adonisjs context object
   *
   * @return {Object} newly created user
   */
  async register (ctx) {
    const { auth, request, response } = ctx

    try {
      const user = await this.registerUser(request)

      await auth.login(user)
      return this.registered
        ? this.registered(ctx)
        : response.redirect(this.redirectPath)
    } catch (error) {
      return this.sendRegisterErrorResponse(ctx, error)
    }
  }

  /**
   * Handle failed registration scenario
   *
   * @method sendRegisterErrorResponse
   * @param {Object} ctx adonisjs context object
   *
   * @return {void} redirect the user back to the register page
   */
  async sendRegisterErrorResponse ({ session, response }, error) {
    return response.redirect('back')
  }
}

module.exports = RegisterController
