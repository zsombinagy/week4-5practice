console.log("hello world");

function domManipulation() {
  const rootElement = document.querySelector(`#root`);
  console.log(rootElement);
  rootElement.innerHTML = "this is done by dom manipulation";
}



function logClick() {
    console.log("clicked")


}


function logTick() {
    
    

}

window.addEventListener("load", domManipulation);
window.addEventListener("click", logTick)

window.setInterval(logTick, 1000)