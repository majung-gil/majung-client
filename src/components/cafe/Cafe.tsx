import { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../common/Header';

const ModalWrapper = styled.div`
  height: 65%;
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

function Cafe() {
  useEffect(() => {
    const location = [{ x: 37.560616811298324, y: 126.83266169049234 }];

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.56019115294959, 126.83112338892903),
      zoom: 16,
    };

    const map = new window.naver.maps.Map('map', mapOptions);
    location.forEach((item) => {
      const markerOptions = {
        position: new window.naver.maps.LatLng(item.x, item.y),
        map,
        icon: {
          url: `${process.env.PUBLIC_URL}/img/cafe_pin.svg`,
          size: new window.naver.maps.Size(40, 42),
          origin: new window.naver.maps.Point(0, 0),
          anchor: new window.naver.maps.Point(25, 26),
        },
      };
      // 마커를 생성합니다
      const marker = new window.naver.maps.Marker(markerOptions);
    });
  }, []);
  return (
    <>
      <Header />
      <div id="map" style={{ width: '100%', height: '40%', zIndex: 2, overflow: 'hidden' }} />
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
        <InterviewButton>
          <span>카페 인터뷰 보기</span>
        </InterviewButton>
      </ModalWrapper>
    </>
  );
}

export default Cafe;
