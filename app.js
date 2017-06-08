angular.module('ShoppingListCheckOff', [])
.service('ShoppingListCheckOffService', function()
{
  var service = this;
  var boughtItems = [];
  var toBuyItems=[
    {name: "Cookies", quantity: 10},
    {name: "Lays", quantity: 10},
    {name: "Pepsi", quantity: 10},
    {name: "Uncle Chips", quantity: 10},
    {name: "Fruit Cake", quantity: 10}
  ];
  service.doBuy = function(index)
  {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };
  service.getToBuyItems = function()
  {
    return toBuyItems;
  };
  service.getBoughtItems = function()
  {
    return boughtItems;
  };
})
.controller('FirstController', function(ShoppingListCheckOffService)
{
  var service1 = this;

  service1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  service1.doBuy = function(index)
  {
    ShoppingListCheckOffService.doBuy(index);
  }
})
.controller('SecondController', function(ShoppingListCheckOffService)
{
  var service2 = this;
  service2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
});
