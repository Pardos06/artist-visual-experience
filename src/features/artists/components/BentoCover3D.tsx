import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";

interface Props {
  cover: string;
  backCover: string;
  title: string;
}

const BentoCover3D = ({ cover, backCover, title }: Props) => {
  const rotateY = useMotionValue(0);
  const smoothRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  // 1. Añadimos el guion bajo a _event
  // 2. Importamos PanInfo para tipar estrictamente la información
  const handlePan = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    rotateY.set(rotateY.get() + info.delta.x * 0.6);
  };

  return (
    <div className="bento-cover__3d-wrapper" style={{ touchAction: "none" }}>
      <motion.div
        onPan={handlePan}
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