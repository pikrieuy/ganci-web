import { useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const FONT_FAMILY =
  "'Playfair Display', var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

function spiralIndices(cols, rows) {
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  let i = 0;
  while (top <= bottom && left <= right) {
    for (let x = left; x <= right; x++) grid[top][x] = i++;
    top++;
    for (let y = top; y <= bottom; y++) grid[y][right] = i++;
    right--;
    if (top <= bottom) {
      for (let x = right; x >= left; x--) grid[bottom][x] = i++;
      bottom--;
    }
    if (left <= right) {
      for (let y = bottom; y >= top; y--) grid[y][left] = i++;
      left--;
    }
  }
  return grid;
}

export function GridPixelateWipe({
  from,
  to,
  cols = 12,
  rows = 7,
  pattern = "wave",
  transitionStart,
  transitionDuration = 30,
  cellFadeFrames = 4,
  speed = 1,
  className,
  cellColor = "#f48fb1",
}) {
  const frame = useCurrentFrame() * speed;
  const { durationInFrames } = useVideoConfig();

  const start =
    typeof transitionStart === "number"
      ? transitionStart
      : Math.floor(durationInFrames * 0.4);

  const delays = useMemo(() => {
    const raw = Array.from({ length: rows }, () => Array(cols).fill(0));
    const spiral = pattern === "spiral" ? spiralIndices(cols, rows) : null;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (pattern === "wave") {
          raw[y][x] = Math.hypot(x - (cols - 1) / 2, y - (rows - 1) / 2);
        } else if (pattern === "diagonal") {
          raw[y][x] = x + y;
        } else if (spiral) {
          raw[y][x] = spiral[y][x];
        }
      }
    }

    let min = Infinity;
    let max = -Infinity;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (raw[y][x] < min) min = raw[y][x];
        if (raw[y][x] > max) max = raw[y][x];
      }
    }

    const span = Math.max(0, transitionDuration - cellFadeFrames);
    const range = max - min || 1;
    const normalized = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        normalized[y][x] = ((raw[y][x] - min) / range) * span;
      }
    }
    return normalized;
  }, [cols, rows, pattern, transitionDuration, cellFadeFrames]);

  const fromContent = from;
  const toContent = to;

  const cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const delay = delays[y][x];
      const opacity =
        frame < start
          ? 1
          : interpolate(
              frame,
              [start + delay, start + delay + cellFadeFrames],
              [1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              },
            );
      cells.push(
        <div
          key={`${x}-${y}`}
          style={{
            background: cellColor,
            opacity,
          }}
        />,
      );
    }
  }

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>{toContent}</div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          // Fade out 'fromContent' entirely just as the wipe begins
          opacity: interpolate(
            frame,
            [Math.max(0, start - 15), start],
            [1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }
          ),
        }}
      >
        {fromContent}
      </div>
    </div>
  );
}
