/// <reference path="angular-1.2.14.js" />
angular
  .module('components', [])
  .directive('contactInfo', function () {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div class="contactInfo">' +
          '<h1 class="grid_12">Contact</h1>' +
          '<div class="section clearfix">' +
            '<h3 class="grid_3">{{ContactInfo.FirstName}} {{ContactInfo.LastName}}</h3>' +
            '<div class="grid_9">' +
              '<p>' +
                '<a href="mailto: {{ContactInfo.Email}}">{{ContactInfo.Email}}</a><br/>' +
                '{{ContactInfo.Phone}}<br/>' +
                '<a href="http://{{ContactInfo.Web}}">{{ContactInfo.Web}}</a>' +
              '</p>' +
              '<p>' +
                '{{ContactInfo.Address.Address}}<br/>' +
                '{{ContactInfo.Address.City}}, {{ContactInfo.Address.State}} {{ContactInfo.Address.ZipCode}}' +
              '</p>' +
            '</div>' +
          '</div>' +
        '</div>',
      replace: true
    };
  })
  .directive('skills', function () {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div class="section clearfix">' +
          '<h1 class="grid_12">Skills</h1>' +
          '<div ng-repeat="skillType in Skills">' +
            '<h3 class="grid_3">{{skillType.Name}}</h3>' +
            '<div class="grid_9">' +
            '<div ng-repeat="skillItem in skillType.Items">' +
              '<skill-item />' +
            '</div>' +
            '</div>' +
          '</div>',
      replace: true
    };
  })
  .directive('skillItem', function () {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div>' +
    '<h4>{{skillItem.Name}}</h4>' +
    '<ul class="separated">' +
            '<li ng-repeat="skillItemExample in skillItem.Children">' +
              //If the Url is supplied...
              '<a ng-if="skillItemExample.Url" href="{{skillItemExample.Name}}">{{skillItemExample.Name}}</a>' +
              //otherwise just show the name...
              '<span ng-if="!skillItemExample.Url">{{skillItemExample.Name}}</span>' +
            '</li>' +
          '</ul>' +
        '<div>',
      replace: true
    };
  })
  .directive('workExperience', function () {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div>' +
    '<h1 class="grid_12">Work Experience</h1>' +
          '<div class="section clearfix" ng-repeat="workInstance in WorkExperience">' +
      '<h3 class="grid_3">{{workInstance.CompanyName}} <span class="location">{{workInstance.Address}}</span></h3>' +
      '<div class="grid_9">' +
      '<h4>{{workInstance.Title}}</h4>' +
      '<p>{{workInstance.StartDate | date:"MMMM yyyy"}} <span class="quiet">to</span> {{workInstance.EndDate | date:"MMMM yyyy"}} <span ng-if="!workInstance.EndDate">Current</span></p>' +
              '<p class="description">{{workInstance.Description}}</p>' +
              '<ul ng-if="workInstance.LanguageConcentration" class="separated">' +
                '<li ng-repeat="language in workInstance.LanguageConcentration">' +
                      '{{language.Name}} <span class="quiet">({{math.round(language.Weight * 100) }}%)' +
                '</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>',
      replace: true
    };
  });