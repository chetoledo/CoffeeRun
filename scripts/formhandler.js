(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  class FormHandler {
    constructor(selector) {
      if (!selector) {
        throw new Error('No selector provided');
      }
      this.$formElement = $(selector);
      if (this.$formElement.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
      }
    }
    //Adding the submit handler
    addSubmitHandler(fn) {
      console.log('Setting submit handler for form');

      this.$formElement.on('submit', function (event) {
        event.preventDefault(); //Prevents from leaving the coffeerun page

        //Extracting the data, pg 217
        var data = {};
        $(this).serializeArray().forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        fn(data);
        //UI Enhancements
        this.reset();
        this.elements[0].focus();
      });
    }
      //Listening for input events (pg 249)
      addInputHandler(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
        var emailAddress = event.target.value;
        // console.log(fn(emailAddress));  //pg 252 states to remove this line
        // pg 252 Triggering the validity check
        var message = '';
        if (fn(emailAddress)) {
          event.target.setCustomValidity('');
        } else {
          message = emailAddress + ' is not an authorized email address! '
          event.target.setCustomValidity(message);
        }
        });
    }
  }

  App.FormHandler = FormHandler;
  window.App = App;

}) (window);
