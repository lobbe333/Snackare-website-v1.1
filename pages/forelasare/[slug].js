import { useState } from 'react'
import RequestForm from '../../src/components/RequestForm';
import { fetchSpeakers } from "../_app";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the styles

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

export async function getStaticPaths() {
  const speakers = await fetchSpeakers();
  const paths = speakers.map((currentSpeaker) => {
    if (!currentSpeaker.name) {
      console.error('Undefined speaker name for', currentSpeaker);
      return;
    }
    return {
      params: { slug: generateSlug(currentSpeaker.name) },
    };
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const speakers = await fetchSpeakers();
  const currentSpeaker = speakers.find(speaker => generateSlug(speaker.name) === params.slug);

  if (!currentSpeaker) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      currentSpeaker,
    },
  };
}

export default function SpeakerProfilePage({ currentSpeaker }) {

  const [showRequestForm, setShowRequestForm] = useState(false)
  const [nameForForm, setNameForForm] = useState("")

  if (!currentSpeaker) {
    return <div>Talaren hittades inte.</div>;
  }




  const handleOpenRequestForm = () => {
    setShowRequestForm(true)
    setNameForForm(currentSpeaker.name)
  }

  const handleCloseRequestForm = () => {
    setShowRequestForm(false)
    setNameForForm(null)
  }

  const reviewElements = currentSpeaker.reviews ? currentSpeaker.reviews.map((review, index) => (
    <div key={index} className="speakerProfile-review">
      <p className="speakerProfile-review-text">{review}</p>
    </div>
  )) : [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const exampleLecturesElements = currentSpeaker.exampleLectures.map(exampleLecture => (
    <li><a>{exampleLecture}</a></li>
  ))

  return (
    <div className='speakerProfile'>
      <div className='speakerProfile-name-bookButton-container'>
        <h1 className='speakerProfile-header-name'>{currentSpeaker.name}</h1>
        <button className='book-speaker-button' onClick={handleOpenRequestForm}>{`Boka ${currentSpeaker.name}`}</button>
      </div>
      <div className='speakerProfile-content'>
        <div className='speakerProfile-image-name'>
          <div className='speakerProfile-image-container'>
            <img src={currentSpeaker.imgUrl} alt={currentSpeaker.name} className='speakerProfile-image' />
          </div>
          <div className='speakerProfile-reviews-container hide-on-mobile'>
            <h1 className='speakerProfile-reviews-header'>Vad andra säger</h1>
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={5000}
            >
              {reviewElements}
            </Carousel>
          </div>
        </div>
        <div className='speakerProfile-header-text'>
          <h1 className='speakerProfile-header-longDescription'>{currentSpeaker.header}</h1>
          <p className='speakerProfile-longDescription' dangerouslySetInnerHTML={{ __html: currentSpeaker.longDescription }}></p>
          <h1 className='speakerProfile-exampleLectures-header'>Exempelföreläsningar</h1>
          {exampleLecturesElements}
        </div>
        <div className='speakerProfile-reviews-container hide-on-desktop'>
          <h1 className='speakerProfile-reviews-header'>Vad andra säger</h1>
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={5000}
          >
            {reviewElements}
          </Carousel>
        </div>
      </div>
      {showRequestForm && <RequestForm
        handleCloseRequestForm={handleCloseRequestForm}
        nameForForm={nameForForm}
      />}
    </div>
  )
}
