
import './Play.css';
import { sleep } from './../Sleep';
import { CodeType } from '../Allcode';
import { useSound } from "./useSound"

interface Props {
    law: CodeType[]
    key: number
}

export const Play = (props: Props) => {
    const sound = useSound()

    return (
        <>
            <div className='text'>
                <button onClick={() =>
                    sound.Play(props.law)}>Play</button>
            </div>
        </>
    )
}