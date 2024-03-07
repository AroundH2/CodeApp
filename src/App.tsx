import { useState, useEffect } from "react";
import "./App.css";
import { Play } from "./components/Play";
import { sleep } from "./Sleep";
import { Sebutton } from "./components/Sebutton";
import Button from "@mui/material/Button";
import { Code, codeList, CodeType } from "./Allcode"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function App() {
  const [music, setMusic] = useState<CodeType[]>([]);
  const i = 0;

  console.log(music);

  return (
    <>
      <Play key={i} law={music} />
      {codeList.map((t, i) => (
        <Sebutton
          codeName={t.codeName}
          onClick={() => {
            console.log("C code");
            setMusic(da => [...da, t])
          }} />))}
      <div>
        <Stack direction="row" spacing={4}>
          {Array.from(new Array(4)).map((_, i) => (
            <Box
              height={10}
              width={10}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid grey' }}
            >
              {music.length > i ? music[i].codeName : ""}
            </Box>
          ))
          }</Stack>
        <Stack direction="row" spacing={4}>
          {Array.from(new Array(4)).map((_, i) => (
            <Box
              height={10}
              width={10}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid grey' }}
            >
              {music.length > i + 4 ? music[i + 4].codeName : ""}
            </Box>
          ))
          }</Stack>
      </div>

    </>
  );
}

export default App;
