import './Button.css'

const Button = ({id, text, action}) => {
  return (
    <button id={id} onClick={(e) => action(e)}>{text}</button>
  )
}

export default Button