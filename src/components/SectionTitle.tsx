import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold">
          {subtitle}
        </p>
      )}

      <h2 className="relative inline-block text-brand-green text-3xl md:text-4xl">
        {title}

        {/* underline */}
        <span
          className={`
            block h-[3px] w-20 bg-brand-gold mt-4
            ${centered ? "mx-auto" : "ml-0"}
          `}
        />
      </h2>
    </div>
  );
};

export default SectionTitle;
