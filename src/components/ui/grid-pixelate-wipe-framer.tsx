import { motion } from "framer-motion";
import { useMemo, useEffect } from "react";

export function GridPixelateWipeFramer({
  cols = 15,
  rows = 10,
  cellColor = "#fce4ec",
  onComplete,
}) {
  const cells = useMemo(() => {
    const arr = [];
    const centerX = (cols - 1) / 2;
    const centerY = (rows - 1) / 2;
    
    let maxDist = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dist = Math.hypot(x - centerX, y - centerY);
        if (dist > maxDist) maxDist = dist;
      }
    }

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dist = Math.hypot(x - centerX, y - centerY);
        const normalized = maxDist === 0 ? 0 : dist / maxDist;
        // The wave starts from the center (delay 0) and expands outwards (delay up to 0.8s)
        arr.push({ id: `${x}-${y}`, delay: normalized * 0.8 }); 
      }
    }
    return arr;
  }, [cols, rows]);

  useEffect(() => {
    // Total duration = max delay (0.8s) + animation duration (0.4s)
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          initial={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            delay: cell.delay,
            ease: "easeInOut",
          }}
          style={{
            backgroundColor: cellColor,
            width: "100%",
            height: "100%",
            originX: 0.5,
            originY: 0.5,
          }}
        />
      ))}
    </div>
  );
}
