import React from "react";

interface SectionHeadingProps {
  number?: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
}

export function SectionHeading({
  number,
  title,
  description,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 border-b-2 border-brand-700/20 pb-4 ${className}`}>
      {number && (
        <span className="block text-xs font-sans font-bold tracking-widest text-brand-700 uppercase mb-1">
          {number}
        </span>
      )}
      <h2
        id={id}
        className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-warm-950 uppercase"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-warm-700 font-sans italic max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
