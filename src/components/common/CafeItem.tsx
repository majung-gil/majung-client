import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CafeCardWrpper = styled.div`
  margin: 5px;
  flex: 0 0 auto;
  width: 132px;
  height: 154px;
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
  max-height: 10px;
`;
const CafeCardImg = styled.div`
  /* flex: 1.8; */
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Icon = styled.img``;

const CafeTag = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  /* padding: 5px 15px; */
  font-size: 9px;
  /* width: 40px; */
  height: 15px;
  font-weight: 3px;
  color: white;
`;

export const Img = styled.img`
  width: 100%;
  position: relative;
  /* top: -20px; */
  /* height: 100%; */
`;

export const EmptyImg = styled.img`
  width: 25px;
  /* position: relative;
  top: -20px; */
`;

declare global {
  interface Window {
    kakao: any;
  }
}
export interface IProps {
  cafe?: {
    cafe_idx: number;
    cafe_name: string;
    cafe_phone: string;
    cafe_address: string;
    cafe_lat: number;
    cafe_lng: number;
    category: string;
    is_parking: boolean;
    is_delivery: boolean;
    is_eat: boolean;
    is_visit: boolean;
    cafe_open_time: string;
    cafe_close_time: string;
    cafe_insta: string;
    cafe_img: [
      {
        cafe_idx: number;
        cafe_img_idx: number;
        cafe_img_url: string;
      },
    ];
    rep_category: {
      category_color: string;
    };
  };
}

function CafeItem({ cafe }: IProps) {
  const history = useHistory();
  const temp: any = cafe?.category.split(',');
  const category = temp[0];
  return (
    <CafeCardWrpper onClick={() => history.push(`/cafe/${cafe?.cafe_idx}`)}>
      <CafeCardTop>
        <CafeTag color={cafe?.rep_category.category_color}>{category}</CafeTag>
        <Icon src={`${process.env.PUBLIC_URL}/icon/heart/unabled.svg`} />
      </CafeCardTop>

      <CafeCardName>{cafe?.cafe_name}</CafeCardName>

      <CafeCardImg>
        {cafe && cafe.cafe_img.length > 0 ? (
          <Img alt="write_icon" src={cafe?.cafe_img[0].cafe_img_url} />
        ) : (
          <EmptyImg src={`${process.env.PUBLIC_URL}/icon/emptyImg.svg`} />
        )}
      </CafeCardImg>
    </CafeCardWrpper>
  );
}

export default CafeItem;
