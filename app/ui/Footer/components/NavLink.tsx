import Link from 'next/link';

export const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <div className="group relative">
    <Link 
      href={to} 
      className="block text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  </div>
);
