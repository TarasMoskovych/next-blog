import { PortableTextBlock } from '@portabletext/types'
import sanityClient, { ClientConfig, SanityClient }  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IBlog {
  createdBy: {
    displayName: string;
    photoUrl: string;
  };
  createdAt: string;
  imageSource: SanityImageSource;
  slug: string;
  subtitle: string;
  title: string;
  content?: PortableTextBlock;
}

let blogService: BlogService | undefined;

class BlogService {
  private client: SanityClient;
  private builder: ImageUrlBuilder;
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
    'imageSource': image,
    'slug': slug.current,
  `;

  constructor() {
    this.client = sanityClient(this.configs);
    this.builder = imageUrlBuilder(this.client);
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

  public getImageUrl(source: SanityImageSource): ImageUrlBuilder {
    return this.builder.image(source);
  }
}

if (!blogService) {
  blogService = new BlogService();
}

export default blogService as BlogService;
export const getImageUrl = blogService.getImageUrl.bind(blogService);
