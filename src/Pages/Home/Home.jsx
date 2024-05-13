import { Helmet } from "react-helmet";
import BestRecommend from "../../Components/BestRecommend/BestRecommend";
import RecentQueries from "../../Components/RecentQueries/RecentQueries";
import Slider from "../../Components/Slider/Slider";

import TinnyBanner from "../../Components/TinnyBanner/TinnyBanner";
import TipsSection from "../../Components/TipsSection/TipsSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smart Tech Spot | Home</title>
            </Helmet>

            <Slider></Slider>
            <TinnyBanner></TinnyBanner>
            <RecentQueries></RecentQueries>
            <BestRecommend></BestRecommend>
            <TipsSection></TipsSection>
        </div>
    );
};

export default Home;