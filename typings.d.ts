export interface Post {
  _id: string;
  publishedAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  categories: {
    title: string;
    description: string;
  };
  comments: Comment[];
  description: string;
  mainImage: {
    assets: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}
