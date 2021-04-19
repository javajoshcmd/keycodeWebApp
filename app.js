
  window.addEventListener("keypress", () => {
    document.getElementById("header").innerHTML = `<p> key: ${event.key}</p>`;
    document.getElementById("eventCode").innerHTML = `<p> Key code: ${event.keyCode}</p>`;
    document.getElementById("eventWhich").innerHTML = `<p> Event code: ${event.code}</p>`;
})


