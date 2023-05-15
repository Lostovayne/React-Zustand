import { useEffect } from 'react'
import { useCounterStore } from './store/counterStore'
import { shallow } from 'zustand/shallow'

const App = () => {
  const { count, title, posts } = useCounterStore(
    state => ({
      count: state.count,
      title: state.title,
      posts: state.posts
    }),
    shallow
  )

  const { increment, getPosts } = useCounterStore()

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <button onClick={() => increment(1)}> Increment </button>

      <hr />

      {JSON.stringify(posts)}
    </div>
  )
}
export default App
