import movies from '../../data/movies.json';
import { useParams } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

const FlexContainer = styled.div`
flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  //Changes the number of columns depending on the screen size
  @media (max-width: 1215px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 597px) {
    grid-template-columns: 1fr;
  }
`;


function CategoryContent() {
  const { category } = useParams();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const moviesInCategory = category
    ? movies.filter((movie) =>
        movie.genre.toLowerCase().includes(category.toLowerCase()),
      )
    : [];

  return (
    <Wrapper>
        <FlexContainer>
      <h4>{category ? capitalizeFirstLetter(category): 'Category'}</h4>
      <GridContainer>
      {moviesInCategory.map((movie) => (
        <Thumbnail key={movie.title} movie={movie} />
      ))}
      </GridContainer>
      </FlexContainer>
    </Wrapper>
  );
}

export default CategoryContent;
