import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.params.slug, // assuming getAllPostSlugs returns array of { params: { slug } }
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return <BlogPostClient postData={postData} slug={slug} />;
}
