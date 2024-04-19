const payload = {
  '@component': 'alert',
  '@variant': 'info',
  heading: 'Hello Dilla from Angular!',
}

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5.js'

angular
  .module('dillaApp', [])
  .component('dillaRender', {
    controller: function ($scope, $sce) {
      import(path).then((dilla) => {
        dilla.default().then(() => {
          const { body, system_stylesheet, stylesheet } = dilla.render(payload)
          $scope.$apply(() => {
            this.content = $sce.trustAsHtml(body + system_stylesheet + stylesheet)
          })
        })
      })
    },
    template: '<div ng-bind-html="::$ctrl.content"></div>',
  })
