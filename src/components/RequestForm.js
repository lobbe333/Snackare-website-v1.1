import React from 'react';
import emailjs from 'emailjs-com'

export default function RequestForm({ handleCloseRequestForm, nameForForm }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Hantera inskickat formulär här

        emailjs.sendForm('service_fn6y31n', 'template_63ftbcq', event.target, '7p9crcyVNnhJM0VWX')
        .then((result) => {
            console.log(result.text);
            alert('Förfrågan skickad!');
            handleCloseRequestForm();
        }, (error) => {
            console.log(error.text);
            alert('Något gick fel, försök igen senare.');
        });

        handleCloseRequestForm()
    };


    return (
        <div className="request-form-container">

            <form className="request-form" onSubmit={handleSubmit}>
                <h2 className='requestForm-header'>Skicka förfrågan</h2>
                <span className="close-icon" onClick={handleCloseRequestForm}>
                    &times;
                </span>

                <label htmlFor="name">Föreläsare</label>
                <input type="text" id="name" name="name" value={nameForForm ? nameForForm : null} />

                <label htmlFor="email">E-postadress*</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="organization">Företag/Organisation</label>
                <input type="text" id="organization" name="organization" />

                <label htmlFor="eventDate">När?</label>
                <input type="tect" id="eventDate" name="eventDate" />

                <label htmlFor="message">Meddelande</label>
                <textarea id="message" name="message" rows="5"></textarea>

                <input type="submit" value="Skicka förfrågan" />
            </form>
        </div>
    );
}

