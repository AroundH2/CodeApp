import { CodeType } from "../Allcode";
import { sleep } from './../Sleep';
import drum from './../Allcode/mp3/ドラム2.mp3';
import { useCallback } from "react";
import melody1 from './../Allcode/mp3/melody1.mp3';

export function useSound(volume: number, speed: number, melody: boolean, law: CodeType[]) {
    async function Play() {
        if (melody) {
            const melody = new Audio(melody1);
            melody.volume = volume
            melody.playbackRate = speed;
            melody.play();
        }
        for await (const i of law) {
            const audio = new Audio(i.code);
            audio.volume = volume
            audio.playbackRate = speed;
            const beat = new Audio(drum);
            beat.volume = volume
            beat.playbackRate = speed;
            await audio.play();
            await beat.play();
            await sleep(1492 / speed);
        }
    }

    const play = useCallback(Play, [volume, law, melody, speed]);

    return { play }
}