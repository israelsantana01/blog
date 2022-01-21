import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../services/graphql/modules/posts/queries'
import './styles.css';

interface Post {
  title: string;
  content: string;
  published: boolean;
}

function Home() {
  const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS);

  if (loading || error) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {
            data?.posts.map((post: any) => <h1>{post.title}</h1>)
          }
        </p>
      </header>
    </div>
  );
}

export default Home;
