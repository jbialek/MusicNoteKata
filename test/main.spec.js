//var assert = require("assert")
 var assert=chai.assert;
 var expect=chai.expect;

describe('...', function(){

    describe('test getNote function', function(){
        it('should return appropriate note', function(){

            var spy = sinon.spy(getNote);
            expect(spy.call(getNote, 277)).to.be.equal("C#");
            expect(spy.call(getNote, "277")).to.be.equal("C#");
            expect(spy.calledTwice).to.be.equal(true);
                       //console.log(spy.called);
        })

        it('should not return appropriate note', function(){
            expect(getNote(230)).not.equal("C#");
            expect(getNote("220")).not.equal("C#");
            expect(getNote("6060")).not.exist;

        })

        it('should return exception', function(){
            assert.throws(getNote, Error, "parameter is null");

        })
    })

    describe('test getFrequency function', function(){
        it('should return appropriate frequency', function(){
            expect(getFrequency("C#")).to.be.equal("277");



        })

        it('should not return appropriate frequency', function(){
            expect(getFrequency("C#")).not.equal("220");

            expect(getFrequency("Z#")).not.exist;

        })

        it('should return exception', function(){
            assert.throws(getFrequency, Error, "parameter is null");

        })
    })

    /*describe("#getNote", function() {
        it("should log an error if no target is passed in", function() {
            (new Cow()).getNote();

            sinon.assert.notCalled(console.log);
            sinon.assert.calledOnce(console.error);
            sinon.assert.calledWithExactly(console.error, "missing target")
        });

        it("should log greetings", function() {
            var greetings = (new Cow("Kate")).greets("Baby");

            sinon.assert.notCalled(console.error);
            sinon.assert.calledOnce(console.log);
            sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
        });

        }
      */


})