import { useState } from 'react';
import Post from './components/Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fakebook!</h1>
      {/* CreatePostForm */}
      
      {/* Feed */}

      <Post />
    </div>
  )
}

export default App
