import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from text file
    fetch('/products.txt') // Assuming products.txt is in the public folder
      .then(response => response.text())
      .then(text => {
        // Parse product data from text file
        const productLines = text.split('\n');
        const parsedProducts = productLines
          .map(line => line.trim()) // Trim whitespace from each line
          .filter(line => line) // Filter out empty lines
          .map(line => {
            const [image, quantity, description] = line.split(',');
            return { image, quantity, description };
          });
        setProducts(parsedProducts);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={product.image}
                alt={`Product ${index}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {product.quantity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductDashboard;
