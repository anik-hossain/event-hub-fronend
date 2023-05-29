import React, { useState } from 'react';
import { Link } from 'react-router-dom/dist';

const TimeSlot = ({ visibility, date }) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    console.log(date.toLocaleDateString());
    const [times, setTimes] = useState([
        { time: '10:00 am', key: 1, isVisible: false },
        { time: '10:30 am', key: 2, isVisible: false },
        { time: '11:00 am', key: 3, isVisible: false },
        { time: '11:30 am', key: 4, isVisible: false },
    ]);

    const handleTimeSlot = (time, id) => {
        setTimes((prevButtons) =>
            prevButtons.map((button) =>
                button.key === id
                    ? { ...button, isVisible: !button.isVisible }
                    : { ...button, isVisible: false },
            ),
        );
    };
    return (
        <div
            className={`${
                visibility
                    ? 'block visible opacity-100 w-full'
                    : 'hidden invisible opacity-0 w-0'
            } border-violet-600 border rounded mt-4 p-4 transition-all duration-300`}
        >
            <div className="date font-bold text-violet-800">
                {formattedDate}
            </div>
            <div className="time-slots mt-4 h-80 overflow-y-scroll">
                {times.map((time) => (
                    <div className="wrapper flex items-center" key={time.key}>
                        <button
                            className="border border-violet-600 px-4 py-2 rounded-full font-bold cursor-pointer text-violet-600 block my-2"
                            onClick={() => handleTimeSlot(time.time, time.key)}
                        >
                            {time.time}
                        </button>
                        <Link
                            to={`/create?date=${date.toLocaleDateString()}&time=${
                                time.time
                            }`}
                            className={`${
                                time.isVisible ? 'flex' : 'hidden'
                            } ml-4 bg-violet-600 text-white justify-center items-center font-semibold rounded h-8 px-2`}
                        >
                            Next
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSlot;
