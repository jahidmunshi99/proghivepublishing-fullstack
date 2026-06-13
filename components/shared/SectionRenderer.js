export const SectionRenderer = ({ config, Component }) => {
  if (!config.settings?.isVisible) {
    return null;
  }

  return <Component sectionInfo={config.header} />;
};
