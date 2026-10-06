export function H1({ className = "", ...props }) {
  return (
    <h1
      className={`text-[20px] font-semibold font-display text-headline leading-tight tracking-widest sm:text-3xl sm:tracking-wide lg:text-5xl ${className}`}
      {...props}
    />
  );
}

export function H2({ className = "", ...props }) {
  return (
    <h2
       className={`text-[20px] font-semibold font-display text-headline leading-tight tracking-wide sm:text-3xl lg:text-4xl ${className}`}
      {...props}
    />
  );
}

export function H3({ className = "", ...props }) {
  return <h3 className={`text-[13px] font-medium text-body leading-snug sm:text-base ${className}`} {...props} />;
}

export function H4({ className = "", ...props }) {
  return <h4 className={`text-[13px] font-medium text-body leading-snug sm:text-base ${className}`} {...props} />;
}

export function H5({ className = "", ...props }) {
  return <h5 className={`text-[11px] sm:text-sm text-tertiary leading-snug tracking-wide font-normal font-code ${className}`} {...props} />;
}

export function P({ className = "", ...props }) {
  return (
    <p
      className={`text-[12px] sm:text-base text-body leading-relaxed font-normal ${className}`}
      {...props}
    />
  );
}

export function Small({ className = "", ...props }) {
  return (
    <small
      className={`text-[8px] sm:text-xs font-mono font-normal uppercase tracking-widest leading-none ${className}`}
      {...props}
    />
  );
}
