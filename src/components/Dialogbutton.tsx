import * as React from 'react';
import Button from '@mui/material/Button';
import { Sebutton } from './Sebutton';
import { CodeType, ViewCode } from '../Allcode';
import { SimpleDialog } from './Dialog';
import Stack from '@mui/material/Stack';

interface Dialogbutton {
    text: string
    codeList: CodeType[];
    onSelect: (value: CodeType) => void;
}

export function SimpleDialogbutton(props: Dialogbutton) {
    const { onSelect, codeList, text } = props;
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
            {/* {ViwCode.map((t, i) => (
                <Button variant="outlined" sx={{ textTransform: "none" }} onClick={handleClickOpen}>
                    {t}
                </Button>
            ))} */}
            <Button variant="outlined" sx={{ textTransform: "none" }} onClick={handleClickOpen}>
                {text}
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