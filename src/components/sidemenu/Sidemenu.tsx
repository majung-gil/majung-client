import styled from 'styled-components';

const ModalWrapper = styled.div`
  @media screen and (min-width: 769px) {
    height: 100%;
    width: 160px;
    background: #ffffff;
    position: absolute;
    z-index: 300;
    left: 50;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 14px;
    hr {
      border: 1px solid #f1f3f5;
      margin-top: 25px;
    }
    span {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 160px;
    background: #ffffff;
    position: absolute;
    z-index: 300;
    right: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 14px;
    hr {
      border: 1px solid #f1f3f5;
      margin-top: 25px;
    }
    span {
      margin-top: 30px;
    }
  }
`;

const Icon = styled.img`
  width: 35px;
`;

const Profile = styled.div`
  margin-top: 15px;
`;

const Info = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    color: #adb5bd;
  }
`;

function SideMenu(props: { data: any; state: any; closeModal: any }) {
  const { data, state, closeModal } = props;

  return state ? (
    <ModalWrapper>
      <Icon src={`${process.env.PUBLIC_URL}/icon/cancel.svg`} onClick={(event) => closeModal(event)} />
      <Profile>안녕하세요!</Profile>
      <hr />
      <span>
        <a href="/search">🔎 검색</a>
      </span>
      <span>
        <a href="/favorite">💙 관심 카페</a>
      </span>
      {/* <span>🚪 로그아웃</span>  */}
      <hr />
      <span>
        <a href="/team">🍩 마중이들</a>
      </span>
      <span>
        <a href="https://forms.gle/M9kunLP7drsUhm9M8" target="_blank">
          💌 사용자 피드백
        </a>
      </span>
      <span>⚙️ 업데이트 정보</span>
      <Info>
        <span>
          <a href="https://www.instagram.com/majung_gil/" target="_blank">
            instagram
          </a>
        </span>
        <span>
          <a href="mailto:westernfriends21@gmail.com">mail</a>
        </span>
      </Info>
    </ModalWrapper>
  ) : (
    <></>
  );
}

export default SideMenu;
