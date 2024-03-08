import { CodeType } from "../Allcode";
import { sleep } from './../Sleep';
import drum from './../Allcode/mp3/ドラム2.mp3';

export function useSound() {
    async function Play(law: CodeType[]) {
        for await (const i of law) {
            const audio = new Audio(i.code);
            const beat = new Audio(drum);
            await audio.play();
            await beat.play();
            await sleep(1500);
        }

    }

    return { Play }
}