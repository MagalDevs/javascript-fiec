import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorldComponent from './components/HelloWorldComponent.jsx'
import PropsComponent from './components/propsComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  const propsList = [
    {id: 1, name: "Magal", n1: 5, n2: 8},
    {id: 2, name: "Gabigol", n1: 1, n2: 9}
  ]

  return (
    <>
      <div>
        <div>
          {propsList.map((item) => (
            <PropsComponent key={item.id} name={item.name} n1={item.n1} n2={item.n2}/>
          ))}
        </div>
        <div>
          <PropsComponent name="Daniel" n1={2} n2={7}/>
        </div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
