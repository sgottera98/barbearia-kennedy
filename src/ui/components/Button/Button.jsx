import React from 'react';
import './style.scss';

const Button = ({dataAos, dataAosDelay, children}) => {
    return <button data-aos={dataAos} data-aos-delay={dataAosDelay}>{children}</button>;
};

export default Button;
