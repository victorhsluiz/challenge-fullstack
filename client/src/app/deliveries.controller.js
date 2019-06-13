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
        $scope.totals = response.data.totals[0]
          ? `Total de Entregas: ${
              response.data.totals[0].count
            } - Peso Total: ${response.data.totals[0].total_weight}`
          : "";
      },
      function errorCallback(response) {
        $scope.showToast("Não foi possível buscar os dados");
      }
    );
  };

  $scope.createDelivery = function() {
    deliveriesFactory.createDelivery($scope).then(
      function successCallback(response) {
        $scope.showToast("Entrega salva com sucesso");
        $scope.readDeliveries();
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

  $scope.confirmDeleteDeliveries = function(event) {
    var confirm = $mdDialog
      .confirm()
      .title("Confirma a operação?")
      .textContent("Todos os registros serão excluídos.")
      .targetEvent(event)
      .ok("Sim")
      .cancel("Não");

    $mdDialog.show(confirm).then(
      function() {
        $scope.deleteDeliveries();
      },
      function() {}
    );
  };

  $scope.deleteDeliveries = function() {
    deliveriesFactory.deleteDeliveries().then(
      function successCallback(response) {
        $scope.showToast("Registros excluídos com sucesso");
        $scope.readDeliveries();
      },
      function errorCallback(response) {
        $scope.showToast("Não foi possível excluir os registros");
      }
    );
  };
});
