import RecentQueries from "../../Components/RecentQueries/RecentQueries";
import Slider from "../../Components/Slider/Slider";

import TinnyBanner from "../../Components/TinnyBanner/TinnyBanner";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TinnyBanner></TinnyBanner>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;