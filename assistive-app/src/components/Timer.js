import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer({ expiryTimestamp, setReset, setOptionalToggle, setStart }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart: false });

  useEffect(() => {
    if (!isRunning) {
      setReset(true);
      setStart(false);
    } else {
      setStart(true);
    }
  }, [isRunning]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='row-span-full mb-2'>
        <div style={{ fontSize: '30px' }}>
          <span>{minutes}</span> min:<span>{seconds}</span> s
        </div>
        <button
          type="button"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 10);
            restart(time);
            setReset(false);
            setOptionalToggle(true);
          }}
          className="w-3/4 text-black bg-amber-50 hover:bg-amber-100 border-solid border border-stone-950 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 disabled:bg-gray-200"
          disabled={isRunning}>
          START
        </button>
      </div>
    </div>
  );
}