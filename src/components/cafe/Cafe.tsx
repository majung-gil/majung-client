/* eslint import/newline-after-import: "off" */
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SELECT_CAFE_LIST, SELECT_CAFE_ONE } from '../../apollo/query';
import Header from '../common/Header';
import CafeModal from './CafeModal';

function Cafe() {
  const params: any = useParams();
  const { loading, error, data } = useQuery(SELECT_CAFE_ONE, {
    variables: { cafe_idx: Number(params.cafe_idx) },
  });
  const cafe = data?.select_cafe;
  if (cafe && cafe?.cafe_lat) {
    const location = [{ x: cafe?.cafe_lng, y: cafe?.cafe_lat }];

    const mapOptions = {
      center: new window.naver.maps.LatLng(cafe?.cafe_lng, cafe?.cafe_lat),
      zoom: 17,
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
  }

  return (
    <>
      <Header />
      <div id="map" style={{ width: '100%', height: '40%', zIndex: 2, overflow: 'hidden' }} />
      {cafe ? <CafeModal cafe={cafe} idx={cafe.cafe_idx} /> : null}
    </>
  );
}

export default Cafe;
