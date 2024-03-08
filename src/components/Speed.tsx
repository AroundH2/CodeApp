import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

export const Speed: React.FC<{
    speed: number;
    onChange: (value: number) => void;
}> = ({ speed, onChange }) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <SlowMotionVideoIcon />
                <Slider aria-label=""
                    valueLabelDisplay="auto"
                    shiftStep={1}
                    step={0.1}
                    marks
                    min={0.1}
                    max={2} value={speed} onChange={handleChange} />
            </Stack>
        </Box>
    );
}