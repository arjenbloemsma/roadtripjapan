function Loud() {
	return "LOUD!";
}
function Nippon (test) {
	var x = (9 * 90 * 8) / 7;
	return { result: x };
}
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
