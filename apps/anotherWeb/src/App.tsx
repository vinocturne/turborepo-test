import { useState } from 'react'
import './App.css'
import {AntButton, AntInput, Button, styled} from "@repo/ui";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
          <AntInput placeholder={"Ant Input"} allowClear={true}/>
          <AntButton>Ant Button</AntButton>
          <CountContainer>
              <Button appName={'anotherWeb'} onClick={() => setCount((prev) => prev-1)}>감소</Button>
              <div>{count}</div>
              <Button appName={'anotherWeb'} onClick={() => setCount((prev) => prev+1)}>증가</Button>
          </CountContainer>
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const CountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`