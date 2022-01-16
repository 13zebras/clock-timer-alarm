import { useState } from 'react'
import './App.css'

const startDate = new Date(2022, 0, 9, 19, 0, 0).getTime();
//const startDate = theStartDate.getTime();
console.log(startDate);
// 2022-01-09 19:00:00


function AAApp() {
  
	const [theTime, setTheTime] = useState('');
	const [timeType, setTimeType] = useState('');
  
	let tTime;
	function updateTime() {
		
		
		let currentDate = Date.now();
		let elapsedTime = currentDate - startDate;
		console.log('elapsedTime=' + elapsedTime);
		let totDays = Math.floor(elapsedTime / (24 * 3600 * 1000));
		let decDays = Math.round(elapsedTime * 100 / (24 * 3600)) / 100000;
		let mHours = elapsedTime - (totDays * 24 * 3600 * 1000)
		let totHours = Math.floor(mHours / (3600 * 1000));
		let mMins = mHours - (totHours * 3600 * 1000);
		console.log('mMins=' + mMins);
		let totMins = Math.floor(mMins / (60 * 1000));
		let mSecs = mMins - (totMins * 60 * 1000);
		let totSecs = Math.floor(mSecs / 1000);
		// let totMilliSecs = mSecs - (totSecs * 1000);
		
		let totHoursNoDays = Math.floor(elapsedTime / (3600 * 1000));
		let decHours = Math.round(elapsedTime * 100000 / (3600 * 1000)) / 100000;
		// totHours = ("0" + totHours).slice(-2);
		// totMins = ("0" + totMins).slice(-2);
		// totSecs = ("0" + totSecs).slice(-2);
		// console.log('totSecs=' + totSecs);
		
		if (timeType === 'dy') {
			tTime = decDays + ' days';
		} 
		if (timeType === 'hr') {
			tTime = totHoursNoDays + 'h ' + totMins + 'm ' + totSecs + 's';
		}
		if (timeType === 'hro') {
			tTime = decHours + ' hours';
		} 
		if (timeType === 'mn') {
			tTime = totDays + 'd ' + totHours + 'h ' + totMins + 'm';
		} 
		if (timeType === 'sc') {
			tTime = totDays + 'd ' + totHours + 'h ' + totMins + 'm ' + totSecs + 's';
		} 
		/*
		if (timeType === 'ms') {
			tTime = totDays + 'd ' + totHours + 'h ' + totMins + 'm ' + totSecs + '.' + totMilliSecs + 's';
		} 
		*/
		console.log('tTime=' + tTime);
		setTheTime(tTime);
	}
	
	setTimeout(updateTime, 500);


	const handleClick = (type) => {
		setTimeType(type); // state
		console.log(type);
	}
		

  return (
    <div className="App">
			<div className="header">
				<button className="timeBtn" onClick={() => handleClick('dy')}>days</button>
				<button className="timeBtn" onClick={() => handleClick('hr')}>hours</button>
				<button className="timeBtn" onClick={() => handleClick('hr')}>hr only</button>
				<button className="timeBtn" onClick={() => handleClick('mn')}>mins</button>
				<button className="timeBtn" onClick={() => handleClick('sc')}>secs</button>
			</div>
			<div className="time">
				{theTime}
			</div>
    </div>
  )
}

export default App
