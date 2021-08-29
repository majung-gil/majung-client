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
      <div id="map" style={{ width: '100%', height: '50%', zIndex: 2, overflow: 'hidden' }} />
      {cafe ? <CafeModal cafe={cafe} /> : null}
    </>
  );
}

export default Cafe;
