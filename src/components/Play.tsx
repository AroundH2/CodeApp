
import './Play.css';
import { sleep } from './../Sleep';
import { CodeType } from '../Allcode';
import { useSound } from "./useSound"
import { Volume } from "./Volume"
import { useState } from 'react';
import { Speed } from "./Speed"
import { Melodyswich } from "./Melodyswich"

interface Props {
    law: CodeType[]
    key: number
}

export const Play = (props: Props) => {
    const [volume, setVolume] = useState<number>(0.5)
    const [speed, setSpeed] = useState<number>(1)
    const [melody, setMelody] = useState<boolean>(false)
    const sound = useSound(volume, speed, melody, props.law)

    return (
        <>
            <div className='text'>
                <button onClick={() =>
                    sound.play()}>Play</button>
            </div>
            <Volume volume={volume} onChange={(v) => setVolume(v)} />
            <Speed speed={speed} onChange={(s) => setSpeed(s)} />
            <Melodyswich checked={melody} onChange={(m) => setMelody(m)} />
        </>
    )
}