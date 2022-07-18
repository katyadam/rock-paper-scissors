import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire aaa"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{seconds}</span>
      </div>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 3);
          restart(time);
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Timer;
