let clockEl = document.querySelector(".clock24");
function getClockTime() {
   let date = new Date();

   let hr = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();

   hr = ("0" + hr).slice(-2);
   min = ("0" + min).slice(-2);
   sec = ("0" + sec).slice(-2);

   clockEl.innerHTML = `${hr}:${min}:${sec}`;
}

setInterval(getClockTime, 1000);