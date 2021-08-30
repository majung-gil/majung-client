import styled from 'styled-components';
import { IProps } from '../common/CafeItem';
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
  { icon: 'parking', text: '주차 가능' },
  { icon: 'delivery', text: '배달 가능' },
];

function CafeModal({ cafe }: IProps) {
  console.log(cafe);
  return (
    <ModalWrapper className="Wrapperwidth">
      <TitleWrapper>
        <span>{cafe?.cafe_name}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon src={`${process.env.PUBLIC_URL}/icon/heart/enabled.svg`} />
          <Icon src={`${process.env.PUBLIC_URL}/icon/cancel.svg`} />
        </div>
      </TitleWrapper>
      <Address>
        <Icon src={`${process.env.PUBLIC_URL}/icon/map.svg`} />
        {cafe?.cafe_address}
      </Address>

      <CafeImgList>
        {testArr.map((item, index) => (
          <ImgCafe src={`${process.env.PUBLIC_URL}/img/cafe.jpg`} />
        ))}
      </CafeImgList>

      <CafeInfo>
        <CafeTextWrapper>
          <Icon src={`${process.env.PUBLIC_URL}/icon/call.svg`} />
          <span>{cafe?.cafe_phone}</span>
        </CafeTextWrapper>
        <CafeTextWrapper>
          <Icon src={`${process.env.PUBLIC_URL}/icon/time.svg`} />
          <span>
            {cafe?.cafe_open_time ? cafe?.cafe_open_time + ' ~ ' + cafe?.cafe_close_time : '영업시간 정보없음'}
          </span>
        </CafeTextWrapper>
        <CafeTextWrapper>
          <Icon src={`${process.env.PUBLIC_URL}/icon/parking.svg`} />
          <span>{cafe?.is_parking ? '주차 가능' : '주차 불가능'}</span>
        </CafeTextWrapper>
        <CafeTextWrapper>
          <Icon src={`${process.env.PUBLIC_URL}/icon/delivery.svg`} />
          <span>{cafe?.is_delivery ? '배달 가능' : '배달 불가능'}</span>
        </CafeTextWrapper>
      </CafeInfo>

      <InterviewButton>
        <span>카페 인터뷰 보기</span>
      </InterviewButton>
    </ModalWrapper>
  );
}

export default CafeModal;
