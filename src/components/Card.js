import { React, useState} from 'react'
import { NavigateBefore } from '@mui/icons-material';
import { useRouter } from 'next/router';

function translateRole(role) {
  switch (role) {
    case 'entertainer':
      return 'Underhållare';
    case 'moderator':
      return 'Moderator';
    case 'lecturer':
      return 'Föreläsare';
    default:
      return role;
  }
}

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

export default function Card({ speaker }) {
  const router = useRouter(); 
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickCount, setClickCount] = useState(0)

  const handleCardClick = () => {
    if (window.innerWidth <= 768) {
      if (isFlipped) {
        setIsFlipped(false)
      } else {
        setIsFlipped(true);
      }
    }
  };

  const navigateToSpeaker = () => {
    router.push(`/forelasare/${generateSlug(speaker.name)}`);
    setIsFlipped(false)
  }

  const rolesElements = Object.entries(speaker.roles).filter(([role, isChecked]) => isChecked).map(([role]) => (
    <div className='role' key={role}>{translateRole(role)}</div>
  ))

  const topicElements = speaker.topics.map((topic, index) => (
    <div className='topic' key={index}>{topic}</div>
  ))

  return (
    <div>
      <div className={`card ${isFlipped ? 'card-flipped' : ''}`} onClick={handleCardClick}>
        <div className='card-front'>
          <div className='card-information'>
            <img src={speaker.imgUrl} className='card-image' alt={speaker.name} />
            <div className='name-and-roles-container'>
              <h2 className='name'>{speaker.name}</h2>
              <div className='roles-container'>{rolesElements}</div>
            </div>
          </div>
        </div>
        <div className='card-back' style={{ backgroundImage: `url(${speaker.imgUrl})` }}>
          <div className='card-information-back'>
            <h2 className='name name-mobile'>{speaker.name}</h2>
            <p>{speaker.shortDescription}</p>
            <div className='topics-container'>
              {topicElements}
            </div>
            <button onClick={navigateToSpeaker} className='read-more-button'>Läs mer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
