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
    <div className="hero h-[80vh] px-[300px] py-[150px]">
        <div className="hero-overlay bg-black bg-opacity-60 p-12"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-6xl font-extrabold">{heading}</h1>
                <p className="mb-5 text-xl">{subHeading}</p>
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