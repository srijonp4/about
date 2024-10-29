'use client';
import { useState } from 'react';
import { Button } from './ui/button';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className=" flex  gap-4 items-center justify-center text-center">
        <Button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrement
        </Button>
        {count}
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          increment
        </Button>
      </div>
      <Button
        variant="destructive"
        onClick={() => {
          setCount(0);
        }}
      >
        {' '}
        Reset{' '}
      </Button>
    </div>
  );
};

export default Counter;
