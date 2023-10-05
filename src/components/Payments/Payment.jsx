import React, { useState } from 'react';
import NewCardForm from '../NewCardForm/NewCardForm';

const Payments = () => {
    const [showForm, setShowForm] = useState(false);

    const handleCardForm = () => {
        setShowForm((prev) => !prev)
        if(document.body.style.overflow !== 'hidden' || document.body.style.overflow === ''){
            document.body.style.overflow = 'hidden';
        }else
            document.body.style.overflow = 'auto';
        
    }
    
    return (
        <div className='personal-acc__payments'>
            <h1 className='personal-acc__payments-title'>Payment methods</h1>
            <div className='personal-acc__payments-info'>
                <label htmlFor="newCard" className='personal-acc__payments-card'>
                    <div className='personal-acc__payments-plus'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                            <path d="M56 32.5C56 19.25 45.25 8.5 32 8.5C18.75 8.5 8 19.25 8 32.5C8 45.75 18.75 56.5 32 56.5C45.25 56.5 56 45.75 56 32.5Z" stroke="#8DD3BB" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M32 22.5V42.5M42 32.5H22" stroke="#8DD3BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span>Add a new card</span>
                    <input
                        type='button'
                        id="newCard"
                        className='personal-acc__payments-input'
                        onClick={handleCardForm}
                    />
                </label>
                <NewCardForm showForm={showForm} hideForm={handleCardForm}/>
            </div>
        </div>
    );
}

export default Payments;
