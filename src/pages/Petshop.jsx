import React, { useState } from 'react';
import './Petshop.css'; // Importa o arquivo de estilos CSS

const PetShop = () => {
  const [products] = useState([
    { id: 1, name: 'Ração para cães', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 2, name: 'Brinquedo para gatos', price: 15, imageUrl: 'link_para_imagem2.jpg' },
    { id: 3, name: 'Coleira para cães', price: 25, imageUrl: 'link_para_imagem3.jpg' },
    // Adicione mais produtos conforme necessário
  ]);

  return (
    <div className="petshop-gallery">
      <h1>Bem-vindo à nossa Loja Petshop!</h1>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => alert(`Adicionado ao carrinho: ${product.name}`)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetShop;
