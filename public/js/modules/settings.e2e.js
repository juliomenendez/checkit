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

    describe('changePassword()', function() {
      beforeEach(function(done) {
        Utils.waitForElementVisible('[check=change-password]', done)
      })

      it('shows an error for invalid password', function(done) {
        spyOn(window, 'alert')
        spyOn(window, 'prompt').and.returnValue('invalid pass')

        Utils.triggerEvent('click', document.querySelector('[check=change-password]'))

        Utils.waitFor(window.alert.calls.count, function() {
          expect(window.alert).toHaveBeenCalled()
          done()
        })
      })

      it('successfully change password', function(done) {
        spyOn(window, 'prompt').and.returnValue('****')

        Utils.triggerEvent('click', document.querySelector('[check=change-password]'))

        Utils.waitForElementExists('[check=password-success]', function() {
          expect(document.querySelector('[check=password-success]').textContent).toContain('Password successfully updated.')
          done()
        })
      })
    })

    describe('deleteUser()', function() {
      beforeEach(function(done) {
        Utils.waitForElementVisible('[check=delete-user]', done)
      })

      it('shows an error for invalid password', function(done) {
        spyOn(window, 'alert')
        spyOn(window, 'prompt').and.returnValue('invalid pass')

        Utils.triggerEvent('click', document.querySelector('[check=delete-user]'))

        Utils.waitFor(window.alert.calls.count, function() {
          expect(window.alert).toHaveBeenCalled()
          done()
        })
      })

      it('successfully delete account', function(done) {
        spyOn(window, 'prompt').and.returnValue('****')

        Utils.triggerEvent('click', document.querySelector('[check=delete-user]'))

        Utils.waitFor(function() {
          return ! Auth.isAuthenticated()
        }, function() {
          expect(Auth.isAuthenticated()).toEqual(false)
          done()
        })
      })
    })
  })
})
