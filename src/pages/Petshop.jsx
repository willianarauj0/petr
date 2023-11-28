import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Petshop.css'; // Importa o arquivo de estilos CSS

const PetShop = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'Ração Gran Plus', price: 30, imageUrl:'link_para_imagem1.jpg'  },
    { id: 2, name: 'Ração Pedigree', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 3, name: 'Ração PremieR', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 4, name: 'Coleira para cães', price: 25, imageUrl: 'link_para_imagem3.jpg' },
    
    { id: 5, name: 'Ração Friskies', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 6, name: 'Ração GoldeN', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 7, name: 'Ração Origens', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 8, name: 'Coleira Para Gatos', price: 25, imageUrl: 'link_para_imagem3.jpg' },
    
    { id: 9, name: 'Brinquedo Mordedor Nylon', price: 15, imageUrl: 'link_para_imagem2.jpg' },
    { id: 10, name: 'Brinquedo Kroco ', price: 10, imageUrl: 'link_para_imagem3.jpg' },
  ]);

  const handleAddToCart = (productName) => {
    alert(`Adicionado ao carrinho: ${productName}`);
  };

  const handleGoHome = () => {
    // Usando history.push para navegar para a página inicial
    navigate('/Home');
  };

  const backButtonStyle = {
    background: 'rgb(9, 127, 245)',
    color: 'white',
    
width: '44px',
height: '44px',
    border: 'none',
    padding: '1px',
    borderRadius: '11px',
    cursor: 'pointer',
  };

  return (
    <div className="petshop-gallery">
      <div className="top-bar">
        <button onClick={handleGoHome} style={backButtonStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path d="M8.696 1.552a1.5 1.5 0 0 1 0 2.121L3.172 8l5.524 5.327a1.5 1.5 0 1 1-2.121 2.12l-6-5.775a1.5 1.5 0 0 1 0-2.121l6-5.775a1.5 1.5 0 0 1 2.12 0z"/>
          </svg>
          
        </button>
      </div>
      <h1>Bem-vindo À Nossa Loja Pet Feliz!</h1>
      
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.name)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetShop;