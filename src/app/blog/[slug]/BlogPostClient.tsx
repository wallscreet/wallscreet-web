'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { PostData } from '@/lib/posts';

interface BlogPostClientProps {
  postData: PostData;
  slug: string;
}

export default function BlogPostClient({ postData, slug }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-green-500 rounded p-6 mb-6">
          <h1 className="text-3xl mb-4">$ cat ./posts/{slug}.md</h1>
          
          <div className="mb-6 text-green-400 text-sm">
            <p>$ stat ./posts/{slug}.md</p>
            <div className="ml-4 mt-2">
              <p>Title: {postData.title}</p>
              <p>Date: {new Date(postData.date).toLocaleDateString()}</p>
              {postData.description && <p>Description: {postData.description}</p>}
            </div>
          </div>
        </div>

        <div className="border border-green-500 rounded p-6 mb-6">
          <div className="prose prose-invert max-w-none">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ 
                __html: (postData.content || '').replace(/\n/g, '<br />')
              }}
            />
          </div>
        </div>

        <div className="border border-green-500 rounded p-6 mb-6">
          <h2 className="text-xl mb-4">$ grep -r "related" ./posts/</h2>
          <p className="text-green-400">Finding related posts...</p>
          <div className="text-sm mt-2">
            <p className="text-green-300">$ cd .. && ./blog.sh</p>
            <Link href="/blog" className="text-green-500 hover:text-green-300 ml-4">
              ← Back to all posts
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="inline-block border border-green-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home && ./home.sh
          </a>
        </div>
      </div>

      <style jsx>{`
        .markdown-content {
          line-height: 1.6;
        }
        
        .markdown-content h1 {
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #00ff00;
        }
        
        .markdown-content h2 {
          font-size: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #00ff00;
        }
        
        .markdown-content h3 {
          font-size: 1.1rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #00ff00;
        }
        
        .markdown-content p {
          margin-bottom: 1rem;
        }
        
        .markdown-content ul, .markdown-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }
        
        .markdown-content li {
          margin-bottom: 0.5rem;
        }
        
        .markdown-content code {
          background: rgba(0, 255, 0, 0.1);
          padding: 0.125rem 0.25rem;
          border: 1px solid #00cc00;
          border-radius: 0.125rem;
        }
        
        .markdown-content pre {
          background: rgba(0, 255, 0, 0.05);
          border: 1px solid #00cc00;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }
        
        .markdown-content pre code {
          background: none;
          padding: 0;
          border: none;
        }
        
        .markdown-content blockquote {
          border-left: 2px solid #00ff00;
          padding-left: 1rem;
          margin-left: 0;
          font-style: italic;
          color: #00cc00;
        }
      `}</style>
    </div>
  );
}
