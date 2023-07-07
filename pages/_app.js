import '../src/App.css';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/config/firebase';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import TidioChat from '../src/components/TidioChat';
import { v4 as uuidv4 } from 'uuid';
import '../src/styles/About.css';
import '../src/styles/Card.css';
import '../src/styles/Footer.css';
import '../src/styles/Home.css';
import '../src/styles/HomeCards.css';
import '../src/styles/HomeSlider.css';
import '../src/styles/Navbar.css';
import '../src/styles/RequestForm.css';
import '../src/styles/SpeakerProfile.css';
import '../src/styles/Speakers.css';
import Head from 'next/head';

export async function fetchSpeakers() {
  const speakersCollectionRef = collection(db, 'speakers');
  const speakerSnapshot = await getDocs(speakersCollectionRef);
  const speakerList = speakerSnapshot.docs.map(doc => doc.data());
  console.log("Fetched speakers:", speakerList);
  return speakerList;
}

function MyApp({ Component, pageProps }) {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
      visitorId = uuidv4();
      localStorage.setItem('visitorId', visitorId);
    }
    setVisitorId(visitorId);
  }, []);

  // Tidio-nyckel och besökardata
  const tidioKey = '3x3nqoesg5re64kbwcp6esvufvwasoqn';

  const visitor = {
    distinct_id: visitorId,
    email: "", // visitor email
    name: visitorId, // Visitor name
    phone: "" //Visitor phone
  };

  return (
    <>
      <Head>
        <title>Snackare talarnätverk</title>
        <meta name="description" content="På Snackare hittar du föreläsare, moderatorer och underhållare till alla tillfällen. Lär känna våra Snackare idag!" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,700;0,900;1,100;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {visitorId && <TidioChat tidioKey={tidioKey} visitor={visitor} />}
      <Footer />
    </>
  );
}

export default MyApp;
