import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const SocialLink = ({
  to,
  icon,
  size = '16',
}: {
  to: string;
  icon: IconType;
  size?: string;
}) => (
  <Link
    to={to}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center rounded-full border-2 border-[#dadada] bg-[#1b1e29] p-2 transition-colors hover:border-[#3198ff] hover:bg-[rgba(49,152,255,0.1)]"
  >
    {icon({ className: 'text-white group-hover:fill-[#3198ff] transition-colors', size })}
  </Link>
);
