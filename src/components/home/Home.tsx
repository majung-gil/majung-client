/* eslint import/newline-after-import: "off" */
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SELECT_CAFE_LIST } from '../../apollo/query';
import CafeItem from '../common/CafeItem';
import TopHome from './TopHome';
import { css } from '@emotion/react';
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

declare global {
  interface Window {
    naver: any;
  }
}
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Home() {
  const { loading, error, data } = useQuery(SELECT_CAFE_LIST);
  const CafeList = data?.select_cafe_list.rows;

  let [color, setColor] = useState('#ffffff');

  if (CafeList) {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.56019115294959, 126.83112338892903),
      zoom: 13,
    };

    const map = new window.naver.maps.Map('map', mapOptions);
    CafeList.forEach((item: any) => {
      let markerOptions;
      if (item.is_visit) {
        markerOptions = {
          position: new window.naver.maps.LatLng(item.cafe_lng, item.cafe_lat),
          map,
          icon: {
            url: `${process.env.PUBLIC_URL}/img/cafe_pin.svg`,
            size: new window.naver.maps.Size(40, 42),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(25, 26),
          },
        };
      } else {
        markerOptions = {
          position: new window.naver.maps.LatLng(item.cafe_lng, item.cafe_lat),
          map,
          icon: {
            url: `${process.env.PUBLIC_URL}/img/cafe_pin_not.svg`,
            size: new window.naver.maps.Size(40, 42),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(25, 26),
          },
        };
      }
      // 마커를 생성합니다
      const marker = new window.naver.maps.Marker(markerOptions);
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
      <div className="Wrapperwidth">
        <TopHome />
      </div>
      {/* {loading ? (
        <div style={{ marginTop: '350px', height: '100vh' }}>
          <PacmanLoader color={color} loading={loading} css={override} size={150} />
        </div>
      ) : null} */}
      <div id="map" style={{ width: '100%', height: '100%', zIndex: 2, overflow: 'hidden' }} />
      <CafeCardListWrapper className="Wrapperwidth">
        {CafeList &&
          CafeList.map((cafe: any) =>
            cafe && cafe.cafe_img.length > 0 ? <CafeItem cafe={cafe} idx={cafe.cafe_idx} /> : null,
          )}
      </CafeCardListWrapper>
    </>
  );
}

export default Home;
