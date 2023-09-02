import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput, } from '@mui/material';
import { DateRangePicker, LocalizationProvider, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { display } from '@mui/system';

function Flights({ promocode }) {
    return (
        <form className="main-flights" onSubmit={''}>

            <FormControl
                variant="outlined"
                className='main-flights__form-control main-flights__form-control-road'>
                <InputLabel id='main-flights__select-label'>From - To</InputLabel>
                <Select

                    labelId="main-flights__select-tlabel"
                    id="demo-simple-select"
                    label="From - To"
                >
                    <MenuItem value='Lahore - Karachi'>Lahore - Karachi</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Lahore - Karachi</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Lahore - Karachi</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Lahore - Karachi</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Lahore - Karachi</MenuItem>
                </Select>

            </FormControl>

            <FormControl
                variant="outlined"
                className='main-flights__form-control main-flights__form-control-trip'>
                <InputLabel id='main-flights__select-label'>Trip</InputLabel>
                <Select
                    labelId="main-flights__select-label"
                    id="demo-simple-select"
                    label="Trip"
                >
                    <MenuItem value='Lahore - Karachi'>Return</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Return</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Return</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Return</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Return</MenuItem>
                </Select>
            </FormControl>

            <LocalizationProvider
                dateAdapter={AdapterDayjs}
            >
                <DateRangePicker
                    className='main-flights__form-control main-flights__form-control-input'
                    slots={{ field: SingleInputDateRangeField }}
                    label={'Depart - Return'} />
            </LocalizationProvider>

            <FormControl
                variant="outlined"
                className='main-flights__form-control main-flights__form-control-class'>
                <InputLabel id='main-flights__select-label'>Passenger - Class</InputLabel>
                <OutlinedInput


                    labelId="main-flights__select-label"
                    id="demo-simple-select"
                    label="Passenger - Class"
                />
            </FormControl>

            <FormControl
                sx={{
                    display: promocode ? 'block' : 'none',
                }}
                // className='main-flights__form-control main-flights__form-control-class'
                //   className={promocode ? 'main-flights-stays-add-promo main-flights-stays-add-promo_active' : 'main-flights-stays-add-promo'}
                variant="outlined"
            >
                <InputLabel id="add-promo-label">Add promo code</InputLabel>
                <OutlinedInput
                    labelId="add-promo-label"
                    label="Add promo code"
                />
            </FormControl>
        </form >
    );
}

export default Flights;