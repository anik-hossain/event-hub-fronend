import axios from 'axios';

export const fetchData = async (url) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1${url}`);
    return res;
};

export const postData = async (url, data) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1${url}`,
        data,
    );
    return res;
};
