import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, Check, FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../components/SocialIcons';
import SectionTitle from '../components/SectionTitle';

const EMAIL = 'swannpatissier@gmail.com';

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Astraaaaal', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/swann-patissier-222650316', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/swann_pat/', label: 'Instagram' },
];

export default function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-cyan/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-surface-900/60 dark:text-surface-200/60 mb-12"
        >
          {t('contact.text')}
        </motion.p>

        {/* Email card with copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative max-w-lg mx-auto mb-14"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/15 via-accent-pink/15 to-accent-cyan/15 blur-xl -z-10" />
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/80 dark:bg-surface-800/50 backdrop-blur-xl border border-surface-200/50 dark:border-surface-800/50 shadow-lg dark:shadow-none">
            <Mail size={18} className="text-primary-500 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium flex-1 truncate select-all">
              {EMAIL}
            </span>
            <button
              onClick={copyEmail}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 flex-shrink-0 ${copied
                  ? 'bg-accent-green shadow-lg shadow-accent-green/25'
                  : 'bg-gradient-to-r from-primary-500 to-accent-cyan hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25'
                }`}
            >
              {copied ? (
                <>
                  <Check size={13} />
                  {t('contact.copied')}
                </>
              ) : (
                <>
                  <Copy size={13} />
                  {t('contact.copy')}
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social links — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white dark:bg-surface-800 border border-surface-200/50 dark:border-surface-800/50 shadow-sm dark:shadow-none hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 hover:scale-105 transition-all duration-300"
            >
              <Icon
                size={20}
                className="text-surface-900/60 dark:text-surface-200/60 group-hover:text-primary-500 transition-colors"
              />
              <span className="text-sm font-semibold group-hover:text-primary-500 transition-colors">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="/cv-swann-patissier.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-primary-500/30 hover:border-primary-500 text-primary-500 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
          >
            <FileText size={16} />
            {t('contact.cv')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
