import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 16px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

const RecipeCard = ({ label, image, source, url, dietLabels, cautions, calories }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div">
          {label}
        </Typography>
        <img src={image} alt={label} style={{ width: '100%', height: 'auto' }} />
        <Typography color="textSecondary">
          Source: {source}
        </Typography>
        <Typography color="textSecondary">
          <a href={url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </Typography>
        <Typography color="textSecondary">
          Calories: {Math.round(calories)}
        </Typography>
        <div>
          {dietLabels.map((label) => (
            <Chip
              key={label}
              label={label}
              sx={{ margin: '4px', backgroundColor: 'lightgreen', color: 'white' }}
            />
          ))}
        </div>
        <div>
          {cautions.map((caution) => (
            <Chip
              key={caution}
              label={caution}
              sx={{ margin: '4px', backgroundColor: 'yellow', color: 'black' }}
            />
          ))}
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default RecipeCard;
