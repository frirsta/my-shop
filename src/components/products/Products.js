import React from "react";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import commerce from "../../lib/commerce";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/joy";
import { Link, useLoaderData } from "react-router-dom";

export const ProductsList = ({ onAddToCart }) => {
  const products = useLoaderData();
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image.url}
            />

            <CardContent>
              <Typography
                component={Link}
                to={`/${product.id}`}
                variant="h6"
                gutterBottom
              >
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.price.formatted_with_symbol}
              </Typography>

              <div dangerouslySetInnerHTML={{ __html: product.description }} />
              <IconButton color="primary" onClick={onAddToCart}>
                <AddShoppingCartIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export const productsLoader = async () => {
  const { data } = await commerce.products.list();
  return data;
};
