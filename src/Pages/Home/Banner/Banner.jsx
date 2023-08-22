import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/img7.png'
import img2 from '../../../assets/img5.png'
import img3 from '../../../assets/img6.png'
import img4 from '../../../assets/img2.png'


const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={3000}>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2}/>
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        
    </Carousel>
    );
};

export default Banner;