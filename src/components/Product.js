import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import commerce from "../lib/commerce";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/joy";
import { Box, CardMedia } from "@mui/material";

export const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState({});
  const data = useLoaderData();
  const product = data.product;
  const variants = data.variants;

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeButtonClick = (variant) => {
    setSelectedVariant((prev) => ({ ...prev, variant }));
  };
  console.log(variants);
  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.image?.url}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.price?.formatted_with_symbol}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
            <Box>
              {variants.map((variant) => (
                <Button
                  style={{
                    margin: "5px",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    padding: "0px",
                  }}
                  key={variant.id}
                  value={variant.id}
                  variant={
                    selectedVariant.variant === variant
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => handleSizeButtonClick(variant)}
                >
                  {variant.name}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export const productDetailsLoader = async ({ params }) => {
  const { productId } = params;
  const product = await commerce.products.retrieve(productId);
  const variants = product.variant_groups[0].options;
  return { product, variants };
};
