/* Theme-specific decorative sub-components rendered conditionally in sections */

export function NeoBlocks() {
  return (
    <>
      <div className="absolute top-20 left-0 w-10 h-40 bg-accent-yellow opacity-40 z-0" style={{ borderRight: '3px solid #000' }} />
      <div className="absolute bottom-20 right-0 w-16 h-16 bg-primary-500 opacity-35 z-0" style={{ borderLeft: '3px solid #000', borderTop: '3px solid #000' }} />
    </>
  );
}

export function SynthwaveGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: 'linear-gradient(rgba(255,45,149,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,149,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(200px) rotateX(40deg)',
          transformOrigin: 'bottom',
        }}
      />
      {/* Neon sun */}
      <div className="absolute bottom-[45%] left-1/2 -translate-x-1/2 w-32 h-16 rounded-t-full bg-gradient-to-t from-[#ff8c00] to-[#ff2d95] opacity-30 blur-sm" />
    </div>
  );
}

export function ConstructivistStripe() {
  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute -top-20 -left-20 w-[200px] h-[600px] bg-[#dc2626] opacity-15"
        style={{ transform: 'rotate(-25deg)' }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-24 h-24 border-[6px] border-[#dc2626] opacity-20 rounded-full"
      />
    </div>
  );
}

export function DoodleElements() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Squiggly line top-right */}
      <svg className="absolute top-24 right-[10%] w-24 h-12 opacity-20" viewBox="0 0 100 40">
        <path d="M5 20 Q15 5 25 20 Q35 35 45 20 Q55 5 65 20 Q75 35 85 20 Q95 5 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Star bottom-left */}
      <svg className="absolute bottom-[30%] left-[8%] w-8 h-8 opacity-15" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" fill="currentColor" />
      </svg>
      {/* Small circle */}
      <svg className="absolute top-[40%] left-[15%] w-6 h-6 opacity-15" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      {/* Arrow right */}
      <svg className="absolute bottom-[20%] right-[15%] w-10 h-6 opacity-15" viewBox="0 0 40 20">
        <path d="M2 10 L30 10 M25 4 L32 10 L25 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function EditorialMark() {
  return (
    <div className="absolute top-24 right-[10%] -z-10 pointer-events-none opacity-20">
      <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-surface-900 dark:text-surface-200">
        Portfolio — {new Date().getFullYear()}
      </div>
    </div>
  );
}

export function Win95Window({ title = 'Portfolio.exe', children }) {
  return (
    <div className="w-full max-w-3xl mx-auto" style={{ border: '2px outset #d4d0c8' }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-1.5 py-0.5 bg-[#000080] select-none">
        <span className="text-[11px] font-bold text-white" style={{ fontFamily: 'Courier New, monospace' }}>
          {title}
        </span>
        <div className="flex gap-px">
          {['_', '□', '✕'].map((btn) => (
            <div
              key={btn}
              className="w-4 h-4 flex items-center justify-center text-[9px] bg-[#c0c0c0]"
              style={{ border: '2px outset #d4d0c8' }}
            >
              {btn}
            </div>
          ))}
        </div>
      </div>
      {/* Content area */}
      <div className="bg-[#c0c0c0] p-4">
        {children}
      </div>
    </div>
  );
}

/* Section bar variants */
export function NeonBar() {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="h-1 w-20"
        style={{ background: '#ff2d95', boxShadow: '0 0 8px #ff2d95, 0 0 16px #ff2d95' }}
      />
    </div>
  );
}

export function WavyBar() {
  return (
    <div className="flex justify-center mb-4">
      <svg width="80" height="8" viewBox="0 0 80 8" className="text-surface-900/30 dark:text-surface-200/30">
        <path d="M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function DoubleRule() {
  return (
    <div className="flex justify-center mb-4 gap-1">
      <div className="flex flex-col gap-1 items-center">
        <div className="h-px w-24 bg-surface-900/20 dark:bg-surface-200/20" />
        <div className="h-px w-16 bg-surface-900/15 dark:bg-surface-200/15" />
      </div>
    </div>
  );
}

export function BoldRedBar() {
  return (
    <div className="flex justify-center mb-4">
      <div className="h-2 w-24 bg-[#dc2626]" />
    </div>
  );
}

/* About dot variants */
export function TriangleDot({ color }) {
  return (
    <div
      className="w-0 h-0"
      style={{
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: `14px solid ${color}`,
      }}
    />
  );
}

export function DoodleDot({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" fill={color} stroke={color} strokeWidth="1.5" opacity="0.9" />
      <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
    </svg>
  );
}
