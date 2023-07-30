function createCalculator() {
  return {
    display: document.querySelector(".display"),
    bntClear : document.querySelector(".btn-clear"),

    run() {
      this.clickButtons();
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const element = e.target;

        if (element.classList.contains('btn-num'))  this.showButtonsDisplay(element.innerText);

        if(element.classList.contains('btn-clear')) this.eraseButton();

        if(element.classList.contains('bnt-del')) this.ereaseOne();

      })
    },

    showButtonsDisplay(btnValue) {
      this.display.value += btnValue;
    },

    eraseButton() {
      this.display.value = '';
    },

    eraseOne() {
      this.display.value = this.display.value.slice(0, -1);
    }
  }
}

const calculator = createCalculator();
calculator.run();