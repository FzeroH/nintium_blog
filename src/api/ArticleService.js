import instance from './config/axios.config';

class ArticleService {
  static getArticleList = () => new Promise((resolve, reject) => {
    instance.get('/articles.json')
      .then((res) => resolve(res.data))
      .catch((e) => reject(e));
  })
}

export default ArticleService;
