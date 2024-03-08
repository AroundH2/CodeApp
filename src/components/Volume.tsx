import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const Volume: React.FC<{
    volume: number;
    onChange: (value: number) => void;
}> = ({ volume, onChange }) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label=""
                    shiftStep={1}
                    step={0.1}
                    marks
                    min={0}
                    max={1} value={volume} onChange={handleChange} />
                <VolumeUp />
            </Stack>
            {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Box>
    );
}