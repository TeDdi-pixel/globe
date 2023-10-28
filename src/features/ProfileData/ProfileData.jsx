import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { LuUserCircle } from 'react-icons/lu';
import {IoPencilOutline} from 'react-icons/io5';

const ProfileData = () => {
    const userData = JSON.parse(Cookies.get('user'));
    const [image, setImage] = useState(userData.userPhoto || null);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    
    const navigate = useNavigate();

    const handleFileInputChange = (event) => {
        try {
            const reader = new FileReader();
            const selectedFile = event.target.files[0];
            reader.readAsDataURL(selectedFile);

            if (selectedFile) {
                reader.onload = () => {
                    const base64Image = reader.result;
                    localStorage.setItem('userImage', base64Image);
                    setImage(base64Image);
                };
            }
        } catch (error) {
            alert(error);
        }
    };
    
    useEffect(() => {
        setEmail(userData.email);
        setUserName(userData.userName);
        if (!Cookies.get('user'))
            navigate('/flights');
        const storedImage = localStorage.getItem('userImage');
        if (storedImage) {
            setImage(storedImage);
        }
    }, []);
    return (
        <div className='personal-acc__profile-data'>
                        <div className='personal-acc__photo'>

                            {image ?
                                <form className='personal-acc__photo__wrapper'>
                                    <img src={image} alt="" />
                                    <label htmlFor="avatar" className='personal-acc__photo_change'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M17.3103 6.06L4.55422 18.8475L3.78125 20.7187L5.6525 19.9458L18.44 7.18968L17.3103 6.06ZM19.8627 3.50812L19.31 4.06031L20.4397 5.19L20.9923 4.63734C21.1374 4.49222 21.2188 4.29546 21.2188 4.09031C21.2188 3.88516 21.1374 3.6884 20.9923 3.54328L20.9572 3.50812C20.8853 3.43625 20.8 3.37923 20.7061 3.34034C20.6122 3.30144 20.5116 3.28142 20.4099 3.28142C20.3083 3.28142 20.2076 3.30144 20.1137 3.34034C20.0198 3.37923 19.9345 3.43625 19.8627 3.50812Z" stroke="black" strokeWidth="2.0625" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input
                                            style={{ width: '0' }}
                                            type="file"
                                            id='avatar'
                                            accept="image/*"
                                            onChange={handleFileInputChange}
                                        />
                                    </label>
                                </form>
                                :
                                <div className='personal-acc__photo__wrapper'
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <LuUserCircle stroke='#121' strokeWidth="1.3px" style={{width: '130px',height:'130px'}}/>
                                    <label htmlFor="avatar" className='personal-acc__photo_change'>
                                        <IoPencilOutline style={{width:'24px',height:'24px'}}/>
                                        <input
                                            style={{ width: '0' }}
                                            type="file"
                                            id='avatar'
                                            accept="image/*"
                                            onChange={handleFileInputChange}
                                        />
                                    </label>
                                </div>
                            }
                        </div>
                        <div className='personal-acc__name'>{userName}</div>
                        <div className='personal-acc__email'>{email}</div>
                    </div>
    );
}

export default ProfileData;
