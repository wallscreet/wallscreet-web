import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-white rounded p-6 mb-6">
          
          <div className="space-y-4 mb-4">
            <div>
              <p className="text-green-300">$ grep -i name ~/.profile</p>
              <p className="ml-4">@wallscreet (John)</p>
            </div>

            <div>
              <p className="text-green-300 mt-6">$ cat ~/.description</p>
              <p className="ml-4 whitespace-pre-line">
{
`Freelance full-stack with a focus on AI systems integrations and business intelligence. I have experience writing custom context tools and developing agentic systems.

I am also working on a hypothesis that test-time adaptation of hybrid State Space Models (SSMs) can be effectively achieved through goal-conditioned perturbations applied to recurrent latent states during inference. This approach could enable dynamic steering of model outputs toward desired behaviors without updating model parameters, thereby demonstrating a lightweight form of test-time fine-tuning that preserves training stability while enhancing adaptability to specific tasks or domains.
`}
              </p>
            </div>

            <div>
              <p className="text-green-300 mt-6">$ cat ~/.languages</p>
              <p className="ml-4 grid grid-cols-1 gap-1 text-sm">
                <span>- Python</span>
                <span>- JavaScript/TypeScript </span>
                <span className="ml-8">- React/Next.js</span>
                <span>- Bash</span>
                <span>- C++</span>
                <span>- Fortan</span>
              </p>
            </div>

            <div>
              <p className="text-green-300 mt-6">$ history | grep "experience"</p>
              <p className="ml-4 mt-2 grid grid-cols-1 gap-2 text-sm text-white">
                <span>[2023] Freelance Data Analyst and AI Systems Programmer</span>
                <span>[2019] Lending Program Director - Regional Credit Union</span>
                <span>[2014] Retail Credit and Wholesale Portfolio Manager - Regional Lender</span>
                <span>[2004] Mortgage Banking and Originations</span>
              </p>
            </div>

            <div>
              <p className="text-green-300 mt-6">$ ls ~/.skills/</p>
              <p className="ml-4 mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <span>Agentic Systems</span>
                <span>Context Engineering</span>
                <span>Persistent Memory Systems</span>
                <span>Terminal UI</span>
                <span>Recursive Tooling</span>
                <span>Data Modeling & Analysis</span>
              </p>
            </div>
            <div>
              <p className="text-green-300 mt-6">$ ls ~/.interests/</p>
              <p className="ml-4 mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <span>Systems Architecure</span>
                <span>Genetic Algorithms</span>
                <span>Machine Learning</span>
                <span>Embedded Devices</span>
                <span>Hacking</span>
                <span>3d Printing</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ cat ~/.philosophy</h2>
          <p className="ml-4 whitespace-pre-line">
{`Less is more. I use Arch, btw.

- Clarity over cleverness
- Simplifying complexity
`}
          </p>
        </div>
        
        <div className="place-items-center">
          <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2363336"
              className="col-span-3"
              style={{ border: 'none', width: '330px', height: '100px' }}
              title="TryHackMe Profile Badge"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
              />
        </div>

        <div className="text-center mt-3">
          <a href="/" className="inline-block text-blue-500 border border-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home
          </a>
        </div>
      </div>
    </div>
  );
}

