import A4 from "./mp3/A4.mp3";
import B4 from "./mp3/B4.mp3";
import C4 from "./mp3/C4.mp3";
import D4 from "./mp3/D4.mp3";
import E4 from "./mp3/E4.mp3";
import F4 from "./mp3/F4.mp3";
import G4 from "./mp3/G4.mp3";
import Cm4 from "./mp3/Cm4.mp3";
import Dm4 from "./mp3/Dm4.mp3"
import Em4 from "./mp3/Em4.mp3"
import Fm4 from "./mp3/Fm4.mp3"
import Gm4 from "./mp3/Gm4.mp3"
import Am4 from "./mp3/Am4.mp3"
import Bm4 from "./mp3/Bm4.mp3"

export const Code = {
    A4: A4,
    Am4: Am4,
    B4: B4,
    Bm4: Bm4,
    C4: C4,
    Cm4: Cm4,
    D4: D4,
    Dm4: Dm4,
    E4: E4,
    Em4: Em4,
    F4: F4,
    Fm4: Fm4,
    G4: G4,
    Gm4: Gm4,
};

export type CodeType = { codeName: string; code: any };

export const codeList: CodeType[] = [
    { codeName: "C", code: Code.C4, },
    { codeName: "Cm", code: Code.Cm4 },

    { codeName: "D", code: Code.D4, },
    { codeName: "Dm", code: Code.Dm4 },

    { codeName: "E", code: Code.E4, },
    { codeName: "Em", code: Code.Em4 },

    { codeName: "F", code: Code.F4, },
    { codeName: "Fm", code: Code.Fm4 },

    { codeName: "G", code: Code.G4, },
    { codeName: "Gm", code: Code.Gm4 },

    { codeName: "A", code: Code.A4 },
    { codeName: "Am", code: Code.Am4 },

    { codeName: "B", code: Code.B4 },
    { codeName: "Bm", code: Code.Bm4 },
];

export const Ccode: CodeType[] = [
    { codeName: "C", code: Code.C4, },
    { codeName: "Cm", code: Code.Cm4 },
]

export const Dcode: CodeType[] = [
    { codeName: "D", code: Code.D4, },
    { codeName: "Dm", code: Code.Dm4 },
]

export const Ecode: CodeType[] = [
    { codeName: "E", code: Code.E4, },
    { codeName: "Em", code: Code.Em4 },
]

export const Fcode: CodeType[] = [
    { codeName: "F", code: Code.F4, },
    { codeName: "Fm", code: Code.Fm4 },
]

export const Gcode: CodeType[] = [
    { codeName: "G", code: Code.G4, },
    { codeName: "Gm", code: Code.Gm4 },
]

export const Acode: CodeType[] = [
    { codeName: "A", code: Code.A4, },
    { codeName: "Am", code: Code.Am4 },
]

export const Bcode: CodeType[] = [
    { codeName: "B", code: Code.B4, },
    { codeName: "Bm", code: Code.Bm4 },
]

export const ViewCode = {
    "C": Ccode, "D": Dcode, "E": Ecode, "F": Fcode, "G": Gcode, "A": Acode, "B": Bcode
};

export const DialogCode = [
    "M", "m"
];