import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function AboutEmployeesCard({ employee }) {

    return (
        <div>
            <div className='card-employee'>
                <div className='card-front-employee'>
                    <div className='card-information'>
                        <img src='love.png' className='card-image' alt={employee.name} />
                        <div className='name-and-roles-container'>
                            <h2 className='name'>{employee.name}</h2>
                            <div className='roles-container'>{employee.role}</div>
                            <div className='employee-desktop-contact-container'>
                                <p>{employee.email}</p>
                                <p>{employee.phone}</p>
                            </div>
                            <div className='employee-phone-contact-container'>
                                <a href={`mailto:${employee.email}`} target="_blank" rel="noopener noreferrer">
                                    <FaEnvelope />
                                </a>
                                <a href={`tel:${employee.phone}`} target="_blank" rel="noopener noreferrer">
                                    <FaPhoneAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
