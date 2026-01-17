import { getProjectData, getAllProjectSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ProjectPostClient from './ProjectPostClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const projectData = await getProjectData(slug);
  
  if (!projectData) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: projectData.title,
    description: projectData.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const postData = await getProjectData(slug);

  if (!postData) {
    notFound();
  }

  return <ProjectPostClient projectData={postData} slug={slug} />;
}
