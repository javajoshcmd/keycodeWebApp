
  window.addEventListener("keydown", () => {
    document.getElementById("header").innerHTML = `<p> key pressed: ${event.key}</p>`;
    document.getElementById("eventCode").innerHTML = `<p> Key code: ${event.keyCode}</p>`;
    document.getElementById("eventWhich").innerHTML = `<p> Event code: ${event.code}</p>`;
})


