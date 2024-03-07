import A4 from "./mp3/A4.mp3";
import B4 from "./mp3/B4.mp3";
import C4 from "./mp3/C4.mp3";
import D4 from "./mp3/D4.mp3";
import E4 from "./mp3/E4.mp3";
import F4 from "./mp3/F4.mp3";
import G4 from "./mp3/G4.mp3";

export const Code = {
    A4: A4,
    B4: B4,
    C4: C4,
    D4: D4,
    E4: E4,
    F4: F4,
    G4: G4,
};

export type CodeType = { codeName: string; code: any };

export const codeList: CodeType[] = [
    {
        codeName: "C",
        code: Code.C4,
    },
    {
        codeName: "D",
        code: Code.D4,
    },
    {
        codeName: "E",
        code: Code.E4,
    },
    {
        codeName: "F",
        code: Code.F4,
    },
    {
        codeName: "G",
        code: Code.G4,
    },
    { codeName: "A", code: Code.A4 },
    { codeName: "B", code: Code.B4 },
];