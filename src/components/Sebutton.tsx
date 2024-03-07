import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Sebutton: React.FC<{
    codeName: string;
    onClick: () => void;
}> = ({ codeName, onClick }) => {
    return (
        <Button variant="outlined" onClick={onClick}>
            {codeName}
        </Button>
    );
}