import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ServicesMain.style';
import service01 from '../../assets/service01.jpg';
import service02 from '../../assets/service02.jpg';
import service03 from '../../assets/service03.jpg';
import service04 from '../../assets/service04.jpg';
import service05 from '../../assets/service05.jpg';
import service06 from '../../assets/service06.jpg';
import service07 from '../../assets/service07.jpg';
import service08 from '../../assets/service08.jpg';
import service09 from '../../assets/service09.jpg';
import service from '../../assets/service.png';

const ServicesMain = () => {
  return (
    <S.CustomMain>
      <S.Article>
        <S.H2>
          <img src={service} alt="서비스 아이콘" />
          <strong>Services</strong>
          <span>지구를 지키는 마음으로, 한 걸음 더 나아갑니다.</span>
        </S.H2>
        <S.Section>
          <ul>
            <li>
              <Link>
                <img src={service01} alt="서비스01" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service02} alt="서비스02" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service03} alt="서비스03" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service04} alt="서비스04" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service05} alt="서비스05" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service06} alt="서비스06" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service07} alt="서비스07" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service08} alt="서비스08" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <img src={service09} alt="서비스09" />
                <div>
                  <h3>서비스</h3>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ratione,
                    quos architecto sapiente ex iste quod harum dolorum, omnis voluptates rerum
                    cumque! Quisquam natus quasi in autem porro, id sunt.
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </S.Section>
      </S.Article>
    </S.CustomMain>
  );
};

export default ServicesMain;
