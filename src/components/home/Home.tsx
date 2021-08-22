/* eslint import/newline-after-import: "off" */
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import styled from 'styled-components';
import { SELECT_CAFE_LIST } from '../../apollo/query';
import useCafeList from '../../apollo/use';
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
  /* height: 154px; */
`;

const testArr = [1, 2, 3, 4, 5, 6];

declare global {
  interface Window {
    naver: any;
  }
}

function Home() {
  const { loading, error, data } = useQuery(SELECT_CAFE_LIST);
  const CafeList = data?.select_cafe_list.rows;
  console.log(CafeList);
  useEffect(() => {
    const location = [
      { x: 37.560616811298324, y: 126.83266169049234 },
      { x: 37.56034206104102, y: 126.82954983751986 },
      { x: 37.56023090308679, y: 126.83056871492835 },
      { x: 37.56017915499369, y: 126.83218731166463 },
      { x: 37.55873036659889, y: 126.8271994025298 },
    ];

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
      <TopHome />
      <div id="map" style={{ width: '100%', height: '100%', zIndex: 2, overflow: 'hidden' }} />
      <CafeCardListWrapper className="Wrapperwidth">
        {CafeList.map((item: any) => (
          <CafeItem item={item} />
        ))}
      </CafeCardListWrapper>
    </>
  );
}

export default Home;
