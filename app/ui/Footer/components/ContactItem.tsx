import { IconType } from 'react-icons';
import Link from 'next/link';

export const ContactItem: React.FC<{
  to?: string;
  icon: IconType;
  children: React.ReactNode;
  isLink?: boolean;
  size?: number;
}> = ({ to, icon, children, isLink = true, size = 16 }) => {
  const content = (
    <>
      <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800/50 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:shadow-lg group-hover:shadow-blue-500/20">
        {icon({ className: 'text-gray-400 transition-colors duration-300 group-hover:text-blue-400', size: size })}
      </span>
      <span className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{children}</span>
    </>
  );

  return (
    <div className="group relative flex items-center">
      {isLink ? (
        <Link href={to || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center transition-transform duration-300 hover:translate-x-1">
          {content}
        </Link>
      ) : (
        <div className="flex items-center">
          {content}
        </div>
      )}
    </div>
  );
};
