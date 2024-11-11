import { useState } from "react";

const EventsComponents = () => {
    const [text, setText] = useState("Ainda não clicou no botão!")

    const [list] = useState([
        {id: 1, name: "primeiro"},
        {id: 2, name: "segundo"},
        {id: 3, name: "terceiro"}
    ])

    let show = true

    const handleclick = (e) => {
        console.log(e);
        console.log("Clicou no botão");
        setText("Já clicou no botão")
    }

  return (
    <div>
        {show && <h1>Vai mostrar!</h1>}
       <h2>{text}</h2>
        <button onClick={ handleclick }>Clique aqui</button>
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default EventsComponents