import { useState, useEffect } from "react";
import { userStore } from "../../../store/userStore";
import { useNavigate } from "react-router-dom";

const Timer = () => {
	const navigate = useNavigate();
	const totalSeconds = 5;
	const [delay, setDelay] = useState(totalSeconds);
	const minutes = Math.floor(delay / 60);
	const seconds = Math.floor(delay % 60);
	const [start, setStart] = useState(userStore((state) => state.timerStart));
	const setContextStart = userStore((state) => state.setTimerStart);
	useEffect(() => {
	if(start){
		const timer = setInterval(() => {
			setDelay(delay - 1);
		}, 1000);

		if (delay === 0) {
			clearInterval(timer);
		}

		if(minutes === 0 && seconds === 0){
			alert("El tiempo terminó");
			setDelay(totalSeconds);
			setStart(false);
			setContextStart(false);
			navigate(0);
		}

		return () => {
			clearInterval(timer);
		};
	}
	}, [start]);

	return (
		<div className="flex justify-center fixed right-3.5 sm:right-5 md:right-6 bottom-28">
			<p onClick={() => {setStart(true), setContextStart(true)}} className="rounded-xl text-lightGold font-bold text-3xl bg-zinc-800 px-8 py-2 text-center cursor-pointer">
				{minutes}:{seconds < 10 ? "0" + seconds : seconds}
			</p>
		</div>
	);
};

export default Timer;