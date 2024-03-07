import React from "react";
import "./App.css";
import useSound from "use-sound";
import sound from "./Allcode/C4.mp3";
import sound1 from "./Allcode/B4.mp3";
import { Play } from "./components/Play";
import { sleep } from "./Sleep";

import Button from "@mui/material/Button";

function App() {
  const music = [sound, sound1];
  let i = 0;

  /*function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
  }

  const [play0] = useSound(music[0],{
    onend:() => {
      i++;}
  });

  const [play1] = useSound(music[1],{
    onend:() => {
      i++;}
  });
  
  const [play2] = useSound(music[2],{
    onend:() => {
      i++;}
  });

  const [play3] = useSound(music[3],{
    onend:() => {
      i++;}
  });

  async function Play () { 
    let s = music.length
    play0()
    await sleep(1500);
    play1()
    await sleep(1500);
    play2()
    await sleep(1500);
    play3()
    await sleep(1500);
    console.log("End");
  }*/

  return (
    <>
      <Play key={i} law={music} />
      <h2>{sound}</h2>
      <h4>{music[0]}</h4>
      <h5>{music[1]}</h5>
      <Button>aaaaa</Button>
    </>
  );
}

export default App;
