import React from 'react'
import { useState } from 'react'
import RequestForm from './RequestForm'

export default function HomeStartImage() {
    const [showRequestForm, setShowRequestForm] = useState(false)

    const handleOpenRequestForm = () => {
        setShowRequestForm(true)
    }

    const handleCloseRequestForm = () => {
        setShowRequestForm(false)
    }

    return (
        <div>
            <div className='home-image-container'>
                {/*<video className="home-image" autoPlay loop muted>
                    <source src="home_image.mp4" type="video/mp4" />
                    Din webbläsare stöder inte videokomponenten.
    </video>*/}
                <img src='navbar_omar.jpeg' className='home-image' />          
                <div className='home-image-text'>
                    <h1 className='header-homeStartImage'>Snackare</h1>
                    <h2 className='underHeader-homeStartImage'>Där idéer möts och gränser utmanas</h2>
                    <button onClick={handleOpenRequestForm}>Skicka förfrågan</button>
                    {showRequestForm && <RequestForm handleCloseRequestForm={handleCloseRequestForm} />}
                </div>
            </div>
        </div>
    )
}
