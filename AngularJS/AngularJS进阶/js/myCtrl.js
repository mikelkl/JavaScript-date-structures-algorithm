/**
 * Created by Administrator on 2016/9/16.
 */
angular.module('app', [])
    .controller('FirstCtrl', function ($scope) {
        $scope.msg = 'hello angular';
    })
    .controller('NextCtrl', function ($scope) {
        $scope.msg = 'hello baby';
    })

angular.module('app1', [])
    .controller('MyCtrl', function ($scope) {
        $scope.msg = "";
        $scope.user = {uname: "", pwd: ""};
        $scope.errormsg = "";
        $scope.reverse = function () {
            return $scope.msg.split("").reverse().join("");
        }
        $scope.login = function () {
            if ($scope.user.uname == "admin" && $scope.user.pwd == "123") {
                alert("��½�ɹ�");
            } else {
                $scope.errormsg = "�û������������";
            }
        }
    })