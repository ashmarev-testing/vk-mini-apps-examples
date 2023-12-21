import { GetCustomDataResponse } from 'src/types'

export const CustomDetail2 = (props: GetCustomDataResponse) => {
  return (
    <div className="CustomDetailInfo">
      {props.image} {props.answer}
    </div>
  )
}
