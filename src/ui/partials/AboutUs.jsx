import Card from "../components/Card";
import scissor from "../../assets/tesoura.jpg";
import ambiente from "../../assets/ambiente.jpg";
import espera from "../../assets/espera.jpg";
import FundoBarbearia from '../../assets/mesa.jpg';

const AboutUs = () => {
  return (
    <section className="container mx-auto px-2 xl:px-48 pb-4">
      <div className="bg-neutral-black xl:bg-neutral-black rounded-lg p-6 xl:px-16">
        <h2>Sobre Nós</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="bg-neutral-black h-2/4 rounded-lg" data-aos="zoom-in">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={FundoBarbearia} alt="" />
            </div>
            <Card title={"A MISSÃO DA BARBEARIA KENNEDY"}>
              A missão da Barbearia Kennedy Santos é oferecer serviços premium, um time obstinado em resultados e atender com alegria cada cliente.
            </Card>
          </div>
          <div className="bg-neutral-black h-2/4 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={ambiente} alt="" />
            </div>
            <Card title={"A VISÃO DA BARBEARIA KENNEDY"}>
              A visão da Barbearia Kennedy Santos é ser a barbearia referência/lider no mercado nacional, inspirar a quem trabalha e a quem usufrui da nossa marca
            </Card>
          </div>
          <div className="bg-neutral-black h-2/4 rounded-lg" data-aos="zoom-in" data-aos-delay="400">
            <div className="pt-6 flex justify-center">
              <img className="w-52 h-52" src={espera} alt="" />
            </div>
            <Card title={"OS VALORES DA BARBEARIA KENNEDY"}>
              Os valores da Barbearia Kennedy Santos são honestidade, respeito, simpatia e dedicaçaõ.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
