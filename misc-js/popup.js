let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=800,height=200,left=00,top=0`;

popupButton = document.getElementById('popupBtn');
popupButton.onclick = () => {
  window.open('https://clock-timer-alarm.vercel.app/', 'NoFap Count', params);
};

