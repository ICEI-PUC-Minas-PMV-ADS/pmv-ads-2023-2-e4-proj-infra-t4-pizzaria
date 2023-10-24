const Register = () => {
  return (
    <div className="Container w-screen h-screen bg-orange-300 flex items-center justify-center">
      <div className="Card flex flex-col w-2/5 gap-3 bg-white p-5 rounded-lg">
        <h1 className="text-2xl">CRIE SUA CONTA</h1>
        <form className="flex flex-wrap ">
          <input type="text" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Nome" />
          <input type="text" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Sobrenome" />
          <input type="text" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Usuário" />
          <input type="email" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Email" />
          <input type="password" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Senha" />
          <input type="password" className="flex-1 border-2 outline-orange-700 p-2 mt-5 mr-2 mb-0 ml-0" placeholder="Confime Sua Senha" />
          <span className="my-8 cursor-default">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b className="cursor-pointer">PRIVACY POLICY</b>
          </span>
          <button className="border-2 text-orange-700 border-orange-600 py-2 px-24 font-medium cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-lg">CRIAR</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
