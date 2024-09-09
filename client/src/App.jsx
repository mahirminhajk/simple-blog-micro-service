import './App.css'
import PostCreate from './pages/PostCreate'
import PostList from './pages/PostList'

function App() {


  return (
    <div className="container">
      <h1>Create Posdddt</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
}

export default App
