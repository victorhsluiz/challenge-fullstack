app.factory("deliveriesFactory", function($http){
 
  const factory = {};
  const url = 'http://localhost:3333/deliveries';

  factory.readDeliveries = function(){
    return $http({
      method: 'GET',
      url
    });
  };
   
  factory.createDelivery = function($scope){
    return $http({
      method: 'POST',
      data: {
          'name' : $scope.name,
          'weight' : $scope.weight,
          'location' : $scope.location
      },
      url
    });
  };

// delete product
factory.deleteProduct = function(id){
  return $http({
      method: 'DELETE',
      url
  });
};
   
  return factory;
});