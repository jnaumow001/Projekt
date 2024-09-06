import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, TextField, Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

const StyledContainer = styled(Container)`
  padding: 16px;
`;
// https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=2a5441ba&app_key=17971acd88b933b0c519e67675b68560
const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=2a5441ba&app_key=17971acd88b933b0c519e67675b68560`)
        .then(response => response.json())
        .then(data => {
          setRecipes(data.hits);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [search]);

  return (
    <StyledContainer>
      <TextField
        label="Search Recipes"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={3}>
        {recipes.map(({ recipe }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.uri}>
            <RecipeCard
              label={recipe.label}
              image={recipe.image}
              source={recipe.source}
              url={recipe.url}
              dietLabels={recipe.dietLabels}
              cautions={recipe.cautions}
              calories={recipe.calories}
            />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default RecipeSearch;
