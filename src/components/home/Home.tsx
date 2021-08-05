/* eslint import/newline-after-import: "off" */
import { useEffect } from 'react';
import styled from 'styled-components';

// 전체 영역
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

// 마중 상단 영역
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 15px 25px;
  border-radius: 16px;
  background: #fbfbfb;
  border: 1px solid rgba(241, 243, 245, 0.4);
  box-shadow: 4.4698px 4.4698px 9.38657px -3.57584px #ccd3d7;
  background-color: ${(props) => props.theme.white};
`;

const Top = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 25px;
  padding: 5px 10px;
  z-index: 200;
  height: 15%;
`;

// 상단 툴바
const Toolbar = styled.div`
  flex: 1;
  display: flex;
  /* width: 100%; */
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;
const IconHeart = styled.div`
  margin-left: auto;
`;
const IconCoffe = styled.div`
  margin-left: auto;
`;
const IconSort = styled.div`
  margin-left: 5px;
`;

// 상단 타이틀
const TopTitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: 28px;
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
`;

// 하단 카페리스트 영역
const CafeCardListWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 15px 15px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  z-index: 200;
  height: 154px;
`;

const CafeCardWrpper = styled.div`
  margin: 5px;
  flex: 0 0 auto;
  width: 132px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 0.6px solid #e3e7e9;
  box-shadow: 0 10px 20px #e3e7e9, 0 6px 6px #e3e7e9;
  background-color: #fbfbfb;
`;

const CafeCardTop = styled.div`
  /* flex: 0.4; */
  border-radius: 20px 20px 0px 0px;
  display: flex;
  padding: 15px 13px;
  align-items: center;
  justify-content: space-between;
`;

const CafeCardName = styled.div`
  flex: 0.5;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.gray800};
  margin-bottom: 10px;
`;
const CafeCardImg = styled.div`
  /* flex: 1.8; */
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.img``;

const CafeTag = styled.div`
  background-color: #ffb076;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 12px;
  /* padding: 5px 15px; */
  font-size: 9px;
  /* width: 40px; */
  height: 15px;
  font-weight: 3px;
  color: white;
`;

const testArr = [1, 2, 3, 4, 5, 6];

declare global {
  interface Window {
    kakao: any;
  }
}

function Home() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.56019115294959, 126.83112338892903),
      level: 3,
    };

    const imageSrc = `${process.env.PUBLIC_URL}/img/cafe_pin.svg`; // 마커이미지의 주소입니다
    const imageSize = new window.kakao.maps.Size(50, 54); // 마커이미지의 크기입니다
    const imageOption = { offset: new window.kakao.maps.Point(27, 54) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const map = new window.kakao.maps.Map(container, options);
    const markerPosition = new window.kakao.maps.LatLng(37.560616811298324, 126.83266169049234);

    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    marker.setMap(map);
  }, []);

  return (
    // <Wrapper>
    <>
      <Top>
        <TopWrapper>
          <Toolbar>
            <IconCoffe>
              <Icon alt="today_img" src={`${process.env.PUBLIC_URL}/icon/search.svg`} />
            </IconCoffe>
            <IconSort>
              <Icon alt="today_img" src={`${process.env.PUBLIC_URL}/icon/sidemenu.svg`} />
            </IconSort>
          </Toolbar>
          <TopTitleWrapper>
            <h3>마중</h3>
            <span>따뜻한 오후, 커피 한 잔 어떠세요?</span>
          </TopTitleWrapper>
        </TopWrapper>
      </Top>
      <div id="map" style={{ width: '100%', height: '100%', zIndex: 2, overflow: 'hidden' }} />
      <CafeCardListWrapper className="cardList">
        {testArr.map((item, index) => (
          <CafeCardWrpper>
            <CafeCardTop>
              <CafeTag>친절한</CafeTag>
              <Icon src={`${process.env.PUBLIC_URL}/icon/heart/unabled.svg`} />
            </CafeCardTop>

            <CafeCardName>카페 우드진</CafeCardName>

            <CafeCardImg>
              <Img alt="write_icon" src="https://www.thinkfood.co.kr/news/photo/202007/88177_114044_267.jpg" />
            </CafeCardImg>
          </CafeCardWrpper>
        ))}
      </CafeCardListWrapper>
    </>
    // </Wrapper>
  );
}

export default Home;
