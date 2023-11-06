import React from 'react';

import './footer.css';

import face from '../../imagens/icones/facebook.svg';
import whats from '../../imagens/icones/whatsapp.svg';
import inst from '../../imagens/icones/instagram.svg';

function Rodape() {
    return(
        <footer className="rodape">
            <div className="social">    
                <img src={whats} alt="icon_whatsapp"/>
                <img src={face} alt="icon_facebook"/>
                <img src={inst} alt="icon_instagram"/>
            </div>
            <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
            <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@burguer.com</p>
        </footer>
    );
}

export default Rodape;
