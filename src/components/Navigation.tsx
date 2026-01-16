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
          className={`hover:text-green-300 ${isActive('/') && pathname === '/' ? 'text-green-300' : ''}`}
        >
          /home
        </Link>
        
        <span className="text-green-500">&gt;</span>
        
        <Link 
          href="/about" 
          className={`hover:text-green-300 ${isActive('/about') ? 'text-green-300' : ''}`}
        >
          about
        </Link>
        
        <span className="text-green-500">&gt;</span>
        
        <Link 
          href="/blog" 
          className={`hover:text-green-300 ${isActive('/blog') ? 'text-green-300' : ''}`}
        >
          blog
        </Link>
        
        <span className="text-green-500">&gt;</span>
        
        <Link 
          href="/contact" 
          className={`hover:text-green-300 ${isActive('/contact') ? 'text-green-300' : ''}`}
        >
          contact
        </Link>
        
        <span className="text-green-500">&gt;</span>
        
        <span className="text-green-400">
          {pathname === '/' ? '~' : pathname.split('/').slice(1).join('/')}
        </span>
      </div>
    </nav>
  );
}

