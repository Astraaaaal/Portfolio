export default function GradientText({ children, className = '', from = 'from-primary-400', via, to = 'to-accent-cyan' }) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${from} ${via || ''} ${to} ${className}`}>
      {children}
    </span>
  );
}
