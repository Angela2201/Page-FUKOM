import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "principal" | "secundario" | "terciario";

type ButtonProps = {
  variant?: Variant;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center gap-2.5 rounded-12 px-6 py-4 text-xl/6 font-semibold whitespace-nowrap";

const variants: Record<Variant, string> = {
  principal: "bg-secondary text-white hover:bg-secondary-400",
  secundario:
    "bg-white text-neutral-1000 ring-1 ring-inset ring-neutral-1000 hover:bg-neutral-100",
  terciario: "text-neutral-1000 hover:bg-primary-200",
};

export default function Button({
  variant = "principal",
  icon,
  href,
  onClick,
  ariaExpanded,
  ariaControls,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}
