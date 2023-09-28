
import React, { useEffect, useState } from 'react';


const PersonalAccountMain = () => {
    // const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);
    const handleFileInputChange = (event) => {
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
    };
    useEffect(() => {
        const storedImage = localStorage.getItem('userImage');
        if (storedImage) {
            setImage(storedImage);
        }
    }, []);

    return (
        <>
            <main className='personal-acc'>
                <div className="personal-acc__container">
                    <div className='personal-acc__top-background'>
                        <img src="./assets/img/09d33d4d260d902f404ce31c509b1086.jpg" alt="" />
                        <form >
                            <label for='file' className='personal-acc__new-cover'>
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
                                    id='file'
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                />
                            </label>
                        </form>

                    </div>
                    <div className='personal-acc__profile-data'>
                        <div className='personal-acc__photo'>

                            {image ?
                                <img src={image} alt="" /> :
                                <svg
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="100"
                                    width="100"
                                >
                                    <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0112 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0112 8a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 11z" />
                                </svg>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PersonalAccountMain;
