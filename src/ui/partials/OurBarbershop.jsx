const OurBarberShop = () => {
  return (
    <section className="container mx-auto px-2 xl:px-48 pb-4">
      <div className="p-6 xl:px-16">
        <h2>Nossa Barbearia</h2>
        <div className="flex flex-col align items-center gap-4 md:grid md:grid-cols-2">
          <div className="bg-neutral-black p-4 rounded-lg h-full">
            <p className="text-yellow mb-4 leading-snug	">
              Existimos para atender você
            </p>
            <p className="leading-loose">
              Nosso objetivo é fornecer um serviço excepcional e garantir que
              cada cliente deixe nossa barbearia se sentindo bem consigo mesmo.
            </p>
          </div>
          <div className="bg-neutral-black p-4 rounded-lg h-full">
            <p className="text-yellow mb-4 leading-snug	">
              Um ambiente acolhedor e descontraído
            </p>
            <p className="leading-loose">
              Nossa barbearia tem um ambiente acolhedor e descontraído,
              projetado para que você se sinta em casa.
            </p>
          </div>
          <div className="bg-neutral-black p-4 rounded-lg h-full">
            <p className="text-yellow mb-4 leading-snug	">
              Expertise em servir bem
            </p>
            <p className="leading-loose">
              Nossos profissionais altamente capacitados entendem as
              necessidades dos clientes e têm o conhecimento técnico necessário
              para garantir que você saia daqui satisfeito.
            </p>
          </div>
          <div className="bg-neutral-black p-4 rounded-lg h-full">
            <p className="text-yellow mb-4 leading-snug	">
              Qualidade em primeiro lugar
            </p>
            <p className="leading-loose">
              Usamos apenas produtos de qualidade para nossos serviços. Dessa
              forma, garantimos que cada corte ou barba seja um momento de
              cuidado e relaxamento para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurBarberShop;
