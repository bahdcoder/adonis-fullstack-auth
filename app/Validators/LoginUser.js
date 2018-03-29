'use strict'

/**
 * Validator for user login process
 */
class LoginUser {
  /**
   * Define validation rules
   *
   * @returns {Object} rules for validation
   */
  get rules () {
    return {
      'email': 'required|email',
      'password': 'required'
    }
  }

  /**
   * Define custom validation messages
   *
   * @returns {Object} custom validation messages
   */
  get messages () {
    return {
      'required': 'The {{ field }} is required.'
    }
  }

  /**
   * Handle validation failures. Flashes errors to session.
   * @param {Array} errorMessages the validation error messages
   *
   * @returns {Object} validation errors
   */
  async fails (errorMessages) {
    this.ctx.session.withErrors(errorMessages)
      .flashAll()

    this.ctx.response.redirect('back')
  }
}

module.exports = LoginUser
