"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp decimal="." prefix="$" end={amount} duration={2.75} decimals={2} />
  );
};

export default AnimatedCounter;
