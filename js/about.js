function fourSecondsReplace() {
  document.body.innerHTML = document.body.innerHTML
    .replace(/The/g, "Replaced")
    .replace(/the/g, "replaced");
}

setTimeout(fourSecondsReplace, 4000);
