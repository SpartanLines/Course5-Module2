(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuy = this;

  ToBuy.initialItems = [
{ name: "cookies", quantity: 10 },
{ name: "fries", quantity: 5 },
{ name: "pizza", quantity: 11 },
{ name: "salad", quantity: 14 },
{ name: "veggies", quantity: 31 },
{ name: "water", quantity: 7},
{ name: "coke", quantity: 1 }
  ];

  ToBuy.addInitialItems = function () {
    ShoppingListCheckOffService.addInitialItem(ToBuy.initialItems);
  }
  ToBuy.addInitialItems();
  ToBuy.ToBuyItems=ShoppingListCheckOffService.getToBuyItems();
  ToBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}



ShoppingListShowController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListShowController(ShoppingListCheckOffService) {
  var CheckOff = this;

  CheckOff.BoughtItems = ShoppingListCheckOffService.getBoughtItems();


}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [];
  var bought= [];
  service.addInitialItem = function (initialItems) {

    console.log('I ve been invoked');
  initialItems.forEach(function (item){
    toBuy.push(item);
  })

  };

  service.removeItem = function (itemIdex) {
    var temp=toBuy.splice(itemIdex, 1);
    console.log(temp);
    bought.push(temp)
  };

  service.getToBuyItems = function () {
    return toBuy;
  };
  service.getBoughtItems = function () {
    return bought;
  };
}

})();
