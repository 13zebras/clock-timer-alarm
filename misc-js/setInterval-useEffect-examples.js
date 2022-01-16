useEffect(() => {
	const timer = setInterval(() => {
		setSeconds(seconds + 1);
	}, 1000);
						 // clearing interval
	return () => clearInterval(timer);
});
