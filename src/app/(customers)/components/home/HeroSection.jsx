import Image from 'next/image';
import bannerBg from '../../../../../public/assets/img/heroBg.jpg'

const HeroSection = () => {
    return (
        <div className="text-white bg-slate-800 bg-blend-overlay bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg.src})` }}>

            <div className='my-container h-screen flex items-center'>
                <div className='space-y-5 lg:pr-60'>
                    <h2 className='my-title'>Level up your style with our new collection!</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident repudiandae mollitia laudantium praesentium minus hic nemo explicabo voluptate, id architecto nam aspernatur voluptates ex quisquam?</p>

                 <button className='my-btn-one'>View details</button>

                </div>
            </div>

        </div>
    );
};

export default HeroSection;