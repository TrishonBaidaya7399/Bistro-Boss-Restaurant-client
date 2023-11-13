import PropTypes from 'prop-types';

const Title = ({heading, subHeading}) => {
    return (
        <div className='text-center w-5/12 mx-auto my-8'>
            <p className='text-[#D99904] font-semibold pb-4'>---{subHeading}---</p>
            <p className='text-3xl font-semibold uppercase border-t-2 border-b-2 border-gray-200 py-5'>{heading}</p>
        </div>
    );
};

Title.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string,
};

export default Title;