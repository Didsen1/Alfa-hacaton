export type comment = {
  author: string;
  type: 'link' | 'text' | 'file';
  created_at: string;
  body: string;
  link?: string;
};
