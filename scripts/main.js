(function (window)
{
    'use strict';

    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    //pg 272 
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    //pg 250 "Validation"
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    //pg 272
    var remoteDS = new RemoteDataStore(SERVER_URL);

    var myTruck = new Truck('ncc-1701', remoteDS); 
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    //checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    //Manipulating 'this' with call, pg 236
    formHandler.addSubmitHandler(function (data){
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    //pg 251,Implementing 'Validation.js' 
    formHandler.addInputHandler(Validation.isCompanyEmail);
    // console.log(formHandler);

})(window);
