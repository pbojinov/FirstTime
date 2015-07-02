/**
 * firstTime
 *
 *    Library test
 */

define([
    'intern!bdd',
    'intern/chai!expect',
    'lib/firstTime',
], function (bdd, expect, firstTime) {
    with(bdd) {

        describe('Newschool amd library', function() {
            it('Library answer questions with YO!', function() {
                var result = firstTime('Should I tickle this unicorn?');
                expect(result).to.equal('YO!');
            })
        });
    }
});
