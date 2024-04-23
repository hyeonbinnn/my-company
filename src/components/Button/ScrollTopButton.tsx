import { useEffect, useState } from 'react';
import styled from 'styled-components';
import upArrow from '../../assets/upArrow.png';

interface ButtonProps {
  show: boolean;
}

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button onClick={scrollTop} show={isVisible}>
      <img src={upArrow} alt="스크롤 위로 올리는 화살표 아이콘" />
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button<ButtonProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 80px;
  right: 30px;
  z-index: 10;

  img {
    width: 55px;
    height: 55px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    bottom: 60px;
    right: 30px;

    img {
      width: 45px;
      height: 45px;
    }
  }
`;
