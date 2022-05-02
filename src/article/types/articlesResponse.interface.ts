import { ArticleEntity } from '../article.entity';

export interface ArticlesReponseInterface {
  articles: ArticleEntity[];
  articlesCount: number;
}
