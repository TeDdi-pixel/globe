import { TextField } from '@mui/material';
import React from 'react';

const TextFieldInput = ({ type, label, register, name, fullWidth, className }) => {
    return (
        <TextField
            {...register(name)}
            required
            fullWidth={fullWidth}
            className={className}
            label={label}
            type={type}
        />
    );
}

export default TextFieldInput;
