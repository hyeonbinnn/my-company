import React from 'react';
import styled from 'styled-components';
import close from '../../assets/close.png';
import people3 from '../../assets/people3.jpeg';

const CeoModal = ({ onClose }) => {
  return (
    <ModalBg>
      <Modal>
        <BtnBox>
          <button onClick={onClose}>
            <img src={close} alt="닫기 버튼 이미지" />
          </button>
        </BtnBox>
        <Section>
          <img src={people3} alt="CEO 이미지" />
          <h2>CEO - Jain Austin Oliver</h2>
          <span>
            If the earth and the environment cannot coexist, <br />
            we have no future
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore expedita similique
            reiciendis! Repudiandae exercitationem ratione nesciunt dolorem unde eius eligendi,
            officia laborum! Distinctio eligendi sapiente aliquid ipsum laudantium hic itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est ipsam tempore,
            praesentium quasi incidunt minus sapiente repellat sunt iste laudantium, atque pariatur
            consectetur architecto impedit dignissimos deserunt a inventore? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quas illum consequuntur assumenda qui eveniet porro
            obcaecati id, quibusdam nemo cupiditate accusamus. Quia, corrupti! Similique, cumque
            aperiam? Ipsa sapiente eveniet voluptatum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum tenetur qui
            exercitationem rem ab libero enim officiis, odio tempore quasi consequatur dolores eum
            eos assumenda a nulla facere ducimus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perspiciatis possimus voluptas enim quae ea est deleniti sequi sunt suscipit, hic
            ab nulla! Perferendis praesentium nobis incidunt eligendi accusantium quam explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ducimus natus neque
            mollitia, quod laudantium enim voluptates tempore, autem illum libero aperiam inventore
            cumque veniam dignissimos, deleniti asperiores doloribus alias.
          </p>
        </Section>
      </Modal>
    </ModalBg>
  );
};

export default CeoModal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Modal = styled.div`
  position: relative;
  width: 800px;
  max-width: 90%;
  height: 85%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    max-width: 80%;
  }
`;

const BtnBox = styled.div`
  text-align: right;

  img {
    width: 40px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 35px;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 100%;
    width: 550px;
    margin: 30px auto 50px;
  }

  h2 {
    margin-bottom: 15px;
  }

  span {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 40px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 380px;
    }
  }
`;
