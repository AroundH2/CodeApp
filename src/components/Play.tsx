
import './Play.css';
import { sleep } from './../Sleep';
import { CodeType } from '../Allcode';
import { useSound } from "./useSound"
import { Volume } from "./Volume"
import { useState } from 'react';

interface Props {
    law: CodeType[]
    key: number
}

export const Play = (props: Props) => {
    const [volume, setVolume] = useState<number>(0.5)
    const sound = useSound(volume, props.law)

    return (
        <>
            <div className='text'>
                <button onClick={() =>
                    sound.play()}>Play</button>
            </div>
            <Volume volume={volume} onChange={(v) => setVolume(v)} />
        </>
    )
}