import styled from 'styled-components';

interface HeroProps {
  title: string;
  quote?: string;
  heroImageUrl?: string;
}

const Hero = ({ title, quote, heroImageUrl }: HeroProps) => {
  return (
    <HeroContainer $heroImageUrl={heroImageUrl || ''}>
      <HeroInfo>
        <HeroTitle>{title}</HeroTitle>
        {quote && <HeroQuote>{quote}</HeroQuote>}
        <HeroButton>View More</HeroButton>
      </HeroInfo>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div<{ $heroImageUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background-image: url(${(props) => props.$heroImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 50vh;
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

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  position: absolute;
  top: 30%;
  right: 68%;
  z-index: 10;

  @media (max-width: 1024px) {
    top: 40%;
    right: 65%;
  }

  @media (max-width: 768px) {
    top: 80%;
    right: 60%;
    gap: 0.5rem;
  }

  @media (max-width: 540px) {
    top: 60%;
    right: 20%;
  }

  @media (max-width: 480px) {
    right: 25%;
    top: 80%;
  }

  @media (max-width: 280px) {
    right: 16%;
  }
`;

const HeroTitle = styled.h2`
  text-transform: uppercase;
`;

const HeroQuote = styled.h5`
  font-family: 'Overpass', sans-serif;
  font-weight: var(--font-weight-regular);
  max-width: 16rem;
`;

const HeroButton = styled.button`
  font-family: 'Overpass', sans-serif;
  text-transform: uppercase;
  padding: 0.8rem 1rem 0.5rem 1rem;
  max-width: 8rem;
  border: none;
  background: var(--color-light);
  font-size: var(--font-size-s);
  cursor: pointer;
  transition: 0.25s;
  color: var(--color-dark);

  &:hover {
    background: var(--color-accent);
    color: var(--color-light);
  }
`;
