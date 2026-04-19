import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Send } from 'lucide-react';
import GradientText from '../components/GradientText';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient blobs — vivid multi-color */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-pink/25 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent-orange/15 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-blue/15 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-accent-green/12 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-yellow/8 rounded-full blur-3xl animate-pulse [animation-delay:2.5s]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(109,40,217,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(109,40,217,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.08)_1px,transparent_1px)]" />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 right-[15%] w-20 h-20 border-2 border-accent-cyan/20 rounded-full animate-spin-slow" />
        <div className="absolute top-[20%] left-[8%] w-4 h-4 rounded-full bg-gradient-to-br from-accent-green to-accent-cyan opacity-30 animate-float" />
        <div className="absolute top-[35%] right-[10%] w-3 h-3 rounded-full bg-gradient-to-br from-primary-400 to-accent-pink opacity-40 animate-float-fast" />
        <div className="absolute bottom-[30%] left-[12%] w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink/15 to-accent-orange/15 rotate-45 animate-float-slow border border-accent-pink/10" />
        <div className="absolute bottom-[25%] right-[12%] w-6 h-6 border border-accent-yellow/20 rotate-45 animate-float [animation-delay:1s]" />
        <div className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-accent-blue/30 animate-float-fast [animation-delay:0.5s]" />
        <div className="absolute top-16 left-[40%] w-14 h-14 border border-primary-500/10 rounded-full animate-spin-slow [animation-direction:reverse]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-surface-900/70 dark:text-surface-200/70 mb-2"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extrabold mb-4"
        >
          <GradientText from="from-primary-400" via="via-accent-pink" to="to-accent-orange">
            {t('hero.name')}
          </GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold mb-6"
        >
          <GradientText from="from-accent-cyan" to="to-accent-green">
            {t('hero.role')}
          </GradientText>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-surface-900/60 dark:text-surface-200/60"
        >
          {t('hero.description')}
        </motion.p>

        {/* Gradient divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center mb-8"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 via-accent-pink to-accent-orange shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
          >
            {t('hero.cta_projects')}
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-primary-500/30 hover:border-primary-500 text-primary-500 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
          >
            {t('hero.cta_contact')}
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
