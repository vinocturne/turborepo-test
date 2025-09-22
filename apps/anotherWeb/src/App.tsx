import { useState } from 'react'
import './App.css'
import {Button} from "@repo/ui";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Button appName={'anotherWeb'} onClick={() => setCount((prev) => prev+1)}>증가</Button>
          <div>{count}</div>
          <Button appName={'anotherWeb'} onClick={() => setCount((prev) => prev-1)}>감소</Button>
      </div>
    </>
  )
}

export default App
