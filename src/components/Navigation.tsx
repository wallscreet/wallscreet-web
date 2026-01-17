'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="mb-8 border border-white rounded p-4">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-green-500">$ cd</span>
        
        <Link 
          href="/" 
          className={`hover:text-green-300 ${isActive('/') && pathname === '/' ? 'text-[#FF6600]' : ''}`}
        >
          home
        </Link>
        
        <span className="text-green-500">&#124;</span>
        
        <Link 
          href="/about" 
          className={`hover:text-green-300 ${isActive('/about') ? 'text-[#FF6600]' : ''}`}
        >
          about
        </Link>
        
        <span className="text-green-500">&#124;</span>
        
        <Link 
          href="/blog" 
          className={`hover:text-green-300 ${isActive('/blog') ? 'text-[#FF6600]' : ''}`}
        >
          blog
        </Link>
        
        <span className="text-green-500">&#124;</span>

        <Link 
          href="/projects" 
          className={`hover:text-green-300 ${isActive('/projects') ? 'text-[#FF6600]' : ''}`}
        >
          projects
        </Link>
        
        <span className="text-green-500">&#124;</span>
        
        <Link 
          href="/contact" 
          className={`hover:text-green-300 ${isActive('/contact') ? 'text-[#FF6600]' : ''}`}
        >
          contact
        </Link>
        
        <span className="text-green-500">-&gt;</span>
        
        <span className="text-white">
          {pathname === '/' ? '~' : pathname.split('/').slice(1).join('/')}
        </span>
      </div>
    </nav>
  );
}

