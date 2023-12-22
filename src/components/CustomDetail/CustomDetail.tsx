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
  const [list, setList] = useState<
    { id: number; title: string; thumbnailUrl: string; url: string }[]
  >([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setList(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className={`CustomDetail CustomDetail__${props.mode}`}>
      <div className="CustomDetail_grid">
        {list.map((item, index) => {
          return (
            <div
              id={'CustomDetail_' + item.id}
              key={item.id}
              className="CustomDetail_content"
            >
              <div>
                <Link target="_blank" href={item.url}>
                  <div>
                    <img src={item.thumbnailUrl} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
