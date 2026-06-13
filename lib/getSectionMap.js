export const getSectionMap = (sections) => {
  return Object.fromEntries(
    sections.map((section) => [section.sectionKey, section]),
  );
};
