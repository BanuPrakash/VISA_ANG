
AngularJS 1.5
by Banu Prakash. C
banuprakashc@yahoo.co.in
------------------------

Editor:
	Sublime Text [https://www.sublimetext.com/3]
	Visual Studio Code
	Brackets
Node JS LTS
	Download [https://nodejs.org/en/]

---------------------------------------------------------

Angular JS

Traditional Web applications:
	using Servlet Tech, ASP Tech, PHP, ...

	Server Side rendering


Single Page Application:
	
	JSON as data representation.
	Rendering happens in client Machine.

	Client Side Rendering

	1) Libraries like jQuery, D3
			for DOM manipulation and DOM traversing
	2) Templates
		Underscore, HandleBars, Mustache

	3) Why Frameworks?
		
		Some of the problems faced while building SPA:

		1) Data binding
			two-way binding
		2) Dependency Management
			using Inversion Of Control
		3) Routing

			http://flipkart.com/mobiles
			http://flipkart.com/tv
			http://flipkart.com/mobiles/iphone7
			http://flipkart.com/mobiles/pixel

		4) Template cache	


		JavaScript Frameworks using MVC Architectural pattern

		M --> Model
		V --> View [Presentation logic]
		C --> Controller [ Application flow ]

		1) Backbone JS
		2) Angular JS
		3) CanJS
		4) ExtJS
		5) EmberJS
		6) ReactJS
----------------------------------

Angular JS

	create .bowerrc file

	{
		"directory":"vendor"
	}


https://github.com/BanuPrakash/VISA_ANG

download visa_ng.zip

extract the contents into your folder

-----------------------------------------------------------

Angular Modules

var ng = angular.module("sample_module", []);

ng.controller("SampleController",FirstController );

function FirstController($scope) {
	$scope.data = "Hello World";
}

---

ng.controller("SampleController",function($scope) {
	$scope.data = "Hello World";
});

ng.controller("SampleController",["$scope", function($scope) {
	$scope.data = "Hello World";
}]);

-------
ng.controller("SampleController",FirstController );

function FirstController($scope) {
	$scope.data = "Hello World";
}

FirstController.$inject = ["$scope"];



html

	<body ng-app="sample_module">
		<div ng-controller="SampleController">
			{{data}}
		</div>
	</body>

------------------------

E2E testing
Steps:

1) install protractor
	npm install -g protractor
2) create conf.js
	specify:
		framework --> JAsmine/ Mocha/ etc
		specify capabalities : chrome // which browser to use
		specify the spec file
 3) create Test Specification
 	describe --> test suite
 	it --> test case

 4) once update selenium server
 	webdriver-manager update
 5) start seleinium server
 	webdriver-manager start

 6) Start http-server
 	$ http-server

 7) start protractor tests
 	/test/e2e> protractor conf.js 
------------------------------------------



Directives
---------

Built-in directives:
1) ng-app
2) ng-controller
3) ng-if
4) ng-show
5) ng-repeat
6) ng-model

Why Custom Directives?
	1) Modularity
	2) Easy to test
	3) Reusable

 <div ng-repeat="customer in customers">
	<card-view>
	</card-view>
</div>

 <div ng-repeat="product in products">
	<card-view>
	</card-view>
</div>

-------------------------
Controller
Directives
Services
	[Interaction with backend]
	to make REST calls
	RESPRESENTATION STATE TRANSFER

	Server serves different representations:
		JSON, XML, ATOM , RSS feed

 npm install -g json-server


json-server --port 3000 --static . --watch data.json

---------------------------

Controller, service and directive
config module
1) Routers
2) authententication
3) i18N

	Routers

	SPA --> Single Page Applications

	http://localhost:3000/index.html#/
		should display home page

	http://localhost:3000/index.html#/customers
		should display customer data

	http://localhost:3000/index.html#/orders
		should display orders data
