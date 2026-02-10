import React, { useEffect, useState } from 'react'

function Fakestoreapi() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data)) // FIXED
      .catch(err => console.error(err))
  }, [])

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '20px'
    },
    card: {
      width: '200px',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      textAlign: 'center'
    },
    img: {
      width: '150px',
      height: '150px',
      objectFit: 'contain'
    }
  }

  return (
    <div style={styles.container}>
      {product.map((Display) => (
        <div key={Display.id} style={styles.card}>
          <img src={Display.image} alt={Display.title} style={styles.img} />
          <p><strong>Price:</strong> ${Display.price}</p>
          <p><strong>Category:</strong> {Display.category}</p>
          <p><strong>Rating:</strong> {Display.rating.rate}</p>
        </div>
      ))}
    </div>
  )
}

export default Fakestoreapi
