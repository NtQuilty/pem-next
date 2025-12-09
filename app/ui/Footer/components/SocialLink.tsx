import { IconType } from 'react-icons';
import Link from 'next/link';

export const SocialLink = ({
  to,
  icon,
  size = '20',
}: {
  to: string;
  icon: IconType;
  size?: string;
}) => (
  <Link
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-700 bg-[#1b1e29] transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
  >
    {icon({ className: 'relative z-10 text-gray-300 transition-colors duration-300 group-hover:text-blue-400', size })}
    <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:opacity-100"></div>
  </Link>
);
