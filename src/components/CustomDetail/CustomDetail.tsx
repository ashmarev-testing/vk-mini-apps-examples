import React, { useEffect, useState } from 'react'
import {
  Tabs,
  HorizontalScroll,
  Header,
  Group,
  SimpleCell,
  Link,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import './CustomDetail.css'

export const CustomDetail = (props: any) => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className={`CustomDetail CustomDetail__${props.mode}`}>
      {posts &&
        posts.map((post) => {
          return (
            <div
              id={'CustomDetail_' + post.id}
              key={post.id}
              className="CustomDetail_content"
            >
              <div className="CustomDetail_item">
                <Link target="_blank" href={post.title}>
                  {post.id} {post.title}
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}
