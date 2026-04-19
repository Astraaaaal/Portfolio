import { motion } from 'framer-motion';
import GradientText from './GradientText';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 via-accent-pink to-accent-cyan" />
      </div>
      {subtitle && (
        <p className="text-surface-900/60 dark:text-surface-200/60 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
