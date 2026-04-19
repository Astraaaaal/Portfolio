import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Astraaaaal', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/swann-patissier-222650316', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/swann_pat/', label: 'Instagram' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/8 via-accent-pink/3 to-transparent dark:from-primary-500/15 dark:via-accent-pink/5" />
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-surface-900/60 dark:text-surface-200/60">
            © {year} Portfolio. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full text-surface-900/50 dark:text-surface-200/50 hover:text-primary-500 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/10 hover:scale-110 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="flex items-center gap-1 text-sm text-surface-900/60 dark:text-surface-200/60">
            {t('footer.made_with')} <Heart size={14} className="text-accent-pink animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
