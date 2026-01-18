import Link from 'next/link';
import { getSortedProjectsData } from '@/lib/projects';
import Navigation from '@/components/Navigation';

export default function ProjectPage() {
  const projects = getSortedProjectsData();

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-white rounded p-6 mb-6">
          <h1 className="text-green-300 text-2xl mb-4">$ ls -la ./projects/</h1>
          <p className="text-green-500 mb-4">Found <span className="text-[#FF6600]">{projects.length}</span> projects</p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.slug} className="border border-white rounded p-6 hover:bg-green-950 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <Link href={`/projects/${project.slug}`} className="text-blue-500 text-xl hover:text-green-300">
                  {project.title}  
                </Link>
                <span className="text-sm whitespace-nowrap ml-4">
                  {new Date(project.date).toLocaleDateString()}
                </span>
              </div>
              
              {project.description && (
                <p className="text-white mb-3">{project.description}</p>
              )}
              <div className="grid grid-cols-3">
                {/* <div className="text-sm col-span-2">
                  <span className="text-green-300">$ cat </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-500 hover:text-green-300"
                  >
                    ./projects/{project.slug}.md
                  </Link>
                </div> */}
                <div className="col-span-2">
                  <span className="text-sm">({project.language})</span>
                </div>

                <div className="col-start-3 text-right">
                  <Link
                    href={`https://www.github.com/wallscreet/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-green-300"
                    aria-label="View on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.192.694.8.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 border border-white rounded p-6">
          <h2 className="text-xl mb-4">$ ./stats.sh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 text-sm">
            <div>
              <p className="text-green-300 mb-2 text-center">Total projects:</p>
              <p className="text-[#FF6600] text-2xl text-center mb-2">{projects.length}</p>
            </div>
            <div>
              <p className="text-green-300 text-center mb-2">Latest project:</p>
              <p className="text-center mb-2">{projects[0]?.title || 'None'}</p>
            </div>
            <div>
              <p className="text-green-300 text-center mb-2">System status:</p>
              <p className="text-center">All systems operational</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="inline-block border text-blue-500 border-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home
          </a>
        </div>
      </div>
    </div>
  );
}

