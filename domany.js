/**
    domany 

    Executes several asynchronous functions and sends a "done" event when all are done. 

    Takes any number of functions to execute. Each function should take one done() function as an argument, and call that function when it's done (similar to asynchronous testing in Mocha). 


    Example: 

    function task1(done) {
        
        // Do it

        done();
    }

    function task2(done) {
        
        // Do it

        done();
    }

    domany(task1, task2)
        .on('done', function () {
            // All tasks are done
        });

*/

var EventEmitter = require('events').EventEmitter;


function domany() {

    var emitter = new EventEmitter();

    var numberOfRequests = arguments.length,
        numberLoaded = 0,
        i;

    function checkAllDataLoaded() {
        if (++numberLoaded === numberOfRequests) {
            emitter.emit('done');
        }
    }

    for (i = 0; i < numberOfRequests; i++) {
        arguments[i](checkAllDataLoaded);
    }

    return emitter;
}

module.exports = domany;
