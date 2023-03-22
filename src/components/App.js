import { useEffect } from 'react';
import { getposts } from '../api/index.js';

function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getposts();
      console.log('response', response);
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1> Hello World</h1>
    </div>
  );
}

export default App;
