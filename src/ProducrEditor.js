import React, { useState } from 'react';

function ProductEditor(props) {
    let {EditActive, EditSet} = props;
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('we');
    const [sex, setSex] = useState('woman');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [photos, setPhotos] = useState(['', '', '']);
    const [productDetail, setProductDetail] = useState('');
  
    let edit = () => {
        EditSet((prev) => prev = !EditActive)
     }
    
    const handleSave = (e) => {
      e.preventDefault();
  
      if (!productName || isNaN(price) || !photos.every((photo) => !!photo)) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
      }
  
      const newProduct = {
        "title": productName,
        "category": category,
        "price": parseFloat(price),
        "sex": sex,
        "size": size,
        "image": [photos[0], photos[1], photos[2]],
        "details": productDetail,
      };
  
      props.onAddProduct(newProduct);
      window.location.reload();
    };

    

  return (
    
    <div className={`product-editor ${props.EditActive ? "active" : ""}`}>
      <div className="header">
        <span className="close-button" onClick={edit}>&#10006;</span>
      </div>
      <div className="content">
        <h2>Edit Product</h2>
        <form id="product-form" onSubmit={handleSave}>
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Jeans">Jeans</option>
            <option value="Shirts">Shirts</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Jackets">Jackets</option>
            <option value="Pullover">Pullover</option>
          </select>
          <select
            id="sex"
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />


          <label htmlFor="photo">Photo:</label>
          {photos.map((photo, index) => (
            <input
              type="text"
              className="photo"
              name="photo"
              key={index}
              required
              value={photo}
              onChange={(e) => {
                const updatedPhotos = [...photos];
                updatedPhotos[index] = e.target.value;
                setPhotos(updatedPhotos);
              }}
            />
          ))}

          <label htmlFor="product-detail">Product Detail:</label>
          <textarea
            type="text"
            id="product-detail"
            name="product-detail"
            required
            value={productDetail}
            onChange={(e) => setProductDetail(e.target.value)}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ProductEditor;