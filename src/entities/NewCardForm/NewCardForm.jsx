import { Checkbox, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useContext, useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { InfoOutlined } from '@mui/icons-material';

import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { DataContext } from '../../Context/Context';

const NewCardForm = ({ showForm, hideForm }) => {
    const { register, handleSubmit } = useForm();
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
     
    const [expire, setExpire] = useState('');
    const [country, setCountry] = useState('');
    const [cardName, setCardName] = useState('');
    const data = useContext(DataContext);
    const fakeData = data.fakeData;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleChangeCardNumber = (e) => {
        const { value } = e.target;
        const numberOnly = value.replace(/\D/g, '');
        let formattedNumber = numberOnly;

        if (numberOnly.length > 16) {
            formattedNumber = numberOnly.substring(0, 16);
        }
        formattedNumber = formattedNumber.match(/.{1,4}/g);
        formattedNumber = formattedNumber ? formattedNumber.join(' ') : '';
        setCardNumber(formattedNumber);
    }
    const handleExpire = (e) => {
        const value = e.target.value;

        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length > 4) {
            setExpire(`${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`);
        } else if (numericValue.length > 2) {
            if (!numericValue.includes('/')) {
                setExpire(`${numericValue.slice(0, 2)}/${numericValue.slice(2)}`);
            } else {
                setExpire(numericValue);
            }
        } else {
            setExpire(numericValue);
        }
    }
    const handleCvc = (e) => {
        const { value } = e.target;
        if (value.length <= 3 || cvv === '') {
            setCvv(value);
        }
    }
    const handleCardName = (e) => {
        setCardName(e.target.value);
    }
    const handleCountry = (e) => {
        setCountry(e.target.value);
    }
    const countries = fakeData.country.map((item, index) => {
        return (
            <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
        )
    })
    const resetForm = () => {
        setCardNumber('');
        setCvv('');
        setExpire('');
        setCountry('');
        setCardName('');
    }
    const onSubmit = (creditCard) => {
        const user = JSON.parse(Cookies.get('user'));
        if (!user.creditCards || !Array.isArray(user.creditCards)) {
            user.creditCards = [];
        }
        user.creditCards.push(creditCard);
        Cookies.set('user', JSON.stringify(user));
        resetForm()
    }

    return (
        <div style={showForm ? { overflow: 'hidden' } : { overflow: 'auto' }} className={showForm ? 'personal-acc__payments-form-background personal-acc__payments-form-background_opened' : 'personal-acc__payments-form-background'}>

            <form className='personal-acc__payments-form' onSubmit={(e) => { handleSubmit(onSubmit)(e); hideForm(e) }}>
                <button type="button" onClick={hideForm} className='personal-acc__payments-form-exit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z" fill="black" />
                    </svg>
                </button>

                <h2>Add new card</h2>
                <div className='personal-acc__payments-form-input'>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="cardNumber">Card number</InputLabel>
                        <OutlinedInput
                            {...register('cardNumber')}
                            required
                            placeholder='0000 0000 0000 0000'
                            id="cardNumber"
                            type='text'
                            value={cardNumber}
                            onChange={handleChangeCardNumber}
                            endAdornment={<CreditCardIcon />}
                            label="Card number"
                        />
                    </FormControl>
                </div>
                <div className='personal-acc__payments-form-half-input'>
                    <div className='personal-acc__payments-form-input'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="expireDate">Exp. Date</InputLabel>
                            <OutlinedInput
                                {...register('expireDate')}
                                required
                                placeholder={'MM/YY'}
                                value={expire}
                                onChange={handleExpire}
                                id="expireDate"
                                type='text'
                                label="Exp. Date"
                            />
                        </FormControl>
                    </div>
                    <div className='personal-acc__payments-form-input'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="cardNumber">CVC/CVV</InputLabel>
                            <OutlinedInput
                                {...register('cvv')}
                                required
                                id="cvv"
                                value={cvv}
                                onChange={handleCvc}
                                type='number'
                                endAdornment={<InfoOutlined />}
                                label="CVC/CVV"
                            />
                        </FormControl>
                    </div>
                </div>
                <div className='personal-acc__payments-form-input'>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="cardName">Name on Card</InputLabel>
                        <OutlinedInput
                            {...register('cardName')}
                            required
                            id="cardName"
                            value={cardName}
                            onChange={handleCardName}
                            type='text'
                            endAdornment={<InfoOutlined />}
                            label="Name on Card"
                        />
                    </FormControl>
                </div>
                <div className='personal-acc__payments-form-input'>
                    <FormControl fullWidth>
                        <InputLabel id="country">Country or Region</InputLabel>
                        <Select
                            {...register('country')}
                            id="country"
                            value={country}
                            label="Country or Region"
                            required
                            onChange={handleCountry}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {countries}
                        </Select>
                    </FormControl>
                </div>

                <button className='personal-acc__payments-form-button' type='submit'>Add Card</button>
                <p className='personal-acc__payments-form-check'>
                    <li>
                        <Checkbox
                            {...label}
                            sx={{
                                color: '#000000',

                                '&.Mui-checked': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </li>
                    <li>Securely save my information for 1-click checkout</li>
                </p>
                <p className='personal-acc__payments-form-agreement'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
            </form>
        </div>
    );
}

export default NewCardForm;
