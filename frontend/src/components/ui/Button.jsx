import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const buttonStyles = {
  base: `
    inline-flex items-center justify-center gap-2
    rounded-md font-medium border border-border border-headline/30 transition-all duration-200 ease-in-out
    disabled:pointer-events-none disabled:opacity-50
    active:scale-[0.92] tracking-wide
    select-none  shade
  `,

  variants: {
    primary:
      "bg-primary text-white hover:bg-primary-700 focus:ring-primary shadow-md",

    secondary:
      "bg-white text-headline hover:bg-secondary-700 focus:ring-secondary shadow-md",

    tertiary:
      "bg-tertiary text-white hover:bg-tertiary-700 focus:ring-tertiary shadow-md",

    outline:
      "border border-border bg-surface text-text-headline hover:bg-muted shadow-md",

    ghost:
      "bg-transparent text-tertiary underline underline-offset-4 decoration-2 hover:bg-muted border-0 no-focus",

    danger: "bg-delete text-white hover:bg-error/90 focus:ring-error",
  },

  sizes: {
    xs: "h-6 px-3 text-[8px] sm:h-10 sm:px-4 sm:text-sm",
    sm: "h-7 px-4 text-[11px] sm:h-11 sm:px-5 sm:text-base",
    md: "h-8 px-5 text-[13px] sm:h-12 sm:px-6 sm:text-base",
    lg: "h-12 px-6 text-lg",
    xl: "h-14 px-8 text-xl",

    icon: "h-10 w-10 p-0",
  },
};

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />

    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",

      type = "button",

      disabled = false,
      loading = false,

      fullWidth = false,

      leftIcon,
      rightIcon,

      className = "",

      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={clsx(
          buttonStyles.base,
          buttonStyles.variants[variant],
          buttonStyles.sizes[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}

            {children}

            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,

  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "outline",
    "ghost",
    "danger",
  ]),

  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "icon"]),

  type: PropTypes.oneOf(["button", "submit", "reset"]),

  disabled: PropTypes.bool,

  loading: PropTypes.bool,

  fullWidth: PropTypes.bool,

  leftIcon: PropTypes.node,

  rightIcon: PropTypes.node,

  className: PropTypes.string,

  onClick: PropTypes.func,
};

export default Button;
