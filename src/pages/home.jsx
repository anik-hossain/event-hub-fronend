import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'styles/calendar.css';

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const isActiveDate = (date) => {
        const currentDate = new Date();
        return (
            date >= currentDate ||
            date.toDateString() === currentDate.toDateString()
        );
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);
    return (
        <div className="app">
            <div className="container">
                <div className="shadow-md rounded-md p-4 my-4 mx-auto max-w-2xl">
                    <div className="wrapper flex gap-4 justify-between">
                        <div className="with font-bold">
                            with{' '}
                            <span className="text-violet-800 font-bold">
                                Anik Hossain
                            </span>
                        </div>
                        <div className="calendar">
                            <h3 className="text-xl font-bold">
                                Select a Date & Time
                            </h3>
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                tileDisabled={({ activeStartDate, date }) =>
                                    !isActiveDate(date)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
