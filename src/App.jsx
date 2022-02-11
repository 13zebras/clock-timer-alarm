import { useEffect, useState } from 'react'
import './App.css'

const startDate = new Date(2022, 1, 8, 19, 00, 0).getTime();
//const startDate = theStartDate.getTime();
console.log(startDate);
// 2022-02-08 19:00:00 -- current start date
// 2022-02-05 08:30:00 -- previous start date


function App() {
  
	const [clockHours, setClockHours] = useState();
	const [clockMins, setClockMins] = useState();
	const [clockSecs, setClockSecs] = useState();
	const [clockPeriod, setClockPeriod] = useState();
	const [timeType, setTimeType] = useState('dy');
	const [totalDaysS, setTotalDaysS] = useState();
	const [totalHoursND, setTotalHoursND] = useState();
	const [totalHoursS, setTotalHoursS] = useState();
	const [totalMinutes, setTotalMinutes] = useState();
	const [totalSeconds, setTotalSeconds] = useState();
	const [totalMilliseconds, setTotalMilliseconds] = useState();
	
  // const [count, setCount] = useState(0);
	
	function updateTime() {
		
		// console.log('Count=' + count);
		let currentDate = Date.now();
		
		// console.log('Time Now=' + currentDate);
		let elapsedTime = currentDate - startDate;
		// console.log('elapsedTime=' + elapsedTime);
		let totDays = Math.floor(elapsedTime / (24 * 3600 * 1000));
		
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
		
	}

	function updateClock() {
		let date = new Date();
		let hr = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
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
		sec = ("0" + sec).slice(-2);
		
		setClockHours(hr);
		setClockMins(min);
		setClockSecs(sec);
		setClockPeriod(period);
		console.log(`${hr}:${min}:${sec}${period}`);
	}
	
	
	useEffect(() => {
    const timer = setInterval(() => {
      updateClock();
			updateTime();
    }, 500);
               // clearing interval
    return () => clearInterval(timer);
  });

	//{clockHours}:{clockMins}:{clockSecs}
	const renderClock = () => (
		<div>
			{clockHours}<span>:</span>{clockMins}<span>:</span>{clockSecs}<span className="clockPeriod">{clockPeriod}</span>
			
		</div>
	)

	const renderClockNS = () => (
		<div>
			{clockHours}<span>:</span>{clockMins}<span className="clockPeriod">{clockPeriod}</span>
		</div>
	)

	const renderNShtml = () => (
    <div>
			{totalDaysS}<span>d</span> {totalHoursS}<span>h</span> {totalMinutes}<span>m</span>
		</div>
  );

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
			<div className={`clock ${timeType}`}>
				{(timeType === 'ns') && renderClockNS()}
				{(timeType !== 'ns') && renderClock()}
			</div>
			<div className={`time ${timeType}`}>
				{(timeType === 'ns') && renderNShtml()}
				{(timeType === 'hr') && renderHRhtml()}
				{(timeType === 'dy') && renderDYhtml()}
				{(timeType === 'ms') && renderMShtml()}
				
			</div>
			<div className="navContainer">
				<button className="timeBtn" onClick={() => handleClick('ns')}>
					nosec
				</button>
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
