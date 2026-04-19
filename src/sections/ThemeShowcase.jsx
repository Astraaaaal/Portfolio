import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import { useDesignTheme } from '../hooks/useDesignTheme';

const themes = [
  { key: 'flat_design', gradient: 'linear-gradient(135deg, #7c3aed, #ec4899, #f97316)', available: true },
  { key: 'glassmorphism', gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4, #10b981)', available: true },
  { key: 'neobrutalism', gradient: 'linear-gradient(135deg, #eab308, #f59e0b)', available: true },
  { key: 'retro_synthwave', gradient: 'linear-gradient(135deg, #0c0020, #4c1d95, #ec4899)', available: true },
  { key: 'minimalisme', gradient: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1)', available: true },
  { key: 'constructivism', gradient: 'linear-gradient(135deg, #dc2626, #1e1b2e, #fafafa)', available: true },
  { key: 'editorial', gradient: 'linear-gradient(135deg, #1e1b2e, #374151, #6b7280)', available: true },
  { key: 'hand_drawn', gradient: 'linear-gradient(135deg, #fef3c7, #fde68a, #fbbf24)', available: true },
  { key: 'retro', gradient: 'linear-gradient(135deg, #ea580c, #f97316, #fbbf24)', available: true },
  { key: 'y2k', gradient: 'linear-gradient(135deg, #ec4899, #a855f7, #06b6d4)', available: true },
  { key: 'parallax', gradient: 'linear-gradient(135deg, #0ea5e9, #3b82f6, #6366f1)', available: true },
  { key: 'dialup', gradient: 'linear-gradient(135deg, #065f46, #064e3b, #022c22)', available: true },
  { key: 'resonant_stark', gradient: 'linear-gradient(135deg, #09090b, #18181b, #27272a)', available: true },
  { key: 'skeuomorphisme', gradient: 'linear-gradient(145deg, #d4d4d8, #a1a1aa, #d4d4d8)', available: true },
];

/* ---- Mini preview mockups ---- */
function FlatPreview() {
  return (
    <div className="h-full bg-[#fafafa] relative overflow-hidden">
      <div className="absolute top-3 left-4 w-16 h-16 bg-[#6d28d9]/25 rounded-full blur-xl" />
      <div className="absolute top-8 right-6 w-10 h-10 bg-[#ec4899]/25 rounded-full blur-xl" />
      <div className="relative pt-10 text-center px-5">
        <div className="h-3 w-24 mx-auto rounded-full bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#f97316] mb-2" />
        <div className="h-2 w-18 mx-auto rounded-full bg-gradient-to-r from-[#06b6d4] to-[#10b981] mb-5" />
        <div className="h-1 w-32 mx-auto rounded-full bg-[#e4e4e7] mb-1.5" />
        <div className="h-1 w-24 mx-auto rounded-full bg-[#e4e4e7]" />
      </div>
      <div className="flex gap-2 mt-6 px-5">
        <div className="flex-1 h-12 rounded-xl bg-white border border-[#e4e4e7]/60 shadow-sm" />
        <div className="flex-1 h-12 rounded-xl bg-white border border-[#e4e4e7]/60 shadow-sm" />
      </div>
    </div>
  );
}

function NeoPreview() {
  return (
    <div className="h-full bg-[#fefce8] relative overflow-hidden">
      <div className="relative pt-8 text-center px-5">
        <div className="h-3.5 w-28 mx-auto bg-black mb-2" style={{ borderRadius: 2 }} />
        <div className="h-2 w-18 mx-auto bg-[#e91e63] mb-5" style={{ borderRadius: 2 }} />
        <div className="h-1 w-32 mx-auto bg-black/15 mb-1.5" />
        <div className="h-1 w-24 mx-auto bg-black/15" />
      </div>
      <div className="flex gap-3 mt-5 px-5">
        <div
          className="flex-1 h-12 bg-white border-[2.5px] border-black"
          style={{ boxShadow: '3px 3px 0 black', borderRadius: 6 }}
        />
        <div
          className="flex-1 h-12 bg-[#ffd600] border-[2.5px] border-black"
          style={{ boxShadow: '3px 3px 0 black', borderRadius: 6 }}
        />
      </div>
    </div>
  );
}

function GlassPreview() {
  return (
    <div className="h-full bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#22d3ee] relative overflow-hidden">
      <div className="absolute top-4 left-5 w-14 h-14 bg-white/20 rounded-full blur-lg" />
      <div className="absolute bottom-2 right-4 w-20 h-20 bg-[#f472b6]/20 rounded-full blur-lg" />
      <div className="absolute inset-3 rounded-2xl bg-white/12 backdrop-blur-sm border border-white/25 p-4">
        <div className="h-2.5 w-20 rounded-full bg-white/40 mb-2" />
        <div className="h-1.5 w-14 rounded-full bg-white/25 mb-4" />
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded-xl bg-white/10 border border-white/15" />
          <div className="flex-1 h-8 rounded-xl bg-white/10 border border-white/15" />
        </div>
      </div>
    </div>
  );
}

function SynthwavePreview() {
  return (
    <div className="h-full bg-[#0a0015] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,149,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,149,0.12)_1px,transparent_1px)] bg-[size:12px_12px]" />
      {/* Neon sun */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-t-full bg-gradient-to-t from-[#ff8c00] to-[#ff2d95] opacity-60" />
      <div className="relative pt-6 text-center px-4">
        <div
          className="h-3 w-20 mx-auto bg-[#ff6ec7] mb-2"
          style={{ boxShadow: '0 0 8px #ff6ec7', borderRadius: 1 }}
        />
        <div
          className="h-2 w-14 mx-auto bg-[#00f0ff] mb-4"
          style={{ boxShadow: '0 0 8px #00f0ff', borderRadius: 1 }}
        />
        <div className="h-1 w-28 mx-auto bg-white/10 mb-1" />
      </div>
    </div>
  );
}

function DialupPreview() {
  return (
    <div className="h-full bg-[#c0c0c0] relative overflow-hidden">
      {/* Title bar */}
      <div className="h-5 bg-[#000080] flex items-center px-1.5">
        <span className="text-[7px] text-white font-bold">Portfolio.exe</span>
      </div>
      <div className="p-2.5">
        <div
          className="w-full h-5 bg-[#d4d0c8] mb-2"
          style={{ borderTop: '2px solid #fff', borderLeft: '2px solid #fff', borderBottom: '2px solid #808080', borderRight: '2px solid #808080' }}
        />
        <div className="flex gap-2">
          <div
            className="flex-1 h-8 bg-[#d4d0c8]"
            style={{ borderTop: '2px solid #fff', borderLeft: '2px solid #fff', borderBottom: '2px solid #808080', borderRight: '2px solid #808080' }}
          />
          <div
            className="flex-1 h-8 bg-[#d4d0c8]"
            style={{ borderTop: '2px solid #fff', borderLeft: '2px solid #fff', borderBottom: '2px solid #808080', borderRight: '2px solid #808080' }}
          />
        </div>
      </div>
    </div>
  );
}

function MinimalPreview() {
  return (
    <div className="h-full bg-white relative overflow-hidden">
      <div className="relative pt-10 text-center px-5">
        <div className="h-3 w-24 mx-auto bg-[#171717] mb-2" />
        <div className="h-1.5 w-16 mx-auto bg-[#a3a3a3] mb-5" />
        <div className="h-0.5 w-10 mx-auto bg-[#e5e5e5] mb-4" />
        <div className="h-1 w-32 mx-auto bg-[#e5e5e5] mb-1.5" />
        <div className="h-1 w-24 mx-auto bg-[#e5e5e5]" />
      </div>
      <div className="flex gap-3 mt-5 px-5">
        <div className="flex-1 h-10 bg-[#171717]" />
        <div className="flex-1 h-10 border border-[#e5e5e5]" />
      </div>
    </div>
  );
}

function DefaultPreview({ gradient }) {
  return (
    <div className="h-full relative overflow-hidden" style={{ background: gradient }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
          Preview
        </span>
      </div>
    </div>
  );
}

function ConstructivismPreview() {
  return (
    <div className="h-full bg-[#fef2f2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-full bg-[#dc2626]" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black" />
      <div className="relative pt-6 pl-4">
        <div className="h-4 w-20 bg-[#dc2626] mb-2" />
        <div className="h-2 w-14 bg-black mb-3" />
        <div className="w-10 h-10 border-3 border-black rotate-45 ml-2" />
      </div>
    </div>
  );
}

function EditorialPreview() {
  return (
    <div className="h-full bg-[#faf9f7] relative overflow-hidden px-5 pt-8">
      <div className="h-4 w-28 mx-auto bg-[#1c1917] mb-1" style={{ fontFamily: 'serif' }} />
      <div className="h-0.5 w-12 mx-auto bg-[#d6d3d1] mb-3" />
      <div className="h-1 w-32 mx-auto bg-[#d6d3d1] mb-1" />
      <div className="h-1 w-28 mx-auto bg-[#d6d3d1] mb-1" />
      <div className="h-1 w-24 mx-auto bg-[#d6d3d1] mb-4" />
      <div className="flex gap-2">
        <div className="flex-1 h-10 bg-[#991b1b]" />
        <div className="flex-1 h-10 border border-[#1c1917]" />
      </div>
    </div>
  );
}

function HandDrawnPreview() {
  return (
    <div className="h-full bg-[#fefcf3] relative overflow-hidden px-4 pt-6">
      <div className="h-3 w-20 mx-auto bg-[#b45309] mb-2" style={{ borderRadius: '8px 4px 10px 3px' }} />
      <div className="h-1.5 w-14 mx-auto bg-[#a3a3a3] mb-4" style={{ borderRadius: '3px 8px 4px 6px' }} />
      <div className="flex gap-2">
        <div className="flex-1 h-10 bg-[#fdf6e3] border-2 border-dashed border-[#a3a3a3]" style={{ borderRadius: '6px 10px 4px 12px' }} />
        <div className="flex-1 h-10 bg-[#fdf6e3] border-2 border-dashed border-[#a3a3a3]" style={{ borderRadius: '10px 4px 8px 6px' }} />
      </div>
    </div>
  );
}

function RetroPreview() {
  return (
    <div className="h-full bg-[#fdf8ef] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'repeating-conic-gradient(#9a3412 0% 25%, transparent 0% 50%) 0 0 / 8px 8px' }} />
      <div className="relative pt-8 text-center px-4">
        <div className="h-3 w-24 mx-auto bg-[#9a3412] mb-2" />
        <div className="h-1.5 w-16 mx-auto bg-[#a16207] mb-4" />
        <div className="h-1 w-28 mx-auto bg-[#a8a29e] mb-1" />
      </div>
      <div className="flex gap-2 mt-4 px-4">
        <div className="flex-1 h-10 bg-[#9a3412] rounded-sm" />
        <div className="flex-1 h-10 border border-[#a8a29e] rounded-sm" />
      </div>
    </div>
  );
}

function Y2kPreview() {
  return (
    <div className="h-full bg-gradient-to-br from-[#fdf4ff] via-[#fae8ff] to-[#e9d5ff] relative overflow-hidden">
      <div className="absolute top-3 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#d946ef]/30 to-[#22d3ee]/30 blur-md" />
      <div className="absolute bottom-2 left-3 w-8 h-8 rounded-full bg-[#f472b6]/20 blur-sm" />
      <div className="relative pt-8 text-center px-4">
        <div className="h-3 w-20 mx-auto rounded-full bg-gradient-to-r from-[#d946ef] to-[#22d3ee] mb-2" />
        <div className="h-1.5 w-14 mx-auto rounded-full bg-[#e9d5ff] mb-4" />
      </div>
      <div className="flex gap-2 mt-3 px-4">
        <div className="flex-1 h-10 rounded-2xl bg-white/50 border border-[#e9d5ff]" />
        <div className="flex-1 h-10 rounded-2xl bg-white/50 border border-[#e9d5ff]" />
      </div>
    </div>
  );
}

function ParallaxPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] relative overflow-hidden">
      <div className="absolute top-2 left-4 w-8 h-8 rounded-full bg-[#60a5fa]/20 blur-lg" />
      <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-[#f472b6]/15 blur-md" />
      <div className="relative pt-10 text-center px-5">
        <div className="h-3 w-24 mx-auto rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mb-2" />
        <div className="h-1.5 w-16 mx-auto rounded-full bg-[#bfdbfe] mb-4" />
      </div>
      <div className="flex gap-2 mt-4 px-5">
        <div className="flex-1 h-10 rounded-xl bg-white/60 border border-[#bfdbfe]/50" />
        <div className="flex-1 h-10 rounded-xl bg-white/60 border border-[#bfdbfe]/50" />
      </div>
    </div>
  );
}

function ResonantStarkPreview() {
  return (
    <div className="h-full bg-white relative overflow-hidden px-5 pt-8">
      <div className="h-4 w-28 mx-auto bg-black mb-2" />
      <div className="h-2 w-8 mx-auto bg-black mb-4" />
      <div className="h-1 w-32 mx-auto bg-black/10 mb-1" />
      <div className="h-1 w-24 mx-auto bg-black/10 mb-4" />
      <div className="flex gap-3">
        <div className="flex-1 h-10 bg-black" />
        <div className="flex-1 h-10 border-2 border-black" />
      </div>
    </div>
  );
}

function SkeuomorphismePreview() {
  return (
    <div className="h-full relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ede5db, #ddd5cb)' }}>
      <div className="pt-8 px-4 text-center">
        <div className="h-3 w-24 mx-auto bg-[#2c2520] mb-2 rounded-sm" />
        <div className="h-1.5 w-16 mx-auto bg-[#c4b5a5] mb-4 rounded-sm" />
      </div>
      <div className="flex gap-2 px-4">
        <div className="flex-1 h-10 rounded-lg" style={{ background: 'linear-gradient(180deg, #6366f1, #4f46e5)', boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)' }} />
        <div className="flex-1 h-10 rounded-lg" style={{ background: 'linear-gradient(180deg, #fff, #f5f0eb)', border: '1px solid #c4b5a5', boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)' }} />
      </div>
    </div>
  );
}

const previewMap = {
  flat_design: FlatPreview,
  neobrutalism: NeoPreview,
  glassmorphism: GlassPreview,
  retro_synthwave: SynthwavePreview,
  dialup: DialupPreview,
  minimalisme: MinimalPreview,
  constructivism: ConstructivismPreview,
  editorial: EditorialPreview,
  hand_drawn: HandDrawnPreview,
  retro: RetroPreview,
  y2k: Y2kPreview,
  parallax: ParallaxPreview,
  resonant_stark: ResonantStarkPreview,
  skeuomorphisme: SkeuomorphismePreview,
};

function ThemePreview({ themeKey, gradient }) {
  const Component = previewMap[themeKey];
  return Component ? <Component /> : <DefaultPreview gradient={gradient} />;
}

/* ---- Decorations for specific theme cards ---- */
function CardDecoration({ themeKey }) {
  if (themeKey === 'glassmorphism')
    return <div className="absolute inset-2 rounded-lg bg-white/15 backdrop-blur-[2px] border border-white/25" />;
  if (themeKey === 'neobrutalism')
    return (
      <>
        <div className="absolute top-2 left-2 w-12 h-4 rounded bg-white border-2 border-black" style={{ boxShadow: '2px 2px 0 black' }} />
        <div className="absolute bottom-2 right-2 w-5 h-5 rounded bg-[#ec4899] border-2 border-black" style={{ boxShadow: '2px 2px 0 black' }} />
      </>
    );
  if (themeKey === 'retro_synthwave')
    return <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.2)_1px,transparent_1px)] bg-[size:8px_8px]" />;
  if (themeKey === 'hand_drawn')
    return (
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 176 80">
        <path d="M10 35 Q44 15 88 40 Q132 65 166 30" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="55" r="8" fill="none" stroke="#000" strokeWidth="1.5" />
      </svg>
    );
  if (themeKey === 'dialup')
    return <div className="absolute top-2 left-3 text-[9px] font-mono text-green-400/80 leading-tight">C:\&gt; dir<br />C:\&gt; _</div>;
  if (themeKey === 'y2k')
    return (
      <>
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white/40" />
        <div className="absolute bottom-2 left-3 w-8 h-3 rounded-full bg-white/20" />
      </>
    );
  if (themeKey === 'minimalisme')
    return <div className="absolute inset-3 border border-[#e5e5e5]" />;
  return null;
}

/* ---- Section ---- */
export default function ThemeShowcase() {
  const { t } = useTranslation();
  const [designTheme, setDesignTheme] = useDesignTheme();

  return (
    <section className="relative py-16 sm:py-24 overflow-visible">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-accent-pink/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('themes.title')} subtitle={t('themes.subtitle')} />
      </div>

      <div className="relative w-full overflow-x-clip overflow-y-visible">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-surface-50 dark:from-surface-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-surface-50 dark:from-surface-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...themes, ...themes].map(({ key, gradient, available }, i) => {
            const isActive = designTheme === key;
            return (
              <div key={`${key}-${i}`} className="preview-trigger relative flex-shrink-0">
                <div className="preview-circle absolute bottom-full left-1/2 -translate-x-1/2 z-30 pb-3">
                  <div className="w-60 h-44 rounded-xl overflow-hidden shadow-2xl border-2 border-surface-200/50 dark:border-surface-800/50">
                    <ThemePreview themeKey={key} gradient={gradient} />
                  </div>
                </div>

                <div
                  onClick={() => available && setDesignTheme(key)}
                  className={`w-44 rounded-xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? 'border-primary-500/50 shadow-lg shadow-primary-500/10 ring-2 ring-primary-500/30'
                      : 'border-surface-200/50 dark:border-surface-800/50'
                  } ${available ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <div className="h-20 relative overflow-hidden" style={{ background: gradient }}>
                    <CardDecoration themeKey={key} />
                  </div>
                  <div className="px-3 py-2.5 bg-white dark:bg-surface-800">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] font-bold truncate">
                        {t(`themes.${key}`)}
                      </span>
                      {isActive ? (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r from-primary-500 to-accent-cyan text-white flex-shrink-0">
                          {t('themes.active')}
                        </span>
                      ) : available ? (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-primary-500/10 text-primary-500 flex-shrink-0">
                          {t('themes.available')}
                        </span>
                      ) : (
                        <span className="text-[9px] text-surface-900/30 dark:text-surface-200/30 flex-shrink-0">
                          {t('themes.coming_soon')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
