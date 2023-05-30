import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postData } from 'utils/api';

const CreateEvent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get('date');
    const time = queryParams.get('time');

    const regex = /^(\d{1,2}):(\d{2})\s([AP])M$/i;
    const match = time.match(regex);
    let timeTo = '';
    const dateParts = date.split('/');
    const month = parseInt(dateParts[0]) - 1;
    const day = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    const newDate = new Date(year, month, day);
    const formattedDate = newDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    if (match) {
        let hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        const amPm = match[3].toUpperCase();

        if (amPm === 'P') {
            hours += 12;
        }
        const originalTime = new Date();
        originalTime.setHours(hours, minutes, 0);
        const newTime = new Date(originalTime.getTime());
        newTime.setMinutes(newTime.getMinutes() + 30);
        timeTo = newTime.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
        });
    }
    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
    };
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!state.first_name || !state.last_name || !state.email) {
            toast.error('Input field cannot be empty', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }
        try {
            await postData('/events/create-event', {
                ...state,
                startTime: time,
                endTime: timeTo,
                date,
            });
            setState(initialState);
            toast.success('Event Created Successfully', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            setTimeout(() => {
                navigate('/', { replace: true });
            }, 2000);
        } catch (error) {
            toast.error('Something went wrong!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };
    const gotoHome = () => {
        navigate('/', { replace: true });
    };
    return (
        <div className="lg:w-8/12 mt-8 mx-auto">
            <ToastContainer />
            <div className="shadow-md rounded-md">
                <div className="wrapper lg:flex">
                    <div className="with font-bold border-r p-8">
                        <span
                            className="back-btn cursor-pointer mb-4 block"
                            onClick={gotoHome}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-arrow-left-circle"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 8 8 12 12 16" />
                                <line x1="16" y1="12" x2="8" y2="12" />
                            </svg>
                        </span>
                        with{' '}
                        <span className="text-violet-800 font-bold text-xl">
                            Anik Hossain
                        </span>
                        <h3 className="text-bold text-xl mt-4">
                            30 Minute Meeting
                        </h3>
                        <div className="time text-gray-600 mt-4">
                            <div className="item flex mb-4">
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
                            <div className="item flex">
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
                                    className="feather feather-calendar"
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                    />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span className="ml-2">
                                    {time} - {timeTo}, {formattedDate}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="create-slot p-8 md:w-6/12">
                        <form onSubmit={handleSubmit}>
                            <div className="inp-group">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
                                    name="first_name"
                                    onChange={handleChange}
                                    value={state.first_name}
                                />
                            </div>
                            <div className="inp-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
                                    name="last_name"
                                    onChange={handleChange}
                                    value={state.last_name}
                                />
                            </div>
                            <div className="inp-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
                                    name="email"
                                    onChange={handleChange}
                                    value={state.email}
                                />
                            </div>
                            <button className="border-2 border-violet-600 px-4 py-2 rounded-full font-bold cursor-pointer text-violet-600 block mt-6 mb-2">
                                Create Event
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
