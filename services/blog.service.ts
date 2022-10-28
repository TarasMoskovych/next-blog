import { PortableTextBlock } from '@portabletext/types'
import sanityClient, { ClientConfig, SanityClient }  from '@sanity/client';

export interface IBlog {
  createdBy: {
    displayName: string;
    photoUrl: string;
  };
  createdAt: string;
  imageUrl: string;
  slug: string;
  subtitle: string;
  title: string;
  content?: PortableTextBlock;
}

let blogService: BlogService | undefined;

class BlogService {
  private client: SanityClient;
  private configs: ClientConfig = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
  };
  private query = `
    createdAt,
    subtitle,
    title,
    'createdBy': createdBy->{ displayName, 'photoUrl': avatar.asset->url },
    'imageUrl': image.asset->url,
    'slug': slug.current,
  `;

  constructor() {
    this.client = sanityClient(this.configs);
  }

  public async getAllBlogs(): Promise<IBlog[]> {
    return await this.client.fetch(`*[_type == 'blog']{ ${this.query} }`);
  }

  public async getAllSlugs(): Promise<string[]> {
    return await this.client.fetch(`*[_type == 'blog']{ 'slug': slug.current }`)
      .then((response: Array<{slug: string}>) => response.map(({ slug }) => slug));
  }

  public async getBlogBySlag(slug: string): Promise<IBlog> {
    return await this.client
      .fetch(`*[_type == 'blog' && slug.current == $slug]{ ${this.query} content[]{ ..., 'asset': asset-> } }`, { slug })
      .then((response: IBlog[]) => response?.[0]);
  }
}

if (!blogService) {
  blogService = new BlogService();
}

export default blogService as BlogService;
