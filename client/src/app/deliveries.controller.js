app.controller("deliveriesController", function(
  $scope,
  $mdDialog,
  $mdToast,
  deliveriesFactory
) {
  $scope.readDeliveries = function() {
    deliveriesFactory.readDeliveries().then(
      function successCallback(response) {
        $scope.deliveries = response.data.deliveries;
      },
      function errorCallback(response) {
        $scope.showToast("Não foi possível buscar os dados");
      }
    );
  };

  $scope.createDelivery = function() {
    deliveriesFactory.createDelivery($scope).then(
      function successCallback(response) {
        $scope.showToast(response.data.message);
        $scope.readDeliveries();
        $scope.cancel();
        $scope.clearDeliveryForm();
      },
      function errorCallback(response) {
        $scope.showToast("Não foi possível salvar a entrega");
      }
    );
  };

  $scope.clearDeliveryForm = function() {
    $scope.name = "";
    $scope.weight = 0;
    $scope.location = "";
  };

  $scope.showToast = function(message) {
    $mdToast.show(
      $mdToast
        .simple()
        .textContent(message)
        .hideDelay(3000)
        .position("top right")
    );
  };

  $scope.confirmDeleteDelivery = function(event) {
    var confirm = $mdDialog
      .confirm()
      .title("Confirma a operação?")
      .textContent("Todos os registros serão excluídos.")
      .targetEvent(event)
      .ok("Sim")
      .cancel("Não");

    $mdDialog.show(confirm).then(
      function() {
        $scope.deleteDelivery();
      },
      function() {}
    );
  };

  $scope.deleteDelivery = function() {
    deliveriesFactory.deleteDelivery().then(
      function successCallback(response) {
        $scope.showToast(response.data.message);
        $scope.readDeliveries();
      },
      function errorCallback(response) {
        $scope.showToast("Não foi possível excluir os registros");
      }
    );
  };
});
