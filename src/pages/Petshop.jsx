import React, { useState } from 'react';
import './Petshop.css'; // Importa o arquivo de estilos CSS

const PetShop = () => {
  const [products] = useState([
    { id: 1, name: 'Ração Gran Plus', price: 30, imageUrl:'link_para_imagem1.jpg'  },
    { id: 2, name: 'Ração Pedigree', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 3, name: 'Ração PremieR', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 4, name: 'Coleira para cães', price: 25, imageUrl: 'link_para_imagem3.jpg' },
    
    { id: 5, name: 'Ração Friskies', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 6, name: 'Ração GoldeN', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 7, name: 'Ração Origens', price: 30, imageUrl: 'link_para_imagem1.jpg' },
    { id: 8, name: 'Coleira Para Gatos', price: 25, imageUrl: 'link_para_imagem3.jpg' },
    
    { id: 2, name: 'Brinquedo Mordedor Nylon', price: 15, imageUrl: 'link_para_imagem2.jpg' },
    { id: 3, name: 'Brinquedo Kroco ', price: 10, imageUrl: 'link_para_imagem3.jpg' },
    

    // Adicione mais produtos conforme necessário
  ]);

  return (
    <div className="petshop-gallery">
      <h1>Bem-vindo À Nossa Loja Pet Feliz!</h1>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
           
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
