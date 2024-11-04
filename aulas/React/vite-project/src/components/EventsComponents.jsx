const EventsComponents = () => {

    let buttonClick = false;

    const handleclick = (e) => {
        console.log(e);
        console.log("Clicou no botão");
        buttonClick = true;
        const buttonHandleClick = document.querySelector("#buttonHandleClick");
        buttonHandleClick.innerHTML = "já clicou no botão";
    }

    const eventButton = () => {
        if(buttonClick)
            return <h2 id="buttonHandleClick">já clicou no botão</h2>
        else
            return <h2 id="buttonHandleClick">ainda não clicou no botão</h2>
    }

  return (
    <div>
        { eventButton() }
        <button onClick={ handleclick }>Clique aqui</button>
    </div>
  )
}

export default EventsComponents