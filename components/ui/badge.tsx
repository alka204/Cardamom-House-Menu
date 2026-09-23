import React from "react";

export type BadgeVariant = "brand" | "open" | "closed" | "muted" | "tag" | "soldOut";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "tag", children, className = "", ...props }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    brand: "bg-[#EFE4D3] text-[#B45309] font-semibold",
    open: "bg-[#EFE4D3] text-[#2B211B] font-semibold",
    closed: "bg-[#EFE4D3] text-[#756A61] font-semibold",
    muted: "bg-[#EFE4D3] text-[#756A61] font-medium",
    tag: "text-[#B45309] text-[10px] font-semibold tracking-[0.12em] uppercase border border-[#B45309]/30 px-1.5 py-0.5 rounded-sm bg-[#EFE4D3]/40",
    soldOut: "text-[#756A61] text-[10px] font-semibold tracking-[0.12em] uppercase bg-[#EFE4D3] px-2 py-0.5 rounded-sm border border-[#E5DACB]",
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-sans transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

