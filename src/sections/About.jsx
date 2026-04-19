import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Palette, Code2, Rocket } from 'lucide-react';
import { useDesignTheme } from '../hooks/useDesignTheme';
import { getThemeConfig } from '../data/themeConfig';
import { TriangleDot, DoodleDot } from '../components/ThemeDecorations';
import SectionTitle from '../components/SectionTitle';

const steps = [
  { key: 'bac', icon: GraduationCap, color: '#7c3aed', num: '01', side: 'left' },
  { key: 'studies', icon: Palette, color: '#f97316', num: '02', side: 'right' },
  { key: 'but', icon: Code2, color: '#3b82f6', num: '03', side: 'left' },
  { key: 'lymen', icon: Rocket, color: '#10b981', num: '04', side: 'right' },
];

function TimelineDot({ color, dotElement }) {
  switch (dotElement) {
    case 'square':
      return (
        <div
          className="w-[18px] h-[18px] relative"
          style={{ background: color, border: '3px solid #000', borderRadius: 2, boxShadow: `2px 2px 0 #000` }}
        />
      );
    case 'triangle':
      return <TriangleDot color={color} />;
    case 'doodle':
      return <DoodleDot color={color} />;
    case 'circle':
    default:
      return (
        <div
          className="w-4 h-4 rounded-full relative"
          style={{ background: color, boxShadow: `0 0 12px ${color}40` }}
        />
      );
  }
}

export default function About() {
  const { t } = useTranslation();
  const [theme] = useDesignTheme();
  const cfg = getThemeConfig(theme);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background — only for themes with blobs */}
      {cfg.showBlobs && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/8 to-transparent dark:from-primary-500/15" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-pink/8 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-cyan/6 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20 space-y-4"
        >
          <p className="text-base sm:text-lg leading-relaxed text-surface-900/70 dark:text-surface-200/70">
            {t('about.text_1')}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-surface-900/70 dark:text-surface-200/70">
            {t('about.text_2')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={cfg.aboutPerspective ? { perspective: 1000 } : undefined}>
          {/* Timeline vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-[23px] md:left-1/2 top-0 bottom-0 md:-translate-x-px w-0.5 origin-top"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(124,58,237,0.15) 10%, rgba(124,58,237,0.15) 90%, transparent)',
            }}
          />

          <div className="flex flex-col gap-8">
            {steps.map(({ key, icon: Icon, color, num, side }, i) => (
              <div key={key} className="relative grid md:grid-cols-2 gap-4 md:gap-12 py-2">
                {/* Timeline dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="absolute left-[23px] md:left-1/2 top-9 z-10 -translate-x-1/2"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Halo — only for themes that use it */}
                    {cfg.aboutHalo && (
                      <div
                        className="absolute w-10 h-10 rounded-full animate-halo"
                        style={{ background: `radial-gradient(circle, ${color}50, transparent 70%)` }}
                      />
                    )}
                    <TimelineDot color={color} dotElement={cfg.aboutDots} />
                  </div>
                </motion.div>

                {/* Card wrapper */}
                <div
                  className={`group relative ml-14 md:ml-0 ${
                    side === 'left'
                      ? 'md:col-start-1 md:pr-10'
                      : 'md:col-start-2 md:pl-10'
                  }`}
                  style={{ perspective: cfg.aboutPerspective ? 800 : undefined, '--step-color': color }}
                >
                  <motion.div
                    initial={cfg.aboutPerspective ? {
                      opacity: 0,
                      x: side === 'left' ? -80 : 80,
                      rotateY: side === 'left' ? -12 : 12,
                    } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl p-7 bg-white dark:bg-surface-800 border border-surface-200/50 dark:border-surface-800/50 shadow-sm dark:shadow-none hover:shadow-xl transition-shadow duration-500 cursor-default">
                      {/* Hover radial glow */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(ellipse at 50% 100%, ${color}12, transparent 60%)`,
                        }}
                      />
                      {/* Hover inner border */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ boxShadow: `inset 0 0 0 1px ${color}20` }}
                      />

                      {/* Big background number */}
                      <span
                        className="absolute -right-4 -top-6 font-extrabold pointer-events-none select-none opacity-[0.04] dark:opacity-[0.08]"
                        style={{ fontSize: 120, color, lineHeight: 1 }}
                      >
                        {num}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: `${color}10`,
                              boxShadow: `0 4px 12px ${color}15`,
                            }}
                          >
                            <Icon size={18} style={{ color }} />
                          </div>
                          <span
                            className="text-xs font-bold uppercase tracking-[0.15em]"
                            style={{ color }}
                          >
                            {num}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          {t(`about.card_${key}`)}
                        </h3>
                        <p className="text-sm leading-relaxed text-surface-900/60 dark:text-surface-200/60">
                          {t(`about.card_${key}_desc`)}
                        </p>
                      </div>

                      {/* Bottom gradient line on hover */}
                      <div
                        className="absolute bottom-0 left-0 h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {side === 'left' && <div className="hidden md:block md:col-start-2" />}
                {side === 'right' && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
