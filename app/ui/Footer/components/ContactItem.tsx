import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const ContactItem: React.FC<{
  to?: string;
  icon: IconType;
  children: React.ReactNode;
  isLink?: boolean;
  size?: number;
}> = ({ to, icon, children, isLink = true, size = 20 }) => {
  const content = (
    <>
      <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#1b1e29] transition-colors group-hover:text-[#3198ff]">
        {icon({ className: 'text-white group-hover:text-[#3198ff] transition-colors', size: size })}
      </span>
      <span className="transition-colors group-hover:text-[#3198ff]">{children}</span>
    </>
  );

  return (
    <div className="group relative flex items-start text-gray-400">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
      {isLink ? (
        <Link to={to || '#'} target="_blank" className="flex items-center">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};
