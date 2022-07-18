import React, { useState, useEffect } from "react";
import Image from "./Image";
import Timer from "./Timer";
import { useTimer } from "react-timer-hook";

const Face = () => {
  const [p1Name, setP1Name] = useState("Scissors");
  const [p2Name, setP2Name] = useState("Scissors");
  const [winner, setWinner] = useState("None");

  //Evaluate function
  const evaluate = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    if (p1 !== p2) {
      if (p1 === "rock") {
        if (p2 === "scissors") {
          setWinner("LEFT");
        } else setWinner("RIGHT");
      }

      if (p1 === "paper") {
        if (p2 === "rock") {
          setWinner("LEFT");
        } else setWinner("RIGHT");
      }

      if (p1 === "scissors") {
        if (p2 === "paper") {
          setWinner("LEFT");
        } else setWinner("RIGHT");
      }
    } else setWinner("NONE");
  };

  //Timer settings
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3);
  const { seconds, isRunning, restart } = useTimer({
    time,
    onExpire: () => evaluate(p1Name.toLowerCase(), p2Name.toLowerCase()),
  });

  const handleP1Name = (name) => {
    setP1Name(name);
  };

  const handleP2Name = (name) => {
    setP2Name(name);
  };

  console.log(p1Name);
  console.log(p2Name);

  return (
    <div className="grid grid-cols-3 grid-rows-2 content-center">
      <div className="bg-slate-400 h-96 grid-rows-2 w-3/8">
        <div className="bg-slate-300 h-3/4 justify-center">
          <div className="">
            <Image name={p1Name} />
          </div>
        </div>
        <div className="bg-slate-200 h-1/4 py-8 ">
          <span className="font-mono text-2xl">{p1Name}</span>
        </div>
      </div>

      <div className="w-2/8  pt-20">
        <span className="text-[120px]">VS.</span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "100px" }}>
            <span>{seconds}</span>
          </div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 3);
              restart(time);
            }}
          >
            Play
          </button>
        </div>
      </div>

      <div className="bg-slate-400 h-96 grid-rows-2 w-3/8">
        <div className="bg-slate-300 h-3/4">
          <Image name={p2Name} />
        </div>
        <div className="bg-slate-200 h-1/4 py-8 ">
          <span className="font-mono text-2xl">{p2Name}</span>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP1Name("Rock")}
          >
            ROCK
          </button>
        </div>
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP1Name("Paper")}
          >
            PAPER
          </button>
        </div>
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP1Name("Scissors")}
          >
            SCISSORS
          </button>
        </div>
      </div>
      <div className="top-10 relative text-5xl">{winner}</div>
      <div className="grid grid-cols-3">
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP2Name("Rock")}
          >
            ROCK
          </button>
        </div>
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP2Name("Paper")}
          >
            PAPER
          </button>
        </div>
        <div>
          <button
            className="text-2xl p-5 border-4 mt-5 border-indigo-500/75 hover:bg-slate-400"
            onClick={() => handleP2Name("Scissors")}
          >
            SCISSORS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Face;
