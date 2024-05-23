import { Link } from 'react-router-dom'
import './App.css'
import { ROOM_LIST } from './main'

function App() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/help">고객센터</Link>
      {ROOM_LIST.map(room => 
        <div key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.id}</Link>
        </div>
      )}
    </>
  )
}

export default App
