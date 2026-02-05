"use client"

import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const [lastUpdated, setLastUpdated] = useState('Loading...');

  useEffect(() => {
    async function fetchLastUpdate() {
      const repo = 'wallscreet/wallscreet-web';
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          const date = new Date(data[0].commit.author.date);
          setLastUpdated(`Last updated: ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`);
        } else {
          setLastUpdated('Last updated: Unknown');
        }
      } catch (error) {
        setLastUpdated('Last updated: Unknown');
      }
    }
    fetchLastUpdate();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <pre className="hidden md:block text-center mb-8 text-2sm leading-tight">
{`
▄█▀▀▀▀█ ██     ██  ▄▄▄  ▄▄    ▄▄     ▄▄▄▄  ▄▄▄▄ ▄▄▄▄  ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄▄ 
█  █▀▄  ██ ▄█▄ ██ ██▀██ ██    ██    ███▄▄ ██▀▀▀ ██▄█▄ ██▄▄  ██▄▄    ██   
█▄ ▀▀ █  ▀██▀██▀  ██▀██ ██▄▄▄ ██▄▄▄ ▄▄██▀ ▀████ ██ ██ ██▄▄▄ ██▄▄▄   ██   
 ▀▀▀▀▀                                                                   
`}
        </pre>
        <pre className="md:hidden text-center mb-8 text-2sm leading-tight">
{`
▄█▀▀▀▀█ ██     ██ 
█  █▀▄  ██ ▄█▄ ██ 
█▄ ▀▀ █  ▀██▀██▀  
 ▀▀▀▀▀            
`}
        </pre>
        
        <div className="border border-white rounded p-6 mb-8">
          <p className="mb-4 text-green-300">$ whoami</p>
          <p className="ml-4 mb-4">John@wallscreet: ex-banker (20yrs), freelance data analyst and programmer specializing in ai integrations and systems development.</p>
          <p className="mb-4 text-green-300">$ cat /etc/motd</p>
          <p className="ml-4">Hello 👋 I'm John, this timeline's primary causal observer keeping a close eye on the evolution of the machines while actively searching for AGI in latent space. Welcome to my personal site and blog. All opinions are my own.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/projects" className="md:col-span-3 block border border-[#FF6600] rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-lg mb-2 font-bold text-green-300">$ cd ./projects</h2>
            <p className="text-green-400">Explore my projects spanning multiple domains and languages.</p>
          </a>
          <a href="/about" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-lg mb-2 font-bold text-green-300">$ cd ./about</h2>
            <p className="text-green-500">Learn more about me and my journey</p>
          </a>
          <a href="/blog" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-lg mb-2 font-bold text-green-300">$ cd ./posts</h2>
            <p className="text-green-400">Browse my latest blog posts and thoughts</p>
          </a>
          <a href="/contact" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-lg mb-2 font-bold text-green-300">$ cd ./contact</h2>
            <p className="text-green-400">Get in touch and start a conversation</p>
          </a>
        </div>

        <div className="mt-6 mb-6 flex justify-center gap-6 text-gray-400">
          {/* GitHub */}
          <a
            href="https://github.com/wallscreet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-300 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.192.694.8.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/wallscreet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-green-300 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M18.244 2H21.78l-7.73 8.84L23 22h-7.17l-5.62-6.94L4.02 22H.48l8.27-9.45L1 2h7.35l5.08 6.28L18.244 2zm-1.26 18h1.96L7.43 4H5.34l11.644 16z" />
            </svg>
          </a>

          {/* Bluesky */}
          <a
            href="https://bsky.app/profile/wallscreet.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
            className="hover:text-green-300 transition-colors"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8"  // adjust size as needed; scales nicely
            >
              <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948z"/>
            </svg>
          </a>
        </div>

        <p className="text-sm col-2 text-green-400 text-center">
          $ echo "{lastUpdated}"
        </p>

      </div>
    </div>
  );
}

