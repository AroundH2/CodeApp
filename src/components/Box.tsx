import * as React from 'react';
import Box from '@mui/material/Box';

export default function Node() {
    return (
        <Box
            height={10}
            width={10}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
        >
            C
        </Box>
    );
}