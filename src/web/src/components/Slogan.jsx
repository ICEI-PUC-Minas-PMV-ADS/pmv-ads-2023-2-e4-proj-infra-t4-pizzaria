import MeninaPizza from "../imgs/MeninaPizza.png";
import ChefImage from "../imgs/ChefImage.png";
import { FileDownloadOutlined } from "@mui/icons-material";

const Slogan = () => {
  return (
    <div className="Container flex flex-row items-center justify-between pt-8 px-32">
      <div className="Infors">
        <h1 className="text-5xl font-medium">
          Arte em Cada <br /> Mordida: Nossas <br />
          <span className="text-orange-test underline underline-offset-8">
            {" "}
            Pizzas Artesanais.
          </span>
        </h1>

        <div className="flex flex-row pt-9 items-center gap-4">
          <img src={ChefImage} alt="Depoimento chefe" />
          <p className="font-medium">
            <span className="text-orange-test">Tradição</span> em cada massa,{" "}
            <span className="text-orange-test"> Inovação</span> em cada topping.
            <br /> Descubra o Sabor{" "}
            <span className="text-orange-test"> Artesanal</span>
          </p>
        </div>

        <div className="Download pt-6 flex flex-row items-center gap-3">
          <button className="bg-orange-test rounded-3xl py-2 px-5 text-white flex flex-row gap-2">
            <FileDownloadOutlined />
            <a href="../../receitas.pdf" download> Download </a>
          </button>
          <p className="text-base font-medium leading-tight">Clique no botão ao lado e baixe as receitas <br/> de nossas <span className="text-orange-test">pizzas mais famosas</span></p>
        </div>
      </div>

      <div className="Img ">
        <img className="w-4/5 " src={MeninaPizza} alt="menina comendo pizza" />
      </div>
    </div>
  );
};

export default Slogan;
