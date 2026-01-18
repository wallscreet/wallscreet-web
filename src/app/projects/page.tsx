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
                  {project.title} <span className="text-white text-sm">    ({project.language})</span> 
                </Link>
                <span className="text-white text-sm whitespace-nowrap ml-4">
                  {new Date(project.date).toLocaleDateString()}
                </span>
              </div>
              
              {project.description && (
                <p className="text-white mb-3">{project.description}</p>
              )}
              <div className="grid grid-cols-4">
                <div className="text-sm col-span-3">
                  <span className="text-green-300">$ cat </span>
                  <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:text-green-300">
                    ./projects/{project.slug}.md
                  </Link>
                </div>
                <div className="col-start-4 text-right">
                  <Link href={`https://www.github.com/wallscreet/${project.repo}`}>
                  GitHub
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
              <p className="text-green-300">Total projects:</p>
              <p className="text-[#FF6600] text-2xl ml-10">{projects.length}</p>
            </div>
            <div>
              <p className="text-green-300">Latest project:</p>
              <p className="ml-4">{projects[0]?.title || 'None'}</p>
            </div>
            <div>
              <p className="text-green-300">System status:</p>
              <p className="ml-4 text-white">All systems operational</p>
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

