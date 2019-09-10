(function() {
  "use strict";

  class RPNCalculator {
    private stack: number[] = [];
    private numberInput: HTMLInputElement;
    private stackElement: HTMLElement | null;

    constructor(private root: Document) {
      this.numberInput = root.getElementById("number") as HTMLInputElement;
      this.stackElement = root.getElementById("stack");

      this.addEventListeners();
      this.numberInput.focus();
    }

    addEventListeners() {
      const btnEnter = this.root.getElementById("btnEnter");
      const btnAdd = this.root.getElementById("btnAdd");
      const btnSubtract = this.root.getElementById("btnSubtract");
      const btnMultiply = this.root.getElementById("btnMultiply");
      const btnDivide = this.root.getElementById("btnDivide");

      btnEnter &&
        btnEnter.addEventListener("click", () => this.pushAndClearInput());

      btnAdd &&
        btnAdd.addEventListener("click", () =>
          this.calculate((x: number, y: number) => x + y)
        );

      btnSubtract &&
        btnSubtract.addEventListener("click", () =>
          this.calculate((x: number, y: number) => x - y)
        );

      btnMultiply &&
        btnMultiply.addEventListener("click", () =>
          this.calculate((x: number, y: number) => x * y)
        );

      btnDivide &&
        btnDivide.addEventListener("click", () =>
          this.calculate((x: number, y: number) => x / y)
        );

      this.numberInput.addEventListener("keypress", e => {
        switch (e.keyCode) {
          case 13:
            this.pushAndClearInput();
            break;
          case 42:
            this.calculate((x: number, y: number) => x * y);
            e.preventDefault();
            break;
          case 43:
            this.calculate((x: number, y: number) => x + y);
            e.preventDefault();
            break;
          case 45:
            this.calculate((x: number, y: number) => x - y);
            e.preventDefault();
            break;
          case 47:
            this.calculate((x: number, y: number) => x / y);
            e.preventDefault();
            break;
        }
      });
    }

    displayStack() {
      if (this.stackElement) {
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
