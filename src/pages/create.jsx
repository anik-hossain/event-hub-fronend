import React from 'react';

const Test = () => {
    return (
        <div className="w-8/12 mt-8 mx-auto">
            <div className="shadow-md rounded-md">
                <div className="wrapper flex">
                    <div className="with font-bold border-r p-8">
                        with{' '}
                        <span className="text-violet-800 font-bold">
                            Anik Hossain
                        </span>
                        <h3 className="text-bold text-xl">30 Minute Meeting</h3>
                        <div className="time text-gray-600 mt-4">
                            <div className="item flex mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-clock"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>{' '}
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
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-calendar"
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
                                    9:00am - 9:30am, Tuesday, May 30, 2023
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="create-slot p-8 w-6/12">
                        <form>
                            <div className="inp-group">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
                                />
                            </div>
                            <div className="inp-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
                                />
                            </div>
                            <div className="inp-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="block border-2 border-violet-600 rounded-md my-2 px-2 py-2 focus:outline-none w-full"
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

export default Test;
