import { useState } from "react"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"




const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)


  const handleClick = (e) => {
    
    e.preventDefault()
    login(dispatch,{ username, password })
    
  }


  return (
    <div className="Container w-screen h-screen bg-orange-300 flex items-center justify-center">
      <div className="Card flex flex-col w-1/4 gap-3 bg-white p-5 rounded-lg">
        <h1 className="text-2xl mb-5">LOGIN</h1>
        <form className="flex flex-col gap-3">
          <input type="text" className="flex-1 border-2 outline-orange-700 p-2" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className="flex-1 border-2 outline-orange-700 p-2" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <button className="border-2 border-orange-600 py-2 text-orange-700 px-24 font-medium cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-lg" onClick={handleClick} disabled={isFetching} >ENTRAR</button>
          <a className="cursor-pointer text-xs underline underline-offset-4" href="">ESQUECEU A SENHA?</a>
          <a className="cursor-pointer text-xs underline underline-offset-4" href="">CRIAR UMA CONTA?</a>
        </form>
      </div>
    </div>
  )
}

export default Login