const ReservationPlace = () => {
  return (
    <div className="Container h-screen bg-gray-600 flex flex-col items-center justify-center gap-6">
      <div className="Title">
        <h1 className="text-white font-bold text-5xl mb-8">
          Precisa Reservar Um Espaço?
        </h1>
      </div>
      <div className="">
        <form
          action="https://formsubmit.co/walberg.s48@gmail.com"
          method="post"
          className="Input flex flex-col gap-5"
        >
          <input type="hidden" name="_next" value="http://localhost:5173/"/>
          <input
            type="text"
            name="nome"
            className=" p-2 w-full rounded-lg "
            placeholder="Nome"
          />
          <div className="flex gap-3">
            <input
              type="number"
              name="numero-de-pessoas"
              className="w-full p-2 rounded-lg"
              placeholder="Numero De Pessoas"
            />
            <input type="date" name="data" className="w-full p-2 rounded-lg " />
          </div>
          <div className="flex gap-3">
            <input
              type="tel"
              name="telefone"
              className=" w-full p-2 rounded-lg "
              placeholder="Telefone"
            />
            <input
              type="email"
              name="email"
              className=" w-full p-2 rounded-lg "
              placeholder="Email"
            />
          </div>
          <textarea
            name="mensagem"
            className="p-2 rounded-lg"
            cols="30"
            rows="5"
            placeholder="Informe o tipo de evento e informações relevantes"
          ></textarea>
          <button className="w-full cursor-pointer p-2 bg-orange-test text-base text-white font-medium rounded-lg">
            QUERO RESERVAR MEU ESPAÇO
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPlace;
