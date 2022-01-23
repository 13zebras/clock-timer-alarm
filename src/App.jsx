import { useEffect, useState } from 'react'
import './App.css'

const startDate = new Date(2022, 0, 9, 19, 0, 0).getTime();
//const startDate = theStartDate.getTime();
console.log(startDate);
// 2022-01-09 19:00:00


function App() {
  
	const [theTime, setTheTime] = useState();
	const [timeType, setTimeType] = useState('dy');
	const [totalDaysS, setTotalDaysS] = useState();
	const [totalHoursND, setTotalHoursND] = useState();
	const [totalHoursS, setTotalHoursS] = useState();
	const [totalMinutes, setTotalMinutes] = useState();
	const [totalSeconds, setTotalSeconds] = useState();
	const [totalMilliseconds, setTotalMilliseconds] = useState();
	
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
		let totHoursNoDays = Math.floor(elapsedTime / (3600 * 1000));
		let mHours = elapsedTime - (totDays * 24 * 3600 * 1000)
		let totHours = Math.floor(mHours / (3600 * 1000));
		let mMins = mHours - (totHours * 3600 * 1000);
		// console.log('mMins=' + mMins);
		let totMins = Math.floor(mMins / (60 * 1000));
		let mSecs = mMins - (totMins * 60 * 1000);
		// console.log('mSecs=' + mSecs);
		let totSecs = Math.floor(mSecs / 1000);
		let totMilliSecs = mSecs - (totSecs * 1000);
		
		// let tenthsSecond = Math.floor(totMilliSecs / 100);
		// console.log(totSecs + '.' + totMilliSecs)
		
		// let decHours = Math.round(elapsedTime * 10 / 3600) / 10000;
		totHours = ("0" + totHours).slice(-2);
		totMins = ("0" + totMins).slice(-2);
		totSecs = ("0" + totSecs).slice(-2);
		totMilliSecs = (totMilliSecs + "00").slice(0, 3);
		setTotalDaysS(totDays);
		setTotalHoursS(totHours);
		setTotalHoursND(totHoursNoDays);
		setTotalMinutes(totMins);
		setTotalSeconds(totSecs);
		setTotalMilliseconds(totMilliSecs);
		
		// console.log(totMilliSecs);
		// console.log('totSecs=' + totSecs);
		
		// let tTime;
		// console.log(timeType);

		if (timeType === 'hr') {
			let totHoursNoDays = Math.floor(elapsedTime / (3600 * 1000));
			//tTime = totHoursNoDays + 'h ' + totMins + 'm ' + totSecs + 's';
			// setTotHoursND(totHoursNoDays);
			// setTotMinutes(totMins);
			// setTotSeconds(totSecs);
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
    }, 500);
               // clearing interval
    return () => clearInterval(timer);
  });

	const renderHRhtml = () => (
    <div>
			{totalHoursND}<span>h</span> {totalMinutes}<span>m</span> {totalSeconds}<span>s</span>
		</div>
  );

	const renderDYhtml = () => (
    <div>
			{totalDaysS}<span>d</span> {totalHoursS}<span>h</span> {totalMinutes}<span>m</span> {totalSeconds}<span>s</span>
		</div>
  );

	const renderMShtml = () => (
    <div>
			{totalDaysS}<span>d</span> {totalHoursS}<span>h</span> {totalMinutes}<span>m</span> {totalSeconds}<span>s</span> {totalMilliseconds}<span>ms</span>
		</div>
  );


	const handleClick = (type) => {
		setTimeType(type); // state
		console.log(type);
	}
		

  return (
    <div className="App">
			
			<div className={`time ${timeType}`}>
				
				{(timeType === 'hr') && renderHRhtml()}
				{(timeType === 'dy') && renderDYhtml()}
				{(timeType === 'ms') && renderMShtml()}
				
			</div>
			<div className="navContainer">
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
    </div>
  )
}

export default App
