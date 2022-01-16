let clockElement = document.querySelector(".clock12");

function getClock() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let period = "AM";

  if (hr === 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    period = "PM";
  }

  if (hr === 12) {
    period = "PM";
  }

  hr = ("0" + hr).slice(-2);
  min = ("0" + min).slice(-2);
  

  clockElement.innerHTML = `${hr}:${min} ${period}`;
}

setInterval(getClock, 1000);

// window.addEventListener('resize', getClock);