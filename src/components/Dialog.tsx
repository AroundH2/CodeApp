import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { CodeType } from './../Allcode';
import { Sebutton } from './Sebutton';

export interface DialogProps {
    open: boolean;
    codeList: CodeType[];
    onClose: () => void;
    onSelect: (code: CodeType) => void;

}

export function SimpleDialog(props: DialogProps) {
    const { onClose, onSelect, codeList, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value: CodeType) => {
        onSelect(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>コードを選んでください</DialogTitle>
            {codeList.map((code) => (
                <Sebutton
                    codeName={code.codeName}
                    onClick={() => handleListItemClick(code)} />
            ))}


        </Dialog>
    );
}

