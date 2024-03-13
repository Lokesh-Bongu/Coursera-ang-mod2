(function () {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;
      toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
  
      toBuyCtrl.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      };
    }
  
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtCtrl = this;
      boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
      var toBuyList = [
        { name: 'Cookies', quantity: 10 },
        { name: 'Chocolates', quantity: 5 },
        { name: 'Apples', quantity: 5 },
        { name: 'Biscuits', quantity: 2 },
        { name: 'Icecreams', quantity: 5 }
        // Add more items as needed
      ];
      var boughtList = [];
  
      service.getToBuyList = function () {
        return toBuyList;
      };
  
      service.getBoughtList = function () {
        return boughtList;
      };
  
      service.buyItem = function (index) {
        var boughtItem = toBuyList.splice(index, 1)[0];
        boughtList.push(boughtItem);
      };
    }
  })();
  