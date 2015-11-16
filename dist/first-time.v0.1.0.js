/*! first-time - v0.1.0 - 2015-11-15
* https://github.com/pbojinov/first-time
* Copyright (c) 2015 Petar Bojinov; Licensed  */
// Uses AMD or browser globals to create a module.

// Grabbed from https://github.com/umdjs/umd/blob/master/amdWeb.js.
// Check out https://github.com/umdjs/umd for more patterns.

// Defines a module "FirstTime".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.

(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.FirstTime = factory();
    }
}(this, function() {

    'use strict';

    var FirstTime = {};

    // add a prefix to the key so they are listed near each other
    // its easier to find when inspecting in DevTools
    var prefix = 'first_time_';

    // Call this function to determine if it is the first time
    function hasItHappened(keyName) {
        var result;
        try {
            result = window.localStorage.getItem(prefix + keyName);
        } catch (e) {
            result = undefined;
        }
        return !!result;
    }

    // Call this function to record the first time
    function itHappened(keyName) {
        var result;
        try {
            result = window.localStorage.setItem(prefix + keyName, 'true');
        } catch (e) {
            result = undefined;
        }
        return result;
    }

    // Expose public API
    FirstTime.hasItHappened = hasItHappened;
    FirstTime.itHappened = itHappened;

    // Return a value to define the module export.
    // This example returns a functions, but the module
    // can return an object as the exported value.
    return FirstTime;
}));
