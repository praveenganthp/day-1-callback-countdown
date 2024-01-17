function countdown(number, callback) {
  if (number > 0) {
    document.body.innerHTML = `<h1 class=countdown>${number}</h1>`;
    setTimeout(function () {
      countdown(number - 1, callback);
    }, 1000);
  } else {
    callback();
  }
}

function showMessage() {
  document.body.innerHTML = `<div class=message>Happy Birthday</div>`;
}

// Start the countdown
countdown(10, function () {
  showMessage();
});
