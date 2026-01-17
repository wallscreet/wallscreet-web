import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/projects');

function ensureDirectoryExists(): boolean {
  try {
    return fs.existsSync(postsDirectory) && fs.statSync(postsDirectory).isDirectory();
  } catch (error) {
    console.error('Error checking posts directory:', error);
    return false;
  }
}

function safeReadFile(filePath: string): { content: string; error: string | null } {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return { content, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error reading file ${filePath}:`, errorMessage);
    return { content: '', error: errorMessage };
  }
}

function safeReadDirectory(): { files: string[]; error: string | null } {
  try {
    const files = fs.readdirSync(postsDirectory);
    return { files, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error reading posts directory:', errorMessage);
    return { files: [], error: errorMessage };
  }
}

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
}

export function getSortedPostsData(): PostData[] {
  if (!ensureDirectoryExists()) {
    console.warn('Posts directory does not exist:', postsDirectory);
    return [];
  }

  const { files: fileNames, error: dirError } = safeReadDirectory();
  if (dirError) {
    return [];
  }

  const allPostsData: PostData[] = [];
  
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) {
      continue;
    }

    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const { content: fileContents, error: fileError } = safeReadFile(fullPath);
    
    if (fileError) {
      continue;
    }

    try {
      // Use gray-matter to parse the projects metadata section
      const matterResult = matter(fileContents);

      // Validate required fields
      const postData = {
        slug,
        ...matterResult.data,
      } as PostData;

      // Only include posts with valid data
      if (postData.title && postData.date) {
        allPostsData.push(postData);
      } else {
        console.warn(`Post ${fileName} missing required fields (title or date)`);
      }
    } catch (parseError) {
      console.error(`Error parsing post ${fileName}:`, parseError);
    }
  }

  // Sort projects by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  if (!ensureDirectoryExists()) {
    return [];
  }

  const { files: fileNames, error } = safeReadDirectory();
  if (error) {
    return [];
  }

  return fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      return {
        params: {
          slug: name.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<PostData | null> {
  if (!ensureDirectoryExists()) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const { content: fileContents, error } = safeReadFile(fullPath);
  
  if (error) {
    return null;
  }

  try {
    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      description: matterResult.data.description,
      content: matterResult.content,
    };
  } catch (parseError) {
    console.error(`Error parsing post data for ${slug}:`, parseError);
    return null;
  }
}