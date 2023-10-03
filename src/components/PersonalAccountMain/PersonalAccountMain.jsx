
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../Account/Account';
import History from '../History/History';
import Payments from '../Payments/Payment';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


const PersonalAccountMain = () => {
    // const { register, handleSubmit } = useForm();
    const [account, setAccount] = useState(true);
    const [history, setHistory] = useState(false);
    const [payment, setPayment] = useState(false);
    const [background, setBackground] = useState(null)
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const userData = JSON.parse(Cookies.get('user'));

    useEffect(() => {
        setEmail(userData.email);
        setUserName(userData.userName);
    }, []);

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

    const handleBackground = (event) => {
        try {
            const reader = new FileReader();
            const selectedFile = event.target.files[0];
            reader.readAsDataURL(selectedFile);

            if (selectedFile) {
                reader.onload = () => {
                    const base64Image = reader.result;
                    localStorage.setItem('userBackground', base64Image);
                    setBackground(base64Image);
                };
            }
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        if (!Cookies.get('user'))
            navigate('/flights');
        const storedImage = localStorage.getItem('userImage');
        const storedBackgroundImage = localStorage.getItem('userBackground');
        if (storedImage) {
            setImage(storedImage);
        }
        if(storedBackgroundImage){}
            setBackground(storedBackgroundImage);
    }, []);

    return (
        <>
            <main className='personal-acc'>
                <div className="personal-acc__container">
                    <div className='personal-acc__top-background'>
                        {background ? <img src={background} alt="" />
                            :
                            <img src="./assets/img/09d33d4d260d902f404ce31c509b1086.jpg" alt="" />}
                        {/* <img src="./assets/img/09d33d4d260d902f404ce31c509b1086.jpg" alt="" /> */}
                        <form >
                            <label htmlFor='background' className='personal-acc__new-cover'>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <svg
                                        viewBox="0 0 512 512"
                                        fill="white"
                                        height="16"
                                        width="16"
                                    >
                                        <path d="M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 01-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.07 150.07 0 00-42.06 53 16 16 0 01-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 01-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0122.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 01-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19zM240 448.21a16 16 0 1032 0v-64.42h-32z" />
                                    </svg>
                                </div>
                                <span>Upload new cover</span>
                                <input
                                    type="file"
                                    id='background'
                                    accept="image/*"
                                    onChange={handleBackground}
                                />
                            </label>
                        </form>

                    </div>
                    <div className='personal-acc__profile-data'>
                        <div className='personal-acc__photo'>

                            {image ?
                                <form className='personal-acc__photo__wrapper'>
                                    <img src={image} alt="" />
                                    <label htmlFor="avatar" className='personal-acc__photo_change'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M17.3103 6.06L4.55422 18.8475L3.78125 20.7187L5.6525 19.9458L18.44 7.18968L17.3103 6.06ZM19.8627 3.50812L19.31 4.06031L20.4397 5.19L20.9923 4.63734C21.1374 4.49222 21.2188 4.29546 21.2188 4.09031C21.2188 3.88516 21.1374 3.6884 20.9923 3.54328L20.9572 3.50812C20.8853 3.43625 20.8 3.37923 20.7061 3.34034C20.6122 3.30144 20.5116 3.28142 20.4099 3.28142C20.3083 3.28142 20.2076 3.30144 20.1137 3.34034C20.0198 3.37923 19.9345 3.43625 19.8627 3.50812Z" stroke="black" strokeWidth="2.0625" stroke-linecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input
                                            style={{width: '0'}}
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
                                    <PermIdentityIcon  style={{width: '130px', height: '130px'}}/>
                                    <label htmlFor="avatar" className='personal-acc__photo_change'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M17.3103 6.06L4.55422 18.8475L3.78125 20.7187L5.6525 19.9458L18.44 7.18968L17.3103 6.06ZM19.8627 3.50812L19.31 4.06031L20.4397 5.19L20.9923 4.63734C21.1374 4.49222 21.2188 4.29546 21.2188 4.09031C21.2188 3.88516 21.1374 3.6884 20.9923 3.54328L20.9572 3.50812C20.8853 3.43625 20.8 3.37923 20.7061 3.34034C20.6122 3.30144 20.5116 3.28142 20.4099 3.28142C20.3083 3.28142 20.2076 3.30144 20.1137 3.34034C20.0198 3.37923 19.9345 3.43625 19.8627 3.50812Z" stroke="black" strokeWidth="2.0625" stroke-linecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input
                                            style={{width: '0'}}
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
                    <div className='personal-acc__tabs-container'>
                        <div className='personal-acc__tabs'>
                            <li className="personal-acc__tab"
                                onClick={() => { setAccount(true); setHistory(false); setPayment(false) }}
                            >
                                Account
                                <div className={account ? "personal-acc__tab-underscore personal-acc__tab-underscore_active" : "personal-acc__tab-underscore"}></div>
                            </li>
                            <span className="personal-acc__spread"></span>
                            <li className="personal-acc__tab"
                                onClick={() => { setAccount(false); setHistory(true); setPayment(false) }}
                            >
                                History
                                <div className={history ? "personal-acc__tab-underscore personal-acc__tab-underscore_active" : "personal-acc__tab-underscore"}></div>
                            </li>
                            <span className="personal-acc__spread"></span>
                            <li className="personal-acc__tab"
                                onClick={() => { setAccount(false); setHistory(false); setPayment(true) }}
                            >
                                Payment methods
                                <div className={payment ? "personal-acc__tab-underscore personal-acc__tab-underscore_active" : "personal-acc__tab-underscore"}></div>
                            </li>
                        </div>

                    </div>
                    <div className='personal-acc__tab-info-wrapper'>
                        {account ? <Account /> : null}
                        {history ? <History /> : null}
                        {payment ? <Payments /> : null}
                    </div>
                </div>
            </main>
        </>
    );
}

export default PersonalAccountMain;
