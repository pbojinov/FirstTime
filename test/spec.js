/**
 * FirstTime
 *
 *    Library test
 */

define([
    'intern!bdd',
    'intern/chai!expect',
    'lib/first-time',
], function (bdd, expect, FirstTime) {
    
    with(bdd) {

        describe('a super hip artisan micro library', function() {

            var key = 'revolution';

            it('should return false when it is the first time', function() {
                var result = FirstTime.hasItHappened(key);
                expect(result).to.equal(false);
            });

            it('should return undefined after recording the first run action', function() {
                var action = FirstTime.itHappened(key); // orly?
                expect(action).to.equal(undefined);
            });

            // it('should return true when it is NOT the first time', function() {
            //     var result = FirstTime.hasItHappened(key);
            //     expect(result).to.equal(true);
            // });
        });
    }
});
