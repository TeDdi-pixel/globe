import React from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, } from '@mui/material';
import { DateRangePicker, LocalizationProvider, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Stays({ promocode }) {
    return (
        <div className="main-stays">

            <FormControl
                variant="outlined"
                className='main-stays__form-control main-stays__form-control-road'>
                <InputLabel id='main-stays__select-label'>Where to stay</InputLabel>
                <Select

                    labelId="main-stays__select-tlabel"
                    id="demo-simple-select"
                    label="Where to stay"
                >
                    <MenuItem value='Lahore - Karachi'>Name of the hotel</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the hotel</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the hotel</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the hotel</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the hotel</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                variant="outlined"
                className='main-stays__form-control main-stays__form-control-trip'>
                <InputLabel id='main-stays__select-label'>Trip from</InputLabel>
                <Select
                    labelId="main-stays__select-label"
                    id="demo-simple-select"
                    label="Trip from"
                >
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                variant="outlined"
                className='main-stays__form-control main-stays__form-control-trip'>
                <InputLabel id='main-stays__select-label'>Trip to</InputLabel>
                <Select
                    labelId="main-stays__select-label"
                    id="demo-simple-select"
                    label="Trip to"
                >
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                    <MenuItem value='Lahore - Karachi'>Name of the place</MenuItem>
                </Select>
            </FormControl>

            <LocalizationProvider
                dateAdapter={AdapterDayjs}
            >
                <DateRangePicker
                    className='main-stays__form-control main-stays__form-control-input'
                    slots={{ field: SingleInputDateRangeField }}
                    label={'Stay time'} />
            </LocalizationProvider>

            <FormControl
                variant="outlined"
                className='main-stays__form-control main-stays__form-control-class'>
                <InputLabel id='main-stays__select-label'>Room class</InputLabel>
                <Select


                    labelId="main-stays__select-label"
                    id="demo-simple-select"
                    label="Room class"
                >
                    <MenuItem value='Lux'>Lux</MenuItem>
                    <MenuItem value='Business'>Business</MenuItem>
                    <MenuItem value='Something else'>Something else</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                sx={{
                    display: promocode ? 'block' : 'none',
                }}
                //   className={promocode ? 'main-flights-stays-add-promo main-flights-stays-add-promo_active' : 'main-flights-stays-add-promo'}
                variant="outlined"
            >
                <InputLabel id="add-promo-label">Add promo code</InputLabel>
                <OutlinedInput
                    labelId="add-promo-label"
                    label="Add promo code"
                />
            </FormControl>
        </div>
    );
}

export default Stays;