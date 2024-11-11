const PropsComponent = ({name, n1, n2}) => {
  return (
    <div>
        <h2>O nome do usuário é: {name}</h2>
        <h2>{n1} + {n2} = {n1 + n2}</h2>
    </div>
  )
}

export default PropsComponent