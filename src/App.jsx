import { useEffect, useState } from 'react'
import './App.css'

const startDate = new Date(2022, 0, 9, 19, 0, 0).getTime();
//const startDate = theStartDate.getTime();
console.log(startDate);
// 2022-01-09 19:00:00


function App() {
  
	const [theTime, setTheTime] = useState();
	const [timeType, setTimeType] = useState();
  // const [count, setCount] = useState(0);
	
	function updateTime() {
		// setCount(count + 1);
		// console.log('Count=' + count);
		let currentDate = Date.now();
		
		// console.log('Time Now=' + currentDate);
		let elapsedTime = currentDate - startDate;
		// console.log('elapsedTime=' + elapsedTime);
		let totDays = Math.floor(elapsedTime / (24 * 3600 * 1000));
		// let decDays = Math.round(elapsedTime * 100 / (24 * 3600)) / 100000;
		let mHours = elapsedTime - (totDays * 24 * 3600 * 1000)
		let totHours = Math.floor(mHours / (3600 * 1000));
		let mMins = mHours - (totHours * 3600 * 1000);
		// console.log('mMins=' + mMins);
		let totMins = Math.floor(mMins / (60 * 1000));
		let mSecs = mMins - (totMins * 60 * 1000);
		// console.log('mSecs=' + mSecs);
		let totSecs = Math.floor(mSecs / 1000);
		
		// let tenthsSecond = Math.floor(totMilliSecs / 100);
		// console.log(totSecs + '.' + totMilliSecs)
		
		// let decHours = Math.round(elapsedTime * 10 / 3600) / 10000;
		totHours = ("0" + totHours).slice(-2);
		totMins = ("0" + totMins).slice(-2);
		totSecs = ("0" + totSecs).slice(-2);
		
		// console.log(totMilliSecs);
		// console.log('totSecs=' + totSecs);
		
		let tTime;
		// console.log(timeType);

		if (timeType === 'hr') {
			let totHoursNoDays = Math.floor(elapsedTime / (3600 * 1000));
			tTime = totHoursNoDays + 'h ' + totMins + 'm ' + totSecs + 's';
		} else  if (timeType === 'ms') {
			let totMilliSecs = mSecs - (totSecs * 1000);
			totMilliSecs = (totMilliSecs + "00").slice(0, 3);
			tTime = totDays + 'd ' + totHours + 'h ' + totMins + 'm ' + totSecs + '.' + totMilliSecs + 's';
		} else  {
			tTime = totDays + 'd ' + totHours + 'h ' + totMins + 'm ' + totSecs + 's';
		} 
		
		// console.log('tTime=' + tTime);
		setTheTime(tTime);
	}
	
	useEffect(() => {
    const timer = setInterval(() => {
      updateTime();
    }, 994);
               // clearing interval
    return () => clearInterval(timer);
  });


	const handleClick = (type) => {
		setTimeType(type); // state
		console.log(type);
	}
		

  return (
    <div className="App">
			<div className="header">
			<button className="timeBtn" onClick={() => handleClick('dy')}>
					days
				</button>
				<button className="timeBtn" onClick={() => handleClick('hr')}>
					hours
				</button>
				<button className="timeBtn" onClick={() => handleClick('ms')}>
					ms
				</button>
				
			</div>
			<div className="time">
				{theTime}
			</div>
    </div>
  )
}

export default App
