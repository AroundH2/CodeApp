import { CodeType } from "../Allcode";
import { sleep } from './../Sleep';

export function useSound() {
    async function Play(law: CodeType[]) {
        for await (const i of law) {
            const audio = new Audio(i.code);
            await audio.play();
            await sleep(1500);
        }
    }

    return { Play }
}