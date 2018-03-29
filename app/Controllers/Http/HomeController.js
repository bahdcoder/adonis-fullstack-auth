'use strict'

class HomeController {
  /*
  |--------------------------------------------------------------------------
  | Home Controller
  |--------------------------------------------------------------------------
  |
  | Displays the home page, guarded with the auth middleware
  */

  /**
   * Display the home view
   *
   * @method index
   * @param {object} context adonis js context object
   *
   * @return {Object} render the home view
   */
  index ({ view }) {
    return view.render('home')
  }
}

module.exports = HomeController
