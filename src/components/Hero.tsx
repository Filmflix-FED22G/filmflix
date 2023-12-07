import styled from 'styled-components';

interface HeroProps {
  title: string;
  heroImageUrl?: string;
  quote?: string;
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
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;

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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 30%;
  right: 76%;
  z-index: 10;

  @media (max-width: 1440px) {
    bottom: 40%;
    right: 73%;
  }

  @media (max-width: 1024px) {
    bottom: 20%;
    right: 68%;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
    width: 100%;
  }

  @media (max-width: 912px) {
    bottom: 7%;
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Horizontally align center */
    max-width: 80%;
    width: 100%; /* Full width within the container */
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    bottom: 7%;
  }
`;

const HeroTitle = styled.h2`
  text-transform: uppercase;
`;

const HeroQuote = styled.h5`
  font-family: 'Overpass', sans-serif;
  font-weight: var(--font-weight-regular);
  max-width: 16rem;
  text-align: center;
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
