import styled from 'styled-components';

const ModalWrapper = styled.div`
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

      <Profile>이유진</Profile>
      <hr />
      <span>🔎 검색</span>
      <span>💙 관심 카페</span>
      <span>🚪 로그아웃</span>
      <hr />
      <span>🍩 마중이들</span>
      <span>💌 사용자 피드백</span>
      <span>⚙️ 업데이트 정보</span>

      <Info>
        <span>instagram</span>
        <span>mail</span>
      </Info>
    </ModalWrapper>
  ) : (
    <></>
  );
}

export default SideMenu;
