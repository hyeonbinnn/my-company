import React from 'react';
import * as S from './Modal.style';
import close from '../../assets/close.png';
import people3 from '../../assets/people3.webp';

const CeoModal = ({ onClose }) => {
  return (
    <S.ModalBg>
      <S.CeoModal>
        <S.CloseBox>
          <button onClick={onClose}>
            <img src={close} alt="닫기 버튼 이미지" />
          </button>
        </S.CloseBox>
        <S.Section>
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
        </S.Section>
      </S.CeoModal>
    </S.ModalBg>
  );
};

export default CeoModal;
