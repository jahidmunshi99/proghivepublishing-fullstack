import { Icons } from "../shared/Icons.js";

const Icon = ({ name }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  return (
    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <IconComponent size={28} className="text-cyan-300" />
    </div>
  );
};

export default Icon;
