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
    
    { id: 9, name: 'Brinquedo Mordedor Nylon', price: 15, imageUrl: 'link_para_imagem2.jpg' },
    { id: 10, name: 'Brinquedo Kroco ', price: 10, imageUrl: 'link_para_imagem3.jpg' },
  ]);

  const handleAddToCart = (productName) => {
    alert(`Adicionado ao carrinho: ${productName}`);
  };

  const handleGoHome = () => {
    // Adicione lógica de navegação para a página inicial, se necessário
    // Por exemplo, se estiver usando o React Router, você pode usar history.push('/')
    // Ou, simplesmente, você pode redirecionar o usuário para a página inicial usando window.location.href = '/'
    alert('Redirecionando para a página inicial');
  };

  return (
    <div className="petshop-gallery">
      <h1>Bem-vindo À Nossa Loja Pet Feliz!</h1>
      <button className="go-home-btn" onClick={handleGoHome}>
        Voltar para Home
      </button>
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
