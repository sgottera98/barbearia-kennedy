const Card = ({ title, dataAos, children }) => {
    return (
        <div className="bg-card p-4 md:p-6 rounded-lg h-full" data-aos={dataAos}>
            <h3 className="mb-4 leading-snug">{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default Card;
