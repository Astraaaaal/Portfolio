import { motion } from 'framer-motion';
import { useDesignTheme } from '../hooks/useDesignTheme';
import { getThemeConfig } from '../data/themeConfig';
import { NeonBar, WavyBar, DoubleRule, BoldRedBar } from './ThemeDecorations';
import GradientText from './GradientText';

function SectionBar({ style }) {
  switch (style) {
    case 'neon':
      return <NeonBar />;
    case 'wavy':
      return <WavyBar />;
    case 'double-rule':
      return <DoubleRule />;
    case 'bold-red':
      return <BoldRedBar />;
    case 'thin':
      return (
        <div className="flex justify-center mb-4">
          <div className="h-px w-16 bg-surface-900/15 dark:bg-surface-200/15" />
        </div>
      );
    case 'solid':
      return (
        <div className="flex justify-center mb-4">
          <div className="h-1 w-20 bg-primary-500" />
        </div>
      );
    case 'none':
      return null;
    case 'gradient':
    default:
      return (
        <div className="flex justify-center mb-4">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 via-accent-pink to-accent-cyan" />
        </div>
      );
  }
}

export default function SectionTitle({ title, subtitle }) {
  const [theme] = useDesignTheme();
  const { sectionBar } = getThemeConfig(theme);

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
      <SectionBar style={sectionBar} />
      {subtitle && (
        <p className="text-surface-900/60 dark:text-surface-200/60 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
