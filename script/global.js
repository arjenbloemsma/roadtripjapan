var Test = (function () {
    function Test() {
    }
    Test.prototype.Hello = function (msg) {
        alert(msg);
    };
    return Test;
})();
// tadaa
var t = new Test();
t.Hello('Sushi super ninja 8889 style!');
