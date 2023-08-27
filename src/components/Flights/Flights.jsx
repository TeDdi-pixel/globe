import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput, } from '@mui/material';
import { DateRangePicker, LocalizationProvider, MobileDateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Flights() {
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
        </form>
    );
}

export default Flights;