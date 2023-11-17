import axios from "axios";

// import PropTypes from 'prop-types';
const axiosPublic = axios.create({
    baseURL: `http://localhost:5000`
})
const useAxiosPublic = () => {
    return axiosPublic;
};

useAxiosPublic.propTypes = {
    
};

export default useAxiosPublic;