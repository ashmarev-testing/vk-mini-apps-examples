import React from 'react'
import { ProductPreview } from 'src/types'

export type VarInfoProps = {
  product: ProductPreview
  description: string
  isInCart: boolean
}

export const VarDetail = (props: VarInfoProps) => {
  return <div className="VarDetailInfo">см.панель </div>
}
