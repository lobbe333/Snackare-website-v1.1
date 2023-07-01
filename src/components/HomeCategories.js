import { React, useState } from 'react'
import { useRouter } from 'next/router' 
import forelasare from '../../pages/forelasare';


export default function HomeCategories() {
    const [category, setCategory] = useState(null);
    const router = useRouter();

    const handleCategory = (category) => {
        setCategory(category);
        router.push(`/forelasare?category=${category}`);
    };

    const handleAllSpeakersClick = () => {
        router.push('/forelasare')
    }

    return (
        <div>
            <div className='home-categories-container'>
                <h1 className='categories-header'>Våra Snackare</h1>
                <div className='categories' data-aos='fade-down'>
                    <div className='category category-forelasare' onClick={() => handleCategory('lecturer')}>
                        <h2 className='category-header'>Föreläsare</h2>
                    </div>
                    <div className='category category-moderator' onClick={() => handleCategory('moderator')}>
                        <h2 className='category-header'>Moderatorer</h2>
                    </div>
                    <div className='category category-underhallare' onClick={() => handleCategory('entertainer')}>
                        <h2 className='category-header'>Underhållare</h2>
                    </div>
                </div>
                <button data-aos='fade-up' onClick={handleAllSpeakersClick}>Se alla Snackare</button>
            </div>
        </div>
    )
}
