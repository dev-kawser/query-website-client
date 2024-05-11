import { useEffect, useState } from "react";

const Slide = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/8g23ZCg/akhil-yerabati-4-Ym-SIWff6aw-unsplash.jpg", title: "Iphone 12", des: "Unveiling the Marvel: The iPhone 12's Compelling Features" }, { img: "https://i.ibb.co/bJLqzwg/dhruv-vishwakarma-Eda49v-VHnp0-unsplash.jpg", title: "Samsung s22 ultra", des: "Unleashing Power: The Samsung S22 Ultra's Game-Changing Innovations" }, { img: "https://i.ibb.co/80FWbv0/adrien-K12-Srka-Zu-Cg-unsplash.jpg", title: "Google Pixel 5", des: "Unlocking Potential: The Google Pixel 5's Impressive Features" }, { img: "https://i.ibb.co/5jf5TwF/techietech-tech-J3-a1qdhvwg-unsplash.jpg", title: "OnePlus 9 Pro", des: "Elevating Excellence: The OnePlus 9 Pro's Remarkable Advancements" }, { img: "https://i.ibb.co/8g23ZCg/akhil-yerabati-4-Ym-SIWff6aw-unsplash.jpg", title: "Xiaomi Mi 11", des: "Revolutionizing Tech: The Xiaomi Mi 11's Breakthrough Features" },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider, sliders.length]);

    return (
        <div className="container rounded-xl lg:mx-auto px-2 mt-10">
            <div className="w-full rounded-xl h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>
        </div>
    );
};

export default Slide;