import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({heading, subHeading, image}) => {
return (
<Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
    <div className="hero lg:h-[80vh] mt-[60px] lg:mt-12 lg:mt-0 p-4 md:p-12 lg:px-[300px] lg:py-[150px]">
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 pt-12 md:pt-none text-4xl md:text-6xl font-extrabold">{heading}</h1>
                <p className="mb-5 text-sm md:text-xl">{subHeading}</p>
            </div>
        </div>
    </div>
</Parallax>

);
};

Cover.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    image: PropTypes.node,
};

export default Cover;