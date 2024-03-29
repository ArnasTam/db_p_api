import { User } from '@interfaces/users.interface';

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
}
