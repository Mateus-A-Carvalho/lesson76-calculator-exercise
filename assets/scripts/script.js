function createCalculator() {
  return {
    display: document.querySelector(".display"),
    bntClear : document.querySelector(".btn-clear"),

    run() {
      this.clickButtons();
      this.enterPressed();
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const element = e.target;

        if (element.classList.contains('btn-num'))  this.showButtonsDisplay(element.innerText);

        if(element.classList.contains('btn-clear')) this.eraseButton();

        if(element.classList.contains('btn-del')) this.eraseOne();

        if(element.classList.contains('btn-equal')) this.makeCount();
      })
    },

    makeCount() {
      let count = this.display.value;
      
      try {
        count = eval(count);

        if(!count) {
          alert('Invalid Value!');
          return;
        }

        this.display.value = count;

      } catch(e) {
        alert('Invalide Value!');
        return; 
      }
    },

    enterPressed() {
      this.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) this.makeCount();
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