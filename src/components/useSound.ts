import { CodeType } from "../Allcode";
import { sleep } from './../Sleep';
import drum from './../Allcode/mp3/ドラム2.mp3';
import { useCallback } from "react";

export function useSound(volume: number, law: CodeType[]) {
    async function Play() {
        /*一回全部ミュートで流す？*/
        for await (const i of law) {
            const audio = new Audio(i.code);
            audio.volume = volume
            const beat = new Audio(drum);
            beat.volume = volume
            await audio.play();
            await beat.play();
            await sleep(1500);
        }
    }

    const play = useCallback(Play, [volume, law]);

    return { play }
}