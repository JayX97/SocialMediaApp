import { useState } from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm />
      
      {/* Feed */}

      <Post content="This is a test post!" />
      <Post content="This is another test post!" />
    </div>
  )
}

export default App
