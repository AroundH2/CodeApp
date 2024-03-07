import useSound from 'use-sound';
import './Play.css';
import {sleep} from './../Sleep';

interface Props{
    law:string[]
    key:number
}

export const Play = (props:Props)=> {
    
    /*function sleep(ms: number): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }*/
    const [play0] = useSound(props.law[0]);
    
    const [play1] = useSound(props.law[1]);
      
    const [play2] = useSound(props.law[2]);
    
    const [play3] = useSound(props.law[3]);
    
    async function Sound() { 
        let s = props.law.length
        play0()
        await sleep(1500);
        play1()
        await sleep(1500);
        play2()
        await sleep(1500);
        play3()
        await sleep(1500);
        console.log("End");
    }

    return (
        <>
            <button onClick={() =>
            Sound()}>Play</button>
        </>
    )
}