import React, { useEffect, useState } from "react";
import { Circle } from "./StatsCircle.styles";

const StatsCircle = ({ progress, size }) => {
  const [offset, setOffset] = useState(0);
  const center = size / 2;
  const radius = size / 2 - 10 / 2;
  const circum = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circum;
    setOffset(progressOffset);
  }, [setOffset, progress, circum]);

  return (
    <Circle>
      <svg height={size} width={size} className="svg">
        <circle
          className="svg-circle-bg"
          stroke="var(--color-gray-200)"
          cx={center}
          cy={center}
          r={radius}
        />
        <circle
          className="svg-circle"
          stroke="var(--color-orange-500)"
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circum}
          strokeDashoffset={offset}
          transform={`rotate(-90, ${center}, ${center})`}
        />
        <text className="svg-circle-text" x={center} y={center}>
          {progress}%
        </text>
      </svg>
    </Circle>
  );
};

export default StatsCircle;
