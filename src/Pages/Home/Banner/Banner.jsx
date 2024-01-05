import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import img1 from "../../../assets/home/01.jpg"
// import img2 from "../../../assets/home/02.jpg"
// import img3 from "../../../assets/home/03.png"
// import img4 from "../../../assets/home/04.jpg"
// import img5 from "../../../assets/home/05.png"
// import img6 from "../../../assets/home/06.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="max-h-full">

        <Carousel autoPlay="true" infiniteLoop="true" className='top-0' showStatus="false">
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/qCMMpCg/01.jpg" />
        </div>
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/98y7KKV/02.jpg" />
        </div>
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/p0M2wvz/03.png" />
        </div>
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/3WmGkpG/04.jpg" />
        </div>
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/7t1PptH/05.png" />
        </div>
        <div className="max-h-[100vh]">
            <img src="https://i.ibb.co/jbvq92M/06.png" />
        </div>
        
    </Carousel>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;