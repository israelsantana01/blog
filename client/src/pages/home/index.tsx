import { useMutation, useQuery } from '@apollo/client';
// import { GET_POSTS } from '../../services/graphql/modules/posts/queries'
// import { GET_POST } from '../../services/graphql/modules/posts/queries'
import { CREATE_USER } from '../../services/graphql/modules/user/mutation';
import './styles.css';

interface Post {
  title: string;
  content: string;
  published: boolean;
}

function Home() {
  // const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS);
  // const { loading, error, data } = useQuery<{ post: Post }>(GET_POST, {
  //   variables: { id: '8a5de9f7-910c-4b2e-8084-984185b5a2ea' }
  // });

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  function handleCreateUser() {
    createUser({
      variables: {
        name: 'Pedro',
        email: 'contato@pedro.com'
      }
    });
    console.log(data);
  }

  if (loading || error) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
          {
            // data?.posts.map((post: any) => <h1>{post.title}</h1>)
            // <h1>{data?.post.title}</h1>
          }
          <h1>{data?.createUser.name}</h1>
          <button onClick={handleCreateUser}>Criar usuario</button>
      </header>
    </div>
  );
}

export default Home;
