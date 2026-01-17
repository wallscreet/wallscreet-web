import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <pre className="text-center mb-8 text-2sm leading-tight">
{`
▄█▀▀▀▀█ ██     ██  ▄▄▄  ▄▄    ▄▄     ▄▄▄▄  ▄▄▄▄ ▄▄▄▄  ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄▄ 
█  █▀▄  ██ ▄█▄ ██ ██▀██ ██    ██    ███▄▄ ██▀▀▀ ██▄█▄ ██▄▄  ██▄▄    ██   
█▄ ▀▀ █  ▀██▀██▀  ██▀██ ██▄▄▄ ██▄▄▄ ▄▄██▀ ▀████ ██ ██ ██▄▄▄ ██▄▄▄   ██   
 ▀▀▀▀▀                                                                   
`}
        </pre>
        
        <div className="border border-white rounded p-6 mb-8">
          <p className="mb-4 text-green-300">$ whoami</p>
          <p className="ml-4 mb-4">John@wallscreet: ex-banker (20yrs), freelance data analyst and programmer specializing in ai research, integrations and systems development.</p>
          <p className="mb-4 text-green-300">$ cat /etc/motd</p>
          <p className="ml-4">Hello 👋 I'm John, this timeline's primary causal observer keeping a close eye on the evolution of the machines. Welcome to my personal site and blog. All opinions are my own.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/about" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-xl mb-2">$ ./about</h2>
            <p className="text-green-500">Learn more about me and my journey</p>
          </a>
          
          <a href="/blog" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-xl mb-2">$ ./posts</h2>
            <p className="text-green-400">Browse my latest blog posts and thoughts</p>
          </a>
          
          <a href="/contact" className="block border border-white rounded p-6 hover:bg-green-950 transition-colors">
            <h2 className="text-xl mb-2">$ ./contact</h2>
            <p className="text-green-400">Get in touch and start a conversation</p>
          </a>
        </div>

        {/* <div className="flex flex-col items-center">
          <div className="mt-6">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2363336"
              className="block"
              style={{ border: 'none' }}
              title="TryHackMe Profile Badge"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </div>

          <div className="text-center text-green-400">
            <p className="text-sm">$ echo "Last updated: $(date)"</p>
          </div>
        </div> */}
        <div className="grid grid-cols-3 place-items-center mt-6">
          {/* Row 1: Badge */}
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2363336"
            className="col-span-3"
            style={{ border: 'none', width: '330px', height: '100px' }}
            title="TryHackMe Profile Badge"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />

          {/* Row 2: Last updated */}
          <p className="text-sm col-2 text-green-400 text-center">
            $ echo "Last updated: $(date)"
          </p>
        </div>


        
      </div>
    </div>
  );
}

