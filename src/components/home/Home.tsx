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
  const loca = CafeList?.map((_: any) => ({
    x: _.cafe_lng,
    y: _.cafe_lat,
    cafe_idx: _.cafe_idx,
    cafe_name: _.cafe_name,
  }));
  if (CafeList && loca) {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.56019115294959, 126.83112338892903),
      zoom: 13,
    };

    const map = new window.naver.maps.Map('map', mapOptions);
    loca.forEach((item: any) => {
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
      console.log(item);
      const contentString = [
        `<div style="background: #FFFFFF; border: 3px solid #EEB79B; padding: 10px; border-radius: 7px; margin-bottom: 5px">
        <a href="http://majung-gil.com/cafe/${item.cafe_idx}" style="text-decoration: none;">
        <p>☕️ ${item.cafe_name}</p></a>
        </div>`,
      ].join('');

      const infowindow = new window.naver.maps.InfoWindow({
        content: contentString,
        disableAnchor: true,
        borderWidth: 0,
        borderColor: null,
        backgroundColor: null,
      });

      window.naver.maps.Event.addListener(marker, 'click', function (e: any) {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });
    });
  }
  return (
    <>
      <TopHome />
      <div id="map" style={{ width: '100%', height: '100%', zIndex: 2, overflow: 'hidden' }} />
      <CafeCardListWrapper className="Wrapperwidth">
        {CafeList && CafeList.map((cafe: any) => <CafeItem cafe={cafe} />)}
      </CafeCardListWrapper>
    </>
  );
}

export default Home;
