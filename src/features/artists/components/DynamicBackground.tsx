import { motion, AnimatePresence } from "framer-motion";

interface DynamicBackgroundProps {
  type: 'blobs' | 'grid-paper' | string;
  colors: string[];
}

// Función para asegurar que el color sea válido para CSS
const formatColor = (color: string | undefined, fallback: string) => {
  if (!color) return fallback;
  const c = color.trim();
  return c.startsWith('#') ? c : `#${c}`;
};

const DynamicBackground = ({ type, colors }: DynamicBackgroundProps) => {
  return (
    <div 
      className="timeline-background"
      style={{
        '--bg-color-1': formatColor(colors?.[0], '#0a0807'),
        '--bg-color-2': formatColor(colors?.[1], '#2c241d'),
        '--bg-color-3': formatColor(colors?.[2], '#4d3d1a'),
      } as React.CSSProperties}
    >
      <AnimatePresence mode="wait">
          {(!type || type === 'blobs') && (
            <motion.div
                key="blobs"
                className="bg-layer-blobs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <div className="bg-layer-blobs__shape" />
            </motion.div>
            )}

            {type === 'grid-paper' && (
            <motion.div
                key="grid-paper"
                className="bg-layer-grid"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <div className="bg-layer-grid__pattern" />
            </motion.div>
            )}

            {type === 'mesh' && (
            <motion.div
                key="mesh"
                className="bg-layer-mesh"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <div className="bg-layer-mesh__glow" />
          </motion.div>
         )}
         {type === 'aurora-pop' && (
            <motion.div
                key="aurora"
                className="bg-layer-aurora"
                initial={{ opacity: 0, scale: 1.2 }} // Entra desde "zoom" para dar impacto
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <div className="bg-layer-aurora__lights" />
            </motion.div>
            )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicBackground;