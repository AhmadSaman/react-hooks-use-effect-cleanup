import React, { useState, useEffect } from "react";

function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const id = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return function () {
			clearInterval(id);
		};
	}, []);

	return <div>{time.toString()}</div>;
}

export default Clock;
