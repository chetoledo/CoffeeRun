(function (window) {
    'use strict';

    var App = window.App || {};
//
//    (function (window) {
//      'use strict';
//      var App = window.App || {};
//
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
       }

    //class Truck() {
    //    this.truckId = truckId;
    //    this.db = db;
    //    console.log('In the Truck constructor');
    //}

    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress,order);
    };

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + 'has pending orders: ');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    };
//    deliverOrder(customerId) {
//        console.log('Delivering ' + db.get(customerId) + 'for ' + customerId);
//        this.db.remove(customerId);
//    }
//
//    printOrders() {
//        var customIdArray = Object.keys(this.db.getAll());
//        console.log('Truck #' + this.truckId + ' has pending orders: ');
//        customerIdArray.forEach(function(id) {
//            console.log(this.db.get.(id));
//
//        }
//
//        });
//    }

    App.Truck = Truck;
    window.App = App;
}) (window);
