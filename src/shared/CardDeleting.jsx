import React from 'react';

const CardDeleting = ({ showDeleteMassage,hideDeleteMassage,deleteCard }) => {
    // console.log(showDeleteMassage);
    return (
        <div className={showDeleteMassage ? 'personal-acc__payments-card-delete-massage-block personal-acc__payments-card-delete-massage-block_active' : 'personal-acc__payments-card-delete-massage-block'}>
            <div className='personal-acc__payments-card-delete-massage__wrapper'>
            <div className='personal-acc__payments-card-delete-massage' >
                Do you want to delete card?
            </div>
            <div className='personal-acc__payments-card-delete-massage-agreement'>
                <li className='personal-acc__payments-card-delete-massage-button' onClick={deleteCard}><button >Yes</button></li>
                <li className='personal-acc__payments-card-delete-massage-button' onClick={hideDeleteMassage}><button >Cancel</button></li>
            </div>
            </div>
            
        </div>
    );
}

export default CardDeleting;
