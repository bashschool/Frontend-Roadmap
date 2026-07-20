import { useState } from "react";
import { Button } from "./components/button"

function App() {

  // let count: number = 0;
  const [count, setCount] = useState<number>(0)
  const [isVisible, setVisible] = useState<boolean>(true)

  const tasks = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build a component" },
    { id: 3, title: "Ship it" },
  ];



  return (
    <>
      hello world!

      <Button name="chandan" />
      <br />

      <button onClick={() => {
        // count = count + 1
        setCount((value) => value + 10)
        console.log(count)
      }}>
        increment ({count})
      </button>

      <br />


      <button onClick={() => {
        setVisible((value) => !value)
      }}>
        Toogle visibilty
      </button>

      <br />


      {
        isVisible ? <span>Is visible</span> : <span>Is Not visible</span>
      }

      {
        isVisible && <span>Is visible</span>
      }


      {/* <ul> */}
      {tasks.map((task) => {
        <li key={task.id}>{task.title}</li>
      })}
      {/* </ul> */}
    </>
  )
}

export default App
