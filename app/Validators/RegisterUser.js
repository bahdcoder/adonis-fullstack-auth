'use strict'

class RegisterUser {

  /**
   * Get the validation rules
   *
   * @method rules
   *
   * @return {Object}
   */
  get rules () {
    return {
      'email': 'required|unique:users',
      'username': 'required|string|unique:users',
      'password': 'required|min:6|max:30|confirmed'
    }
  }

    /**
   * Get the validation rules
   *
   * @method rules
   *
   * @return {Object}
   */
  get messages () {
    return {
      'required': 'The {{ field }} is required.',
      'email.unique': 'The email has already been taken.',
      'username.unique': 'The username has already been taken.',
      'password.confirmed': 'The password confirmation does not match.'
    }
  }

  async fails (errorMessages) {
    this.ctx.session.withErrors(errorMessages)
      .flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = RegisterUser
