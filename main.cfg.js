(function() {
    angular.module("main_module", ["customer_module", "ngRoute", "authentication_module"]);

    angular.module("main_module").config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                'templateUrl': 'js/page/login.html',
                'controller': function($scope, $location, AuthenticationService) {
                    $scope.login = function() {
                        AuthenticationService.login($scope.username, $scope.password,
                            function(response) {
                                if (response.success) {
                                    AuthenticationService.setCredentials(
                                        $scope.username, $scope.password);
                                    $location.path('/');
                                } else {
                                    alert(response.message);
                                    $location.path('/login');
                                }
                            });
                    };
                }
            })

        .when("/customers", {
                'templateUrl': 'js/page/customers.html'
            })
            .when("/orders", {
                'templateUrl': 'js/page/orders.html',
                'controller': function($scope, CustomerService) {
                    CustomerService.getOrders().then(function(result) {
                        $scope.orders = result.data;
                    });
                }
            })
            .when("/", {
                'templateUrl': 'js/page/home.html'
            });

        $locationProvider.html5Mode(true);
    }).run(check); //config

     function check($rootScope, $location, $cookieStore, $http) {
            $rootScope.globals = $cookieStore.get('globals') || {};

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                var loggedIn = $rootScope.globals.username;
                if (restrictedPage && !loggedIn) {
                    $location.path('/login');
                }
            });
        }
})();
