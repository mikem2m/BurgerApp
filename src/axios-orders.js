import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-e179f.firebaseio.com/',
});

export default instance;