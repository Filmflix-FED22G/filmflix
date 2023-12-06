import styled from 'styled-components';

interface HeroProps {
  title: string;
  quote: string;
  imageUrl: string;
}

const Hero = ({ title, quote, imageUrl }: HeroProps) => {
  return (
    <HeroContainer $imageUrl={imageUrl}>
      <HeroText>
        <HeroTitle>{title}</HeroTitle>
        <HeroQuote>{quote}</HeroQuote>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div<{ $imageUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20%;
    background: linear-gradient(transparent, #000);
    z-index: 1;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  position: absolute;
  top: 28%;
  right: 70%;
  z-index: 10;

  @media (max-width: 1024px) {
    top: 85%;
    right: 60%;
  }

  @media (max-width: 768px) {
    right: 50%;
    max-width: 90%;
  }

  @media (max-width: 540px) {
    right: 45%;
  }

  @media (max-width: 480px) {
    right: 25%;
    top: 80%;
    max-width: 80%;
  }

  @media (max-width: 280px) {
    right: 16%;
  }
`;

const HeroTitle = styled.h1`
  text-transform: uppercase;
`;

const HeroQuote = styled.h5`
  font-family: 'Overpass', sans-serif;
  font-weight: var(--font-weight-regular);
  max-width: 16rem;
`;
