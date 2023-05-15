import { create } from 'zustand'

interface Post {
  id: number
  title: string
  body: string
}

interface CounterState {
  count: number
  title: string
  posts: Post[]
  increment: (value: number) => void
  getPosts: () => Promise<void>
  clearStore: () => void
}

export const useCounterStore = create<CounterState>(set => ({
  count: 10,
  title: 'Counter',
  posts: [],
  increment: value => set(state => ({ count: state.count + value })),
  getPosts: async () => {
    const posts = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json()
    set(state => ({ ...state, posts }))
  },

  clearStore: () => {
    set({}, true)
  }
}))
