/* eslint import/newline-after-import: "off" */
import { useEffect } from 'react';
import styled from 'styled-components';
import CafeItem from '../common/CafeItem';
import TopHome from './TopHome';

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

const testArr = [1, 2, 3, 4, 5, 6];

declare global {
  interface Window {
    kakao: any;
  }
}

function Home() {
  useEffect(() => {
    const location = [
      { x: 37.560616811298324, y: 126.83266169049234 },
      { x: 37.56034206104102, y: 126.82954983751986 },
      { x: 37.56023090308679, y: 126.83056871492835 },
      { x: 37.56017915499369, y: 126.83218731166463 },
      { x: 37.55873036659889, y: 126.8271994025298 },
    ];

    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.56019115294959, 126.83112338892903),
      level: 3,
    };

    const imageSrc = `${process.env.PUBLIC_URL}/img/cafe_pin.svg`; // 마커이미지의 주소입니다
    const imageSize = new window.kakao.maps.Size(50, 54); // 마커이미지의 크기입니다
    const imageOption = { offset: new window.kakao.maps.Point(27, 54) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const map = new window.kakao.maps.Map(container, options);

    location.forEach((item) => {
      const markerPosition = new window.kakao.maps.LatLng(item.x, item.y);

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      marker.setMap(map);
    });
  }, []);

  return (
    <>
      <TopHome />
      <div id="map" style={{ width: '100%', height: '100%', zIndex: 2, overflow: 'hidden' }} />
      <CafeCardListWrapper className="cardList">
        {testArr.map((item, index) => (
          <CafeItem />
        ))}
      </CafeCardListWrapper>
    </>
  );
}

export default Home;
