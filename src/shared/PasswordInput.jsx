import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';

const PasswordInput = ({ htmlFor, name, label, id, register }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
            <OutlinedInput
                {...register(name)}
                required
                id={id}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
}

export default PasswordInput;
