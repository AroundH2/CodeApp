import * as React from 'react';
import Button from '@mui/material/Button';
import { Sebutton } from './Sebutton';
import { CodeType } from '../Allcode';
import { SimpleDialog } from './Dialog';


interface Dialogbutton {
    codeList: CodeType[];
    onSelect: (value: CodeType) => void;
}

export function SimpleDialogbutton(props: Dialogbutton) {
    const { onSelect, codeList } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (value: CodeType) => {  /*選んだボタンをノードに追加するため*/
        onSelect(value);
        setOpen(false);
    }


    return (
        <div>
            <Button variant="outlined" sx={{ textTransform: "none" }} onClick={handleClickOpen}>
                m
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                codeList={codeList}
                onSelect={handleSelect}
            />
        </div>
    );
}