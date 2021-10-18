import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ImgChracter } from '../common/Common';
import SideMenu from '../sidemenu/Sidemenu';

// 마중 상단 영역
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 120px;
  padding: 15px 20px;
  border-radius: 16px;
  background: #fbfbfb;
  border: 1px solid rgba(241, 243, 245, 0.4);
  box-shadow: 4.4698px 4.4698px 9.38657px -3.57584px #ccd3d7;
  background-color: ${(props) => props.theme.white};
`;

const Top = styled.div`
  /* width: 95%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  padding: 15px 10px;
  z-index: 200;
  height: 20%;
`;

// 상단 툴바
const Toolbar = styled.div`
  flex: 1;
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;
const IconCoffe = styled.div`
  margin-left: auto;
`;

const IconHeart = styled.div`
  margin-right: 5px;
`;
const IconSort = styled.div`
  margin-left: 5px;
`;

// 상단 타이틀
const TopTitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: 28px;
    letter-spacing: 2.5px;
    color: ${(props) => props.theme.mainColor};
  }
  span {
    font-size: 14px;
    margin-top: 8px;
    font-weight: 20px;
    color: ${(props) => props.theme.gray600};
  }
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Icon = styled.img``;

function TopHome() {
  const history = useHistory();

  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setModalState(false);
  };

  return (
    <>
      <SideMenu data="" state={modalState} closeModal={closeModal} />
      <Top className="Wrapperwidth">
        <TopWrapper>
          <Toolbar>
            <IconHeart>
              <Icon src={`${process.env.PUBLIC_URL}/icon/heart.svg`} onClick={() => history.push('/favorite')} />
            </IconHeart>
            <IconCoffe>
              <Icon
                alt="today_img"
                src={`${process.env.PUBLIC_URL}/icon/search.svg`}
                onClick={() => history.push('/search')}
              />
            </IconCoffe>
            <IconSort>
              <Icon onClick={openModal} src={`${process.env.PUBLIC_URL}/icon/sidemenu.svg`} />
            </IconSort>
          </Toolbar>
          <TopTitleWrapper>
            <h3>마중</h3>
            <span>따뜻한 오후, 커피 한 잔 어떠세요?</span>
            <ImgChracter src={`${process.env.PUBLIC_URL}/img/ch.png`} />
          </TopTitleWrapper>
        </TopWrapper>
      </Top>
    </>
  );
}

export default TopHome;
