'use strict'

class RedirectIfAuthenticated {
  /**
   * Handle incoming request.
   * Redirects user to home if user is already logged in.
   *
   * @method handle
   *
   * @return {void} calls next to proceed with request lifecycle
   */
  async handle ({ response, auth }, next) {
    if (auth.user) {
      return response.redirect('/home')
    }

    await next()
  }
}

module.exports = RedirectIfAuthenticated
