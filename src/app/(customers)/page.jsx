

import GiftWheel from '@/components/custormer/GiftWheel/GiftWheel';
import FeaturedSection from '@/components/custormer/home/FeaturedSection';
import HeroSection from '@/components/custormer/home/HeroSection';
import NewsLatterSection from '@/components/custormer/home/NewsLatterSection';
import TrendingProductsSection from '@/components/custormer/home/TrendingProductsSection';
import OfferBannerSection from '@/components/custormer/home/OfferBannerSection';
import RecentProductsSection from '@/components/custormer/home/RecentProductsSection';
import Testimonials from '@/components/custormer/home/TestimonialSection';
import TopRatedProductsSection from '@/components/custormer/home/TopRatedProductsSection';
import TrustedSection from '@/components/custormer/home/TrustedSection';
import '@smastrom/react-rating/style.css';
import FbMassage from '@/components/custormer/customChat/CustomChat';
import { useRouter } from 'next/navigation';




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
                <Testimonials/>
                <NewsLatterSection/>
                <GiftWheel/>
                <FbMassage/>
            </>
        );
    
   
};

export default HomePage;