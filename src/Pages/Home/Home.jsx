import RecentQueries from "../../Components/RecentQueries/RecentQueries";
import Slide from "../../Components/Slider/Slide";

import TinnyBanner from "../../Components/TinnyBanner/TinnyBanner";


const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <TinnyBanner></TinnyBanner>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;