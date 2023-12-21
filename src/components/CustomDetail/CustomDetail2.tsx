import { GetCustomDataResponse } from 'src/types'

export const CustomDetail2 = (props: GetCustomDataResponse) => {
  console.log('4 строка', props)
  return (
    <div className="CustomDetailInfo">
      qqqqq {JSON.stringify(props.customData)}
    </div>
  )
}
