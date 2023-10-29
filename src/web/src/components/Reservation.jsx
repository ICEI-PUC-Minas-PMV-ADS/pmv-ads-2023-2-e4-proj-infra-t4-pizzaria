const Reservation = () => {
  return (
    <div className="Container h-screen bg-reservetion flex flex-col items-center justify-center gap-7">
      <h1 className="text-white font-bold text-5xl mb-12">
        Precisa De Uma Mesa?
      </h1>
      <div className="Container-2 flex flex-row items-center justify-center gap-11">
        <div className="Info w-1/4 flex flex-col gap-6 text-gray-400">
          <p>
            As solicitações de reserva, efetuadas através do site, só serão
            admitidas com antecedência mínima de 2 horas.
          </p>
          <p>
            Os clientes sem reserva ou que chegarem após o limite de tolerância
            serão atendidos de acordo com a disponibilidade de lugares na casa.
          </p>
        </div>
        <div className="Form flex">
          <form
            className="flex flex-col gap-3"
            action="https://formsubmit.co/walberg.s48@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:5173/home"/>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="p-2 w-full rounded-lg"
            />

            <div className="flex gap-3">
              <input
                type="number"
                name="numero-pessoas"
                placeholder="Número de Pessoas"
                className="w-full p-2 rounded-lg"
              />
              <input
                type="date"
                name="horario"
                placeholder="Número de Pessoas"
                className="w-full p-2 rounded-lg"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="w-full p-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 rounded-lg"
              />
            </div>

            <button
              class="enviar"
              type="submit"
              className="w-full cursor-pointer p-2 bg-orange-test text-base text-white font-medium rounded-lg"
            >
              QUERO RESERVAR MINHA MESA
            </button>
          </form>
        </div>
      </div>

      <div className="Map overflow-hidden rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291.592144185215!2d-43.96528176909546!3d-19.855770557430276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691c5f83785cf%3A0x4d326dbb2c57b467!2sDal%20Grano%20Restaurante%20e%20Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1696899378515!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="800"
        >
        </iframe>
      </div>
    </div>
  );
};

export default Reservation;

