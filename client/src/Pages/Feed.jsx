import { useEffect, useState } from 'react'
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user }) => {
  let navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [])
  user ? (
    <div className="grid col-4">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.title}</h3>
          {post.body.length >= 100 ? (
            <p>{post.body.substring(0, 100)}...</p>
          ) : (
            <p>{post.body}</p>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>You are not signed in!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Feed
