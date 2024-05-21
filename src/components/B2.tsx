import React, { useState } from 'react';
type ProductType = {
  name: string;
  price: number;
  quantity: number;
  id: string;
};

function ProductInfo() {
  const [product, setProduct] = useState<ProductType>({
    name: 'Coca Cola',
    price: 1000,
    quantity: 1,
    id: 'unique-product-id',
  });
  const updateProduct = (key: keyof ProductType, value: ProductType[keyof ProductType]) => {
    setProduct({ ...product, [key]: value });
  };

  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>Tên sản phẩm: {product.name}</p>
      <p>Giá: {product.price} $</p>
      <p>Số lượng: {product.quantity}</p>
      <input
        type="text"
        value={product.name}
        onChange={(e) => updateProduct('name', e.target.value)}
      />
      <input
        type="number"
        value={product.price.toString()}
        onChange={(e) => updateProduct('price', parseInt(e.target.value))}
      />
      <input
        type="number"
        value={product.quantity.toString()}
        onChange={(e) => updateProduct('quantity', parseInt(e.target.value))}
      />
    </div>
  );
}

export default ProductInfo;