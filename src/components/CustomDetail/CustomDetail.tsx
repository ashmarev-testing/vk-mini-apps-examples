import React from 'react'

export type CustomInfoProps = { anyString: string }

export const CustomDetail = (props: CustomInfoProps) => {
  return <div className="VarDetailInfo">{props.anyString}</div>
}
