import Card from "../components/Card";
import scissor from "../../assets/tesoura.jpg";
import utensils from "../../assets/utensilios.jpg";
import BarbershopImage from "../../assets/barbershop.jpg";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-2 xl:px-48 pb-4">
      <div className="bg-default xl:bg-default rounded-lg p-6 xl:px-16">
        <h2>Sobre Nós</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="bg-card h-2/4" data-aos="zoom-in">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={scissor} alt="" />
            </div>
            <Card title={"Tradição em serviços de barbearia"}>
              Com anos de experiência, nossa barbearia se tornou uma das
              melhores de São Paulo. Nossos clientes são nossa prioridade e o
              foco do nosso trabalho diário.
            </Card>
          </div>
          <div className="bg-card h-2/4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={utensils} alt="" />
            </div>
            <Card title={"Tradição em serviços de barbearia"}>
              Com anos de experiência, nossa barbearia se tornou uma das
              melhores de São Paulo. Nossos clientes são nossa prioridade e o
              foco do nosso trabalho diário.
            </Card>
          </div>
          <div className="bg-card h-2/4" data-aos="zoom-in" data-aos-delay="400">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={BarbershopImage} alt="" />
            </div>
            <Card title={"Tradição em serviços de barbearia"}>
              Com anos de experiência, nossa barbearia se tornou uma das
              melhores de São Paulo. Nossos clientes são nossa prioridade e o
              foco do nosso trabalho diário.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
