import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimeSlot from 'components/TimeSlot';
import { fetchData } from 'utils/api';
import 'react-calendar/dist/Calendar.css';
import 'styles/calendar.css';

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [slotVisibility, setSlotVisibility] = useState(false);
    const [data, setData] = useState([]);

    const isActiveDate = (date) => {
        const currentDate = new Date();
        return (
            date >= currentDate ||
            date.toDateString() === currentDate.toDateString()
        );
    };

    const handleDateChange = async (date) => {
        const newDate = new Date(date);
        const formattedDate = newDate
            .toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
            .replace(/\//g, '-');

        setSelectedDate(date);
        setSlotVisibility(true);
        try {
            const res = await fetchData(`/events/${formattedDate}`);
            setData(res.data.slots);
        } catch (error) {
            console.log(error);
        }
    };
    const closeTimeSlot = () => {
        setSlotVisibility(false);
    };
    return (
        <div className="app">
            <div className="container relative">
                <div className="lg:flex">
                    <div className="w-full md:w-8/12 lg:w-9/12">
                        <div className="shadow-md rounded-md p-4 my-4 mx-auto max-w-2xl">
                            <div className="wrapper lg:flex lg:gap-4 justify-between">
                                <div className="with my-4 lg:my-0 font-bold text-center lg:text-left">
                                    with{' '}
                                    <span className="text-violet-600 font-bold text-xl">
                                        Anik Hossain
                                    </span>
                                    <div className="item flex my-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-clock"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        <span className="ml-2">30 min</span>
                                    </div>
                                </div>
                                <div className="calendar">
                                    <h3 className="text-xl font-bold text-center lg:text-left">
                                        Select a Date & Time
                                    </h3>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        tileDisabled={({
                                            activeStartDate,
                                            date,
                                        }) => !isActiveDate(date)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <TimeSlot
                            visibility={slotVisibility}
                            date={selectedDate}
                            data={data}
                            closeTimeSlot={closeTimeSlot}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
