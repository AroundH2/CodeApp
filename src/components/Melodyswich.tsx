import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export const Melodyswich: React.FC<{
    checked: boolean;
    onChange: (value: boolean) => void;
}> = ({ checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <FormGroup>
            <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="メロディー" />
            {/* <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
        </FormGroup>
    );
}