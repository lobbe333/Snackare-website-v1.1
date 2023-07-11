import React, { useState, useEffect } from 'react';
import Card from '../src/components/Card';
import { useRouter } from 'next/router';
import { fetchSpeakers } from './_app';
//import { NextSeo } from 'next-seo';



export async function getStaticProps(context) {
    const speakers = await fetchSpeakers();

    return {
        props: {
            speakers,
        },
    };
}



export default function Forelasare({ speakers, speakersHeader, isFlipped }) {
    const router = useRouter();
    const [search, setSearch] = useState("")

    const category = router.query.category;

    const categoryHeader = {
        "lecturer": "Föreläsare",
        "moderator": "Moderatorer",
        "entertainer": "Underhållare"
    }[category];



    function generateSlug(name) {
        return name
            .toLowerCase()
            .replace(/å/g, 'a')
            .replace(/ä/g, 'a')
            .replace(/ö/g, 'o')
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    function translateRoleToSwedish(role) {
        const translations = {
            'entertainer': 'underhållare',
            'lecturer': 'föreläsare',
            'moderator': 'moderator'
        };

        return translations[role] || role;
    }


    const filteredSpeakers = speakers.filter((speaker) => {
        const activeRoles = speaker.roles ?
            Object.entries(speaker.roles).filter(([role, hasRole]) => hasRole).map(([role, hasRole]) => role) : []

        const isMatchCategory = !category || activeRoles.includes(category)

        const searchLowerCase = search.toLowerCase();

        const isMatchSearch = speaker.name.toLowerCase().includes(searchLowerCase) ||
            (speaker.topics && speaker.topics.some(topic => topic.toLowerCase().includes(searchLowerCase))) ||
            (speaker.roles && Object.entries(speaker.roles).some(([role, hasRole]) => hasRole && translateRoleToSwedish(role).toLowerCase().includes(searchLowerCase)))

        return isMatchCategory && isMatchSearch
    })

    const sortedSpeakers = filteredSpeakers.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    function renderSortedCardElements() {
        let currentLetter = '';
        const elements = [];

        sortedSpeakers.forEach((speaker) => {
            const firstLetter = speaker.name[0].toUpperCase();

            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                elements.push(
                    <div className='letter-section' key={`letter-${currentLetter}`}>
                        <h1 className='letter'>{currentLetter}</h1>
                    </div>
                );
            }

            if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                elements.push(
                    <div>
                        <Card speaker={speaker} />
                    </div>
                )
            } else {
                elements.push(
                    <div className='hide-on-mobile' key={speaker.id} onClick={() => router.push(`/forelasare/${generateSlug(speaker.name)}`)}>
                        <Card speaker={speaker} />
                    </div>
                )
            }
        });

        return elements;
    }


    return (
        <div>
           {/*<NextSeo
                title="Våra Föreläsare | Snackare talarnätverk"
                description="Utforska Snackare talarnätverks föreläsare, moderatorer och underhållare, skräddarsydda för alla evenemang och tillfällen."
                openGraph={{
                    url: "https://www.snackare.com/speakers",
                    title: "Våra Föreläsare | Snackare talarnätverk",
                    description: "Utforska Snackare talarnätverk av professionella föreläsare, moderatorer och underhållare, skräddarsydda för alla dina evenemang och tillfällen.",
                    type: 'website',
                    locale: 'sv_SE',
                    images: [
                        {
                            url: 'URL_TILL_EN_REPRESENTATIV_BILD_FÖR_DIN_SIDA',
                            alt: 'Bildbeskrivning',
                        },
                    ],
                }}
            />*/}
            <div className="header-search-container">
                <div className='headers-container'>
                    <h1 className='speakers-header'>{categoryHeader ? categoryHeader : "Alla Snackare"}</h1>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Sök"
                        value={search}
                        onChange={handleSearch}
                    />
                    <h2 className='speakers-search-header'>Sök efter: {search}</h2>
                </div>
            </div>
            <div className="card-section">
                {renderSortedCardElements()}
            </div>
        </div >
    );
}
