import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-white rounded p-6 mb-6">
          
          <div className="space-y-4">
            <div>
              <p className="text-green-300">$ grep -i name ~/.profile</p>
              <p className="ml-4">@wallscreet (John)</p>
            </div>

            <div>
              <p className="text-green-300">$ cat ~/.description</p>
              <p className="ml-4 whitespace-pre-line">
{`Freelance full-stack with a focus on AI systems integrations and business intelligence. I write custom context frameworks and ai experience applications.

Technologies I like to work with:
- Python
- Fortran
- C++
- JavaScript/TypeScript
- React/Next.js
- Linux`}
              </p>
            </div>

            <div>
              <p className="text-green-300">$ history | grep "experience"</p>
              <p className="ml-4 whitespace-pre-line">
{`[2023] Freelance data analysis and AI Systems Programmer
[2019] Lending Program Director - Regional Credit Union  
[2014] Retail Credit and Wholesale Portfolio Manager - Start-up
[2004] Mortgage Banking and Originations`}
              </p>
            </div>

            <div>
              <p className="text-green-300">$ ls ~/.skills/</p>
              <p className="ml-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <span>python.py</span>
                <span>fortran.f90</span>
                <span>javascript.js</span>
                <span>typescript.tsx</span>
                <span>next.js</span>
                <span>git.git</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ cat ~/.philosophy</h2>
          <p className="ml-4 whitespace-pre-line">
{`"Less is more. I use Arch, btw.

In code and in life, I strive for:
- Clarity over cleverness
- Simplifying complexity
`}
          </p>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="inline-block text-blue-500 border border-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home
          </a>
        </div>
      </div>
    </div>
  );
}

