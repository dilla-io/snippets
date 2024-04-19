const artefact = 'component'
const id = 'card'

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5_dev.js'

angular
  .module('dillaApp', [])
  .component('dillaDescribe', {
    controller: function ($scope, $sce) {
      import(path).then((dilla) => {
        dilla.default().then(() => {
          const result = JSON.parse(dilla.describe(artefact, id))
          $scope.$apply(() => {
            this.content = $sce.trustAsHtml(JSON.stringify(result, null, 2))
          })
        })
      })
    },
    template: '<pre ng-bind-html="::$ctrl.content"></pre>',
  })
