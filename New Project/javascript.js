var custApp=angular.module('custApp',[]);
custApp.controller("CustomerController",function($scope){    
        $scope.customers = [{fname:'abc',lname:'def',email:'abc@gmail.com',city:'Jaipur',order:3},
                            {fname:'abc',lname:'def',email:'abc@gmail.com',city:'Jaipur',order:3},
                            {fname:'abc',lname:'def',email:'abc@gmail.com',city:'Jaipur',order:3},
        {fname:'xyz',lname:'jkl',email:'xyz@gmail.com',city:'udaipur',order:3}];
  
   $scope.addCustomer = function() {
        $scope.customers.push(
            {
            fname:$scope.newcustomer.fname,
            lname:$scope.newcustomer.lname,
            email:$scope.newcustomer.email,
            city:$scope.newcustomer.city,
            order:$scope.newcustomer.order
            });
        
    }
    });

function change()
{
  var x=document.getElementById("repeatBlock");
  x.style.float=none;
}
