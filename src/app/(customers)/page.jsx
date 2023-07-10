
import HeroSection from './components/home/HeroSection';
import FeaturedSection from './components/home/FeaturedSection';
import TrendingProductsSection from './components/home/TrendingProductsSection';
import TopRatedProductsSection from './components/home/TopRatedProductsSection';
import RecentProductsSection from './components/home/RecentProductsSection';
import OfferBannerSection from './components/home/OfferBannerSection';
import TrustedSection from './components/home/TrustedSection';
import TestimonialSectio from './components/home/TestimonialSection';
import NewsLatterSection from './components/home/NewsLatterSection';
import '@smastrom/react-rating/style.css';
import GiftWheel from './components/GiftWheel/GiftWheel';

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <FeaturedSection/>
            <TrendingProductsSection/>
            <TopRatedProductsSection/>
            <RecentProductsSection/>
            <OfferBannerSection/>
            <TrustedSection/>
            <TestimonialSectio/>
            <NewsLatterSection/>
            <GiftWheel></GiftWheel>
        </>
    );
};

export default HomePage;