import React from 'react';
import AboutEmployeesCard from '../src/components/AboutEmployeesCard';


export default function About() {

    const employees = [{
        name: "Love Anderberg",
        role: "Vice VD",
        email: "love.anderberg@snackare.se",
        phone: "+46760149508"
    },
    {
        name: "William Von Heland",
        role: "VD",
        email: "william@snackare.se",
        phone: "tbd"
    }
    ]

    const cardElements = employees.map(employee => (
        <AboutEmployeesCard
            employee={employee}
        />
    ))


    return (
        <div className="about">
            <h1 className='about-header'>Snackare skrattar och gråter</h1>
            <p className='about-text'>
                Ord är makt och vi tror att ett samhälle i förändring behöver nya röster vid sidan av de mer etablerade. Röster som kan inspirera, hjälpa och sprida kunskap till människor; till företag, skolor, kommuner och organisationer.
                <br />
                <br />
                Snackare vill vara del av en rörelse från gräsrot till högsta politiska nivå och i det arbetet ingår att hitta de där rösterna som inte hörs så ofta, inte ljuder så högt, som alldeles för sällan når ut utanför den närmaste kretsen.
                <br />
                <br />
                De finns och de är viktiga.
                <br />
                <br />
                Vi vill utbilda och ge nya föreläsare en plattform, visa en väg till förändring. Samtidigt har vi stor respekt för erfarenhet och samlar därför även en rad kända föreläsare som vi gärna bokar åt er.
                <br />
                <br />
                Vad ni än söker - vi har föreläsare som passar kick-offer, inspirationsdagar, frukostsamtal, paneldebatter, utbildningar och förändringsarbeten. Surfa runt bland våra talare eller hör av er till oss så hjälper vi er att hitta en person eller flera, beroende på vad ni söker och behöver.
                <br />
                <br />
                Snackare söker ständigt nya föreläsare. Vi är väldigt intresserade av avgörande framtidsfrågor som integration, bostadspolitik, idrott och hälsa och arbetsmarknad, bland mycket annat.
                <br />
                <br />
                Genom att snacka, skratta och gråta vill vi sprida glädje, kunskap och inspiration. Välkommen att bli en del av vår rörelse!
            </p>
            <h2 className='employees-header'>Vi på Snackare</h2>
            <div className='card-section-employee'>
                {cardElements}
            </div>
        </div>
    )
}
