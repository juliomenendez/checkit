define([
  'services/auth',
  'services/test-utils'
], function(Auth, Utils) {

  describe('dashboard.settings', function() {
    beforeEach(function(done) {
      Utils.login(authUser, done)
    })

    beforeEach(function(done) {
      Utils.waitForElementExists('.header .header_settings', function() {
        Utils.triggerEvent('click', document.querySelector('.header .header_settings'));
        done()
      });
    })

    afterEach(Utils.logout)

    /*
    describe('deleteUser()', function() {
      beforeEach(function(done) {
        Utils.waitForElementVisible('[test=delete-user]', done)
      })

      it('shows an error for invalid password', function(done) {
        spyOn(window, 'alert')
        spyOn(window, 'prompt').and.returnValue('invalid pass')

        Utils.triggerEvent('click', document.querySelector('[test=delete-user]'))

        Utils.waitFor(window.alert.calls.count, function() {
          expect(window.alert).toHaveBeenCalled()
          done()
        })
      })

      it('successfully delete account', function(done) {
        spyOn(window, 'prompt').and.returnValue('****')

        Utils.triggerEvent('click', document.querySelector('[test=delete-user]'))

        Utils.waitFor(function() {
          return ! Auth.isAuthenticated()
        }, function() {
          expect(Auth.isAuthenticated()).toEqual(false)
          done()
        })
      })
    })
    */
  })
})
