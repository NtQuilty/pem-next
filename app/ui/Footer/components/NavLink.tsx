import { Link } from 'react-router-dom';

export const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <div className="group relative">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
    <Link to={to} className="block text-gray-400 transition-colors group-hover:text-[#3198ff]">
      {children}
    </Link>
  </div>
);
