// app/news/page.tsx
import axios from 'axios';
import Image from 'next/image';

type Article = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const fetchNews = async (): Promise<Article[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
  );
  return response.data.articles;
};

const NewsPage = async () => {
  const articles = await fetchNews();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src={article.image} alt='dr' />
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
