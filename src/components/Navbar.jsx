import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X, Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useDesignTheme } from '../hooks/useDesignTheme';

const sections = ['projects', 'about', 'contact'];

const navThemes = [
  { key: 'flat_design', swatch: 'from-primary-500 to-accent-pink', available: true },
  { key: 'neobrutalism', swatch: 'from-accent-yellow to-accent-orange', available: true },
  { key: 'glassmorphism', swatch: 'from-accent-blue to-accent-cyan', available: true },
  { key: 'retro_synthwave', swatch: 'from-accent-pink to-primary-500', available: true },
  { key: 'minimalisme', swatch: 'from-surface-200 to-surface-100', available: true },
  { key: 'constructivism', swatch: 'from-accent-orange to-surface-900', available: true },
  { key: 'editorial', swatch: 'from-surface-900 to-surface-800', available: true },
  { key: 'hand_drawn', swatch: 'from-accent-yellow to-accent-orange', available: true },
  { key: 'retro', swatch: 'from-accent-orange to-accent-yellow', available: true },
  { key: 'y2k', swatch: 'from-accent-pink to-accent-cyan', available: true },
  { key: 'parallax', swatch: 'from-accent-blue to-primary-500', available: true },
  { key: 'dialup', swatch: 'from-accent-green to-surface-900', available: true },
  { key: 'resonant_stark', swatch: 'from-surface-900 to-surface-950', available: true },
  { key: 'skeuomorphisme', swatch: 'from-surface-200 to-surface-100', available: true },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [dark, toggleTheme] = useTheme();
  const [designTheme, setDesignTheme] = useDesignTheme();
  const location = useLocation();
  const active = useScrollSpy(sections, 200);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const isHome = location.pathname === '/';

  function toggleLang() {
    const next = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  }

  function handleNav(id) {
    setMobileOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  const navLinks = sections.map((id) => {
    const isActive = isHome && active === id;
    return (
      <li key={id}>
        {isHome ? (
          <button
            onClick={() => handleNav(id)}
            className={`relative px-1 py-2 text-sm font-medium transition-colors
              ${isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan'
                : 'text-surface-900 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400'
              }`}
          >
            {t(`nav.${id}`)}
            {isActive && (
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-gradient-to-r from-primary-400 to-accent-cyan" />
            )}
          </button>
        ) : (
          <Link
            to={`/#${id}`}
            className="px-1 py-2 text-sm font-medium text-surface-900 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {t(`nav.${id}`)}
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-surface-950/70 border-b border-surface-200/50 dark:border-surface-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-pink to-accent-orange"
        >
          Portfolio
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full bg-surface-200/60 dark:bg-surface-800/60 hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {i18n.language.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface-200/60 dark:bg-surface-800/60 hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Theme switcher */}
          <div
            className="relative"
            onMouseEnter={() => setThemeOpen(true)}
            onMouseLeave={() => setThemeOpen(false)}
          >
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              className="p-2 rounded-full bg-surface-200/60 dark:bg-surface-800/60 hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors"
              aria-label="Theme"
            >
              <Palette size={16} />
            </button>

            <div
              className={`absolute right-0 top-full pt-2 z-50 transition-all duration-300 ${
                themeOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="w-56 max-h-72 overflow-y-auto theme-scroll rounded-2xl bg-white/95 dark:bg-surface-800/95 backdrop-blur-xl border border-surface-200/50 dark:border-surface-800/50 shadow-xl p-2">
                {navThemes.map(({ key, swatch, available }) => {
                  const isActiveTheme = designTheme === key;
                  return (
                    <div
                      key={key}
                      onClick={() => {
                        if (available) {
                          setDesignTheme(key);
                          setThemeOpen(false);
                        }
                      }}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                        isActiveTheme
                          ? 'bg-primary-500/10'
                          : available
                            ? 'cursor-pointer hover:bg-surface-200/50 dark:hover:bg-surface-800/50'
                            : 'opacity-40 cursor-not-allowed'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded bg-gradient-to-br ${swatch} flex-shrink-0 border border-black/5`}
                      />
                      <span
                        className={`text-[11px] flex-1 truncate ${
                          isActiveTheme ? 'font-bold text-primary-500' : 'font-medium'
                        }`}
                      >
                        {t(`themes.${key}`)}
                      </span>
                      <span
                        className={`text-[9px] flex-shrink-0 ${
                          isActiveTheme
                            ? 'font-bold text-primary-500'
                            : 'text-surface-900/30 dark:text-surface-200/30'
                        }`}
                      >
                        {isActiveTheme ? '✓' : available ? '' : t('themes.coming_soon')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-surface-200/60 dark:bg-surface-800/60"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white/95 dark:bg-surface-950/95 backdrop-blur-xl">
          {navLinks}
        </ul>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </nav>
  );
}
