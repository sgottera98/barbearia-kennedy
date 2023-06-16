import './style.scss';

const Button = ({
    anchor = false,
    href,
    target = '_self',
    className = '',
    dataAos,
    dataAosDelay,
    children,
}) => {
    if (anchor) {
        return (
            <a
                href={href}
                target={target}
                className={`custom-anchor ${className}`}
                data-aos={dataAos}
                data-aos-delay={dataAosDelay}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={`custom-button ${className}`}
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
        >
            {children}
        </button>
    );
};

export default Button;
