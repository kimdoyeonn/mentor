import { useParams } from "react-router-dom"
import { ROOM_LIST } from "./main"

const RoomDetailPage = () => {
  const params = useParams()
  console.log(params)

  const room = ROOM_LIST.filter((room) => room.id === Number(params.roomId))[0]
  console.log(room)

  return <>
    <h1>RoomDetail{params.roomId}</h1>
  </>
}

export default RoomDetailPage