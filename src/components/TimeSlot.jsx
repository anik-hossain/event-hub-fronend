import { useState } from 'react';
import { Link } from 'react-router-dom/dist';

const TimeSlot = ({
    visibility,
    date,
    data = [],
    closeTimeSlot,
    currentTime,
}) => {
    console.log(currentTime);
    const options = { weekday: 'long', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const mappedData = data.map((item, index) => {
        console.log({
            activeDay: new Date(date).getTime(),
            currentTime: new Date(currentTime).getTime(),
            compare: new Date(
                `${new Date(currentTime).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })} ${item.time}`,
            ).getTime(),
        });
        return {
            ...item,
            isVisible: false,
            key: `slot-${index}`,
            activeDay: new Date(date).getTime(),
            currentTime: new Date(currentTime).getTime(),
            compare: new Date(
                `${new Date(currentTime).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })} ${item.time}`,
            ).getTime(),
        };
    });
    const dateObj = new Date(date);
    const formattedDate2 = dateObj.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });

    const [ID, setID] = useState('');

    const handleTimeSlot = (id) => {
        setID(id);
    };
    return (
        <div
            className={`${
                visibility
                    ? 'block visible opacity-100 w-10/12 md:w-5/12 lg:w-full'
                    : 'hidden invisible opacity-0 w-0'
            } border-violet-600 border rounded mt-4 p-4 transition-all duration-300 right-0 absolute lg:static z-50 top-0 bg-white`}
        >
            <div className="date font-bold text-violet-800 flex justify-between items-center">
                <div>{formattedDate}</div>

                <span
                    className="font-bold text-2xl cursor-pointer"
                    onClick={closeTimeSlot}
                >
                    &times;
                </span>
            </div>
            <div className="time-slots mt-4 h-80 overflow-y-scroll">
                {mappedData.map((time) => (
                    <div className="wrapper flex items-center" key={time.key}>
                        {(time.compare > time.currentTime ||
                            time.compare < time.activeDay) && (
                            <button
                                className="border border-violet-600 px-4 py-2 rounded-full font-bold cursor-pointer text-violet-600 block my-2"
                                onClick={() => handleTimeSlot(time.key)}
                            >
                                {time.time}
                            </button>
                        )}

                        <Link
                            to={`/create?date=${formattedDate2}&time=${time.time}`}
                            className={`${
                                time.key === ID ? 'flex' : 'hidden'
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
