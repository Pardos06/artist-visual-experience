import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";

interface Props {
  cover: string;
  backCover: string;
  title: string;
}

const BentoCover3D = ({ cover, backCover, title }: Props) => {
  const rotateY = useMotionValue(0);
  const smoothRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handlePan = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    rotateY.set(rotateY.get() + info.delta.x * 0.6);
  };

  const handlePanEnd = () => {
    resetTimeoutRef.current = setTimeout(() => {
      rotateY.set(0);
    }, 10000); 
  };

  return (
    <div className="bento-cover__3d-wrapper">
      <motion.div
        onPan={handlePan}
        onPanEnd={handlePanEnd} 
        style={{ rotateY: smoothRotateY }}
        className="bento-cover__3d-inner"
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="bento-cover__face bento-cover__face--front">
          <img src={cover} alt={`${title} Cover`} draggable="false" />
        </div>

        <div className="bento-cover__face bento-cover__face--back">
          <img src={backCover} alt={`${title} Back Cover`} draggable="false" />
        </div>
      </motion.div>
    </div>
  );
};

export default BentoCover3D;