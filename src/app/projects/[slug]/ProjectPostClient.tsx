'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ProjectData } from '@/lib/projects';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark-dimmed.css';

interface ProjectPostClientProps {
  projectData: ProjectData;
  slug: string;
}

export default function ProjectPostClient({ projectData, slug }: ProjectPostClientProps) {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        {/* Post metadata in terminal style */}
        <div className="border border-green-500 rounded p-6 mb-6">
          
          <div className="mb-1 text-xl text-green-400">
            <p>$ stat ./projects/<span className="text-[#FF6600]">{slug}.md</span></p>
            <div className="ml-4 mt-2">
              <p className="text-sm mt-1">Title: <span className="text-white">{projectData.title}</span></p>
              <p className="text-sm mt-1">Date: <span className="text-white">{new Date(projectData.date).toLocaleDateString()}</span></p>
              <p className="text-sm mt-1 mb-2">Description: <span className="text-white">{projectData.description}</span></p>
              <Link href={`https://www.github.com/wallscreet/${projectData.repo}`} className="text-blue-500">Open on GitHub</Link>
            </div>
          </div>
        </div>

        {/* Rendered Markdown – prose handles beautiful typography */}
        <div className="border border-green-500 rounded p-6 mb-6">
          <div className="prose prose-invert prose-green max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              // Optional: Override specific elements for extra terminal flair
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 text-green-300 border-b border-green-700 pb-2" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold mt-6 mb-3 text-green-300" {...props} />
                ),
                code({ node, inline, className, children, ...props }: any) {
                  return inline ? (
                    <code className="bg-gray-900/80 text-green-200 px-1 rounded font-mono" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-950 border border-green-800 p-4 rounded overflow-x-auto" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-green-400 my-6" {...props} />
                ),
              }}
            >
              {projectData.content || ''}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back / related section */}
        <div className="border border-green-500 rounded p-6 mb-6">
          <h2 className="text-xl mb-2">$ grep -r "related" ./projects/</h2>
          <p className="text-green-400">Finding related projects...</p>
          <div className="text-sm mt-2">
            <p className="text-green-300 mb-6">$ cd .. && ./projects.sh</p>
            <Link href="/projects" className="text-blue-500 hover:text-green-300">
              ← Back to all projects
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="inline-block border border-blue-500 text-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home
          </a>
        </div>
      </div>
    </div>
  );
}