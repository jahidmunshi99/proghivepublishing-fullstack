const SectionHeader = ({
  badge,
  title,
  highlightedText,
  description,
  align,
}) => {
  return (
    <>
      <div className={`mx-auto mb-14 max-w-3xl text-${align}`}>
        {badge && (
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            {badge}
          </span>
        )}

        {title && (
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
            {highlightedText && (
              <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                {highlightedText}
              </span>
            )}
          </h2>
        )}
        {description && (
          <p className="mt-6 mx-auto text-sm sm:text-base md:text-lg leading-7 text-slate-300">
            {description}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
