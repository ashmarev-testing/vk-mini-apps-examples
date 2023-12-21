//import { GetCustomDataResponse } from 'src/types'
//
//export const CustomDetail = (props: GetCustomDataResponse) => {
//  console.log(props)
//  return (
//    <div className="CustomDetailInfo">
//      qqqqq {JSON.stringify(props.customData)}
//    </div>
//  )
//}

import React, { useEffect, useState } from 'react'

export function CustomDetail() {
  const [json, setJson] = useState({})

  const getJSON = async () => {
    const res = await fetch('https://yesno.wtf/api')
    const data = await res.json()
    setJson(data)
  }

  useEffect(() => {
    getJSON()
  }, [])

  return <div className="CustomDetail">{JSON.stringify(json)}</div>
}
