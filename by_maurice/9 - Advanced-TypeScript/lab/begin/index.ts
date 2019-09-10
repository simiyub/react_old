(function() {
  "use strict";

  class RPNCalculator {
    private stack = [];
    private numberInput;
    private stackElement;

    constructor(private root) {
      this.numberInput = root.getElementById("number");
      this.stackElement = root.getElementById("stack");

      this.addEventListeners();
      this.numberInput.focus();
    }

    addEventListeners() {
      this.root
        .getElementById("btnEnter")
        .addEventListener("click", () => this.pushAndClearInput());

      this.root
        .getElementById("btnAdd")
        .addEventListener("click", () => this.calculate((x, y) => x + y));

      this.root
        .getElementById("btnSubtract")
        .addEventListener("click", () => this.calculate((x, y) => x - y));

      this.root
        .getElementById("btnMult1ply")
        .addEventListener("click", () => this.calculate((x, y) => x * y));

      this.root
        .getElementById("btnDivide")
        .addEventListener("click", () => this.calculate((x, y) => x / y));

      this.numberInput.addEventListener("keypress", e => {
        switch (e.keyCode) {
          case 13:
            this.pushAndClearInput();
            break;
          case 42:
            this.calculate((x, y) => x * y);
            e.preventDefault();
            break;
          case 43:
            this.calculate((x, y) => x + y);
            e.preventDefault();
            break;
          case 45:
            this.calculate((x, y) => x - y);
            e.preventDefault();
            break;
          case 47:
            this.calculate((x, y) => x / y);
            e.preventDefault();
            break;
        }
      });
    }

    displayStack() {
      let child = this.stackElement.firstElementChild;
      while (child) {
        this.stackElement.removeChild(child);
        child = this.stackElement.firstElementChild;
      }

      for (const value of this.stack) {
        const liElement = this.root.createElement("li");
        liElement.textContent = value.toString();
        this.stackElement.appendChild(liElement);
      }
    }

    pushAndClearInput() {
      const value = +this.numberInput.value;
      if (!isNaN(value)) {
        this.stack.push(value);
        this.displayStack();
      }
      this.numberInput.value = "";
      this.numberInput.focus();
    }

    nextValues() {
      return {
        x: this.stack.pop() || 0,
        y: this.stack.pop() || 0
      };
    }

    calculate(fn: Function) {
      if (this.numberInput.value) {
        this.pushAndClearInput();
      }

      const { x, y } = this.nextValues();

      this.stack.push(fn(x, y));
      this.displayStack();
    }
  }

  new RPNCalculator(document);
})();
