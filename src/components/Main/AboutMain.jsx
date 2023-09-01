import React from 'react';
import * as S from './AboutMain.style';
import about from '../../assets/about.png';
import building from '../../assets/building.jpg';
import companyColor from '../../assets/companyColor.png';
import MainLayout from './../common/Layout/MainLayout';

const AboutMain = () => {
  return (
    <S.CustomMain>
      <MainLayout
        icon={about}
        iconTxt="회사소개 아이콘"
        title="About"
        desc="COMPANY는 지구의 평화를 위해, 세계인과 함께 합니다."
      ></MainLayout>

      <S.Section1>
        <ul>
          <li>
            <h2>Culture</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis fugiat dolores
              ducimus, tenetur eum officiis repellendus quaerat. Tenetur accusamus ipsa perferendis
              fugit ab eligendi tempora fugiat provident at cumque? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusantium temporibus sit voluptate unde rerum ipsa
              facilis fugiat perferendis quasi iure fugit molestiae, architecto blanditiis maxime
              consectetur aspernatur consequuntur obcaecati nostrum!
            </p>
          </li>
          <li>
            <h2>Place</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit similique,
              voluptatibus itaque quibusdam tempore obcaecati aperiam dicta accusantium! Dignissimos
              odit vitae in esse rem fuga est, hic accusantium eos velit. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quia sed vel, possimus recusandae repellat beatae
              autem odit earum corrupti a, fugiat dolore natus sapiente libero odio. Sint officia
              dolore beatae.
            </p>
          </li>
          <li>
            <h2>Global</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab eos voluptates
              exercitationem fugiat voluptatem dolorem temporibus debitis illo repudiandae rem,
              repellat delectus odio consectetur, placeat eligendi. Animi, sunt distinctio! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Modi dolor dignissimos quis quo
              deserunt sunt harum quia voluptas rerum placeat! Unde dolore deserunt pariatur quis
              impedit sed, eius ab. Maxime!
            </p>
          </li>
        </ul>
        <div>
          <img src={building} alt="회사 건물 이미지" />
        </div>
      </S.Section1>

      <S.Section2>
        <h2>CEO</h2>
        <ul>
          <S.Li1>
            <button>
              <h3 className="a11y-hidden">CEO 경영자</h3>
              <span>Jain Austin Oliver</span>
            </button>
          </S.Li1>
          <S.Li2>
            <button>
              <h3 className="a11y-hidden">CEO 경영자 말씀</h3>
              <p>
                If the earth and the environment cannot coexist, <br /> we have no future
              </p>
            </button>
          </S.Li2>
        </ul>
      </S.Section2>

      <S.Section3>
        <h2>Brand</h2>
        <S.Wrap>
          <S.Brand>
            <S.Title>
              <strong>3 colors of the company</strong>
              <p>Earth, Environment, People</p>
            </S.Title>
            <S.Desc>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque
                vel eos saepe accusamus eum ipsa beatae veniam assumenda, neque esse architecto
                similique odio eligendi necessitatibus dignissimos quia quasi soluta? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolor recusandae explicabo assumenda
                adipisci? Inventore, earum. Enim, nemo omnis laudantium laborum quasi nam unde
                veritatis dolores, voluptatum doloribus, eius iusto aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos
                laborum, quae aperiam soluta illo ex obcaecati necessitatibus consectetur officiis
                reiciendis, voluptas hic error debitis quos veniam eaque velit eveniet? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Accusamus, illum possimus impedit,
                ipsam adipisci eos quae quaerat ex dolore placeat dolores, sapiente voluptas at!
                Nobis voluptate nulla qui atque laboriosam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum a quibusdam explicabo
                molestias ipsam quisquam doloribus. Ullam, necessitatibus molestias! Error aperiam
                modi minus natus, obcaecati amet cumque facere ducimus atque.
              </p>
            </S.Desc>
          </S.Brand>
          <S.Color>
            <img src={companyColor} alt="회사 상징 컬러 이미지" />
          </S.Color>
        </S.Wrap>
      </S.Section3>
    </S.CustomMain>
  );
};

export default AboutMain;
