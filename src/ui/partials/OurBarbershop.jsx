import Card from '../components/Card';

const OurBarberShop = () => {
    return (
        <section className="container mx-auto px-2 xl:px-48 pb-4">
            <div className="bg-default xl:bg-default rounded-lg p-6 xl:px-16">
                <h2>Nossa Barbearia</h2>

                <div className="flex flex-col align items-center gap-4 md:grid md:grid-cols-2">
                    <Card
                        title={'Existimos para atender você'}
                        dataAos="fade-right"
                    >
                        Nosso objetivo é fornecer um serviço excepcional e
                        garantir que cada cliente deixe nossa barbearia se
                        sentindo bem consigo mesmo.
                    </Card>
                    <Card
                        title={'Um ambiente acolhedor e descontraído'}
                        dataAos="fade-right"
                    >
                        Nossa barbearia tem um ambiente acolhedor e
                        descontraído, projetado para que você se sinta em casa.
                    </Card>
                    <Card
                        title={'Expertise em servir bem'}
                        dataAos="fade-right"
                    >
                        Nossos profissionais altamente capacitados entendem as
                        necessidades dos clientes e têm o conhecimento técnico
                        necessário para garantir que você saia daqui satisfeito.
                    </Card>
                    <Card
                        title={'Qualidade em primeiro lugar'}
                        dataAos="fade-right"
                    >
                        Usamos apenas produtos de qualidade para nossos
                        serviços. Dessa forma, garantimos que cada corte ou
                        barba seja um momento de cuidado e relaxamento para
                        você.
                    </Card>
                </div>
            </div>
        </section>
    );
};
export default OurBarberShop;
