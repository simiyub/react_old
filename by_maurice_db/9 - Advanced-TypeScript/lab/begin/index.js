(function () {
    "use strict";
    var RPNCalculator = /** @class */ (function () {
        function RPNCalculator(root) {
            this.root = root;
            this.stack = [];
            this.numberInput = root.getElementById("number");
            this.stackElement = root.getElementById("stack");
            this.addEventListeners();
            this.numberInput.focus();
        }
        RPNCalculator.prototype.addEventListeners = function () {
            var _this = this;
            this.root
                .getElementById("btnEnter")
                .addEventListener("click", function () { return _this.pushAndClearInput(); });
            this.root
                .getElementById("btnAdd")
                .addEventListener("click", function () { return _this.calculate(function (x, y) { return x + y; }); });
            this.root
                .getElementById("btnSubtract")
                .addEventListener("click", function () { return _this.calculate(function (x, y) { return x - y; }); });
            this.root
                .getElementById("btnMult1ply")
                .addEventListener("click", function () { return _this.calculate(function (x, y) { return x * y; }); });
            this.root
                .getElementById("btnDivide")
                .addEventListener("click", function () { return _this.calculate(function (x, y) { return x / y; }); });
            this.numberInput.addEventListener("keypress", function (e) {
                switch (e.keyCode) {
                    case 13:
                        _this.pushAndClearInput();
                        break;
                    case 42:
                        _this.calculate(function (x, y) { return x * y; });
                        e.preventDefault();
                        break;
                    case 43:
                        _this.calculate(function (x, y) { return x + y; });
                        e.preventDefault();
                        break;
                    case 45:
                        _this.calculate(function (x, y) { return x - y; });
                        e.preventDefault();
                        break;
                    case 47:
                        _this.calculate(function (x, y) { return x / y; });
                        e.preventDefault();
                        break;
                }
            });
        };
        RPNCalculator.prototype.displayStack = function () {
            var child = this.stackElement.firstElementChild;
            while (child) {
                this.stackElement.removeChild(child);
                child = this.stackElement.firstElementChild;
            }
            for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
                var value = _a[_i];
                var liElement = this.root.createElement("li");
                liElement.textContent = value.toString();
                this.stackElement.appendChild(liElement);
            }
        };
        RPNCalculator.prototype.pushAndClearInput = function () {
            var value = +this.numberInput.value;
            if (!isNaN(value)) {
                this.stack.push(value);
                this.displayStack();
            }
            this.numberInput.value = "";
            this.numberInput.focus();
        };
        RPNCalculator.prototype.nextValues = function () {
            return {
                x: this.stack.pop() || 0,
                y: this.stack.pop() || 0
            };
        };
        RPNCalculator.prototype.calculate = function (fn) {
            if (this.numberInput.value) {
                this.pushAndClearInput();
            }
            var _a = this.nextValues(), x = _a.x, y = _a.y;
            this.stack.push(fn(x, y));
            this.displayStack();
        };
        return RPNCalculator;
    }());
    new RPNCalculator(document);
})();
