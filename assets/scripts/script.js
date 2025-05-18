function createCalculator() {

  return {

    display: document.querySelector(".input"), // cachting the display element
    bntClear: document.querySelector(`.btn-clear`), // cachting the clear button
  
    start() { // This method initializes the calculator
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener(`keyup`, (e) => {
        if(e.keyCode === 13) {
          this.makeCount();
        }
      });
    },

    clickButtons() {
      document.addEventListener("click", (e) => { //Cathing the click event;
        const element = e.target;

        if(element.classList.contains(`btn-num`)) { // checking if the clicked element has a clss of btn-num
          this.btnToDisplay(element.innerText); // if it does, we call the btnToDisplay method;
        }

        if(element.classList.contains(`btn-clear`)) { // checking if the clicked element has a clss of btn-clear
          this.clearDisplay(); // if it does, we call the clearDisplay method;
        }

        if(element.classList.contains(`btn-del`)) {
          this.deleteOne();
        }

        if(element.classList.contains(`btn-equal`)) { // checking if the clicked element has a clss of btn-eq
          this.makeCount(); // if it does, we call the makeCount method;
        }
      }); // binding the event to the current instance of the calculator

    },

    btnToDisplay(value) {
      this.display.value += value; // Here we take the parameters sended to add in display;
    },

    clearDisplay() {
      this.display.value = ``;
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeCount() {
      let count = this.display.value // Here we take the value of the display to make the count;

      try {
        count = eval(count);

        if(!count) {
          alert(`Invalid count!!!`)
          return;
        }

        this.display.value = String(count); // Here we take the value of the display to make the count;

      } catch(e) {
        alert(`Invalid count!!!`)
        return;
      };

    }

  }
}

const calculator = createCalculator();
calculator.start();