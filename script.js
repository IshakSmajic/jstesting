/* const increase = document.createElement("button")
const decrease = document.createElement("button")
const reset = document.createElement("button")
let count = 0;
increase.addEventListener("click", ()=>{
    count++;
    display.textContent=count;
});
decrease.addEventListener("click", ()=>{
    count--;
    display.textContent=count;
});
reset.addEventListener("click", ()=>{
    count=0;
    display.textContent=count;
});
increase.classList.add("increaseBtn");
increase.textContent = "INCREASE";
decrease.classList.add("decreaseBtn");
decrease.textContent = "DECREASE";
reset.classList.add("resetBtn");
reset.textContent = "RESET";
const display = document.createElement("div");
document.body.appendChild(increase);
document.body.appendChild(decrease);
document.body.appendChild(reset);
document.body.appendChild(display);
console.log("test"); 


HEALTH SYSTEM
const health = document.createElement("input");
const confirmButton = document.createElement("button");
const message = document.createElement("p");

let valueOfHealth = 0;


health.classList.add("health");
confirmButton.classList.add("confirmButton");
confirmButton.textContent="CHECK";



confirmButton.addEventListener("click", ()=>{
    valueOfHealth = health.value;

    if(valueOfHealth>90){
    message.textContent="Your health is at acceptable levels.";
}
else if (valueOfHealth>40 && valueOfHealth<90){
    message.textContent="Your health is in dangerous levels.";
}
else if (valueOfHealth>0 && valueOfHealth<40){
    message.textContent="Your health is at critical levels!";
}
else{
    message.textContent="Your value is invalid";
}

})
message.textContent="Fail?"
document.body.appendChild(health);
document.body.appendChild(confirmButton);
document.body.appendChild(message);



/*
Banking system sim


let accountBalance = 0;
let balanceDisplay; 

function updateBalance() {
    balanceDisplay.textContent = `Current balance: ${accountBalance}`;
}

function deposit() {
    const container = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "How much would you like to deposit?";

    const input = document.createElement("input");
    input.type = "number";

    const button = document.createElement("button");
    button.textContent = "DEPOSIT";

    button.addEventListener("click", () => {
        const amount = Number(input.value);
        if (!amount) return;

        accountBalance += amount;
        updateBalance(); 
    });

    container.appendChild(p);
    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
}

function withdraw() {
    const container = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "How much would you like to withdraw?";

    const input = document.createElement("input");
    input.type = "number";

    const button = document.createElement("button");
    button.textContent = "WITHDRAW";

    button.addEventListener("click", () => {
        const amount = Number(input.value);
        if (!amount) return;

        accountBalance -= amount;
        updateBalance(); 
    });

    container.appendChild(p);
    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
}

function checkBalance() {
    balanceDisplay = document.createElement("p");
    balanceDisplay.textContent = `Current balance: ${accountBalance}`;
    document.body.appendChild(balanceDisplay);
}

function createAccount() {
    deposit();
    withdraw();
    checkBalance(); 
}

createAccount();
*/


let allItems = [
    { name: "Laptop",
      price: 1000,
      quantity: 3
     },
    { name: "Monitor",
      price: 200,
      quantity: 7
    },
    { name: "PSU",
      price: 45,
      quantity: 5
     },
     { name: "Mouse",
       price: 45,
       quantity: 3
     },
     { name: "Motherboard",
       price: 150,
       quantity: 2
     },
     { name: "GPU",
       price: 800,
       quantity: 6
     },
     { name: "Charger",
       price: 25,
       quantity: 13
     },
     { name: "CPU",
       price: 300,
       quantity: 8
     }];
     const initialValue = 0;
function calculatePrice(){
    console.log("Test succes!")
}

