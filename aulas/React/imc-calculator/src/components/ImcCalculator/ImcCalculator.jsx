import { useState } from 'react'
import Button from '../Button/Button'
import './ImcCalculator.css'

const ImcCalculator = () => {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e) =>{
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const validDigits = (text) => text.replace(/[^0-9,]/g, "")

  return (
    <div id='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className='form-inputs'>
                <div className="form-control">
                    <label htmlFor="height">Altura</label>
                    <input type="text" name='height' id='height' placeholder='Exemplo: 1,85' value={height} onChange={(e) => {setHeight(validDigits(e.target.value))
                        console.log(height);
                        
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso</label>
                    <input type="text" name='weight' id='weight' placeholder='Exemplo: 70,5' value={weight}  onChange={(e) => setWeight(validDigits(e.target.value))} />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular"/>
                <Button id="clear-btn" text="Limpar" action={clearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImcCalculator