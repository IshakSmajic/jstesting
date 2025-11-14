const increase = document.createElement("button")
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