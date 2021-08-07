import styled from 'styled-components';
import { ImgCafe } from '../common/Common';

const ModalWrapper = styled.div`
  height: 50%;
  background-color: ${(props) => props.theme.white};
  border-radius: 16px 16px 0px 0px;
  position: absolute;
  bottom: 0;
  padding: 35px 25px;
  display: block;
  z-index: 100;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  /* width: 35px; */
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
  color: ${(props) => props.theme.gray600};
`;

const InterviewButton = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.mainColor};
  position: absolute;
  bottom: 0;
  margin: -35px -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-top: -28px;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`;

const CafeImgList = styled.div`
  display: flex;
  margin-top: 10px;
  overflow-x: scroll;
`;

const CafeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const CafeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 12px;
`;

const testArr = [1, 2, 3, 4, 5, 6];
const cafeInfo = [
  { icon: 'review', text: '649개의 방문자 리뷰' },
  { icon: 'parking', text: '주차 가능' },
  { icon: 'delivery', text: '배달 가능' },
  { icon: 'food', text: '매장 내 식사 가능' },
];

function CafeModal() {
  return (
    <ModalWrapper className="Wrapperwidth">
      <TitleWrapper>
        <span>카페 우드진</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon src={`${process.env.PUBLIC_URL}/icon/heart/enabled.svg`} />
          <Icon src={`${process.env.PUBLIC_URL}/icon/cancel.svg`} />
        </div>
      </TitleWrapper>
      <Address>
        <Icon src={`${process.env.PUBLIC_URL}/icon/map.svg`} />
        서울 강서구 마곡중앙6로 45 리더스퀘어 1층 113...
      </Address>

      <CafeImgList>
        {testArr.map((item, index) => (
          <ImgCafe src={`${process.env.PUBLIC_URL}/img/cafe.jpg`} />
        ))}
      </CafeImgList>

      <CafeInfo>
        {cafeInfo.map((item, index) => (
          <CafeTextWrapper>
            <Icon src={`${process.env.PUBLIC_URL}/icon/${item.icon}.svg`} />
            <span>{item.text}</span>
          </CafeTextWrapper>
        ))}
      </CafeInfo>

      <InterviewButton>
        <span>카페 인터뷰 보기</span>
      </InterviewButton>
    </ModalWrapper>
  );
}

export default CafeModal;
