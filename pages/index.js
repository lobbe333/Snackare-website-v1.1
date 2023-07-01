import React, { useEffect } from 'react';
import HomeCategories from '../src/components/HomeCategories'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeStartImage from '../src/components/HomeStartImage'
import HomeClients from '../src/components/HomeClients'
import HomeCards from '../src/components/HomeCards'
import HomeSlider from '../src/components/HomeSlider'



export default function Home({ handleCategory, speakers }) {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animate only once when the element is in the viewport
        });
    }, []);

    // ...

return (
    <div className='background'>
        <HomeStartImage />
        <HomeCategories/>
        {/*<HomeSlider speakers={speakers}/>*/}
        <HomeCards />
        <HomeClients />
    </div>
)
}
