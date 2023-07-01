import React from 'react';

const HomeCards = () => {
    const cards = [
        {
            icon: 'send_figure.png',
            header: 'Skicka en kostnadsfri förfrågan utan några förpliktelser',
            text: 'Skicka in en kostnadsfri och icke-bindande förfrågan och oss på Snackare ta fram den perfekta föreläsaren eller lösning för ditt evenemang.',
        },
        {
            icon: 'contact_figure.png',
            header: 'Vi matchar och förhandlar fram den perfekta lösningen för dig',
            text: 'Snackares expertteam tar hand om allt – från att hitta de bästa förslagen till att förhandla med föreläsaren – allt för att säkerställa att du får den bästa lösningen för dina behov',
        },
        {
            icon: 'negotiate_figure.png',
            header: 'Enkel och smidig fakturering efter genomfört uppdrag',
            text: 'Njut av en sömlös och bekymmersfri upplevelse när föreläsaren levererat sitt uppdrag, och låt Snackare ta hand om faktureringen.',
        },
    ];

    return (
        <div>
            <h2 className='home-cards-header'>Så går det till</h2>
            <div className="home-cards-container">
                {cards.map((card, index) => (
                        <div key={index} className="home-card" data-aos='fade-down'>
                            <h4 className='card-header'>{card.header}</h4>
                            <img className='figure' src={card.icon} />
                            <p>{card.text}</p>
                        </div>
                ))}
            </div>
        </div>

    );
};

export default HomeCards;
