import { useEffect, useState } from 'react'
import './App.css'
import dayjs from 'dayjs'

function App() {
  
	const [twentyfour, setTwentyfour] = useState('24');
	const [showSeconds, setShowSeconds] = useState('nosecs');
	const [showDate, setShowDate] = useState('nodate');
	const [fullDate, setFullDate] = useState();
	const [currentTime, setCurrentTime] = useState();
	const [ampm, setAmpm] = useState();

	// dayjs().format()

	function updateClock() {
		let dateTime = dayjs();
		setFullDate(dateTime.format('ddd DD MMM YYYY'));
		setAmpm(dateTime.format('a'));
		if ( twentyfour === '24' ) {
			setAmpm("");
			if ( showSeconds === 'secs' ) {
				setCurrentTime(dateTime.format('HH:mm:ss'));
			} else {
				setCurrentTime(dateTime.format('HH:mm'));
			}
		} else {
			if ( showSeconds === 'secs' ) {
				setCurrentTime(dateTime.format('hh:mm:ss'));
			} else {
				setCurrentTime(dateTime.format('hh:mm'));
			}
			setAmpm(dateTime.format('a'));
		}

		//console.log(`${hr}:${min}:${sec}${period}`);
	}
	
	
	useEffect(() => {
    const timer = setInterval(() => {
      updateClock();
    }, 500);
               // clearing interval
    return () => clearInterval(timer);
  });

	//{clockHours}:{clockMins}:{clockSecs}
	const renderClock12 = () => (
		<div>
			{currentTime}<span className="ampm">{ampm}</span>
		</div>
	)

	const renderClock24 = () => (
		<div>
			{currentTime}
		</div>
	)

	const handleChange = (e) => {
		setShowSeconds(e.target.value);
		//console.log(timeType);
	}

	const handleChange24 = (e) => {
		setTwentyfour(e.target.value);
		//console.log(twentyfour);
	}

	const handleChangeDate = (e) => {
		setShowDate(e.target.value);
		//console.log(twentyfour);
	}

	// const handleClick = (type) => {
	// 	setTimeType(type); // state
	// 	console.log(type);
	// }

	// {( twentyfour === '12' ) && renderClock12()}
	// {( twentyfour === '24' ) && renderClock24()}
		

  return (
    <div className="App">
			<div className={`clock ${showSeconds} hours${twentyfour}`}>
				{currentTime}<span className="ampm">{ampm}</span>
			</div>
			<div className={`${showDate}`}>
				{fullDate}
			</div>
			<div className="settings">
				<form>
				<ul className="show-date">
						<li>
							<input type="radio" value="date" id="date"
								onChange={handleChangeDate} name="displaydate" />
							<label for="nosecs">date</label>
						</li>
						<li>
							<input type="radio" value="nodate" id="nodate"
								onChange={handleChangeDate} name="displaydate"/>
							<label for="secs">no date</label>
						</li>						
					</ul>
					<ul className="show-seconds">
						<li>
							<input type="radio" value="nosecs" id="nosecs"
								onChange={handleChange} name="displayseconds" />
							<label for="nosecs">no seconds</label>
						</li>
						<li>
							<input type="radio" value="secs" id="secs"
								onChange={handleChange} name="displayseconds"/>
							<label for="secs">seconds</label>
						</li>						
					</ul>
					<ul className="select24">
						<li>
							<input type="radio" value="12" id="12"
								onChange={handleChange24} name="numberhours" />
							<label for="12">12 hours</label>
						</li>
						<li>
							<input type="radio" value="24" id="24"
								onChange={handleChange24} name="numberhours"/>
							<label for="24">24 hours</label>
						</li>
					</ul>
				</form>
			</div>
    </div>
  )
}

export default App



// <div className="navContainer">
// 				<button className="timeBtn" onClick={() => handleClick('ns')}>
// 					nosec
// 				</button>
// 				<button className="timeBtn" onClick={() => handleClick('dy')}>
// 					days
// 				</button>
// 				<button className="timeBtn" onClick={() => handleClick('hr')}>
// 					hours
// 				</button>
// 				<button className="timeBtn" onClick={() => handleClick('ms')}>
// 					ms
// 				</button>
// 			</div>