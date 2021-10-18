import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { SELECT_CATEGORY_LIST } from '../../apollo/query';
import { Img, IProps } from '../common/CafeItem';
import { ImgCafe } from '../common/Common';

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
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-bottom: 3px;
      margin-left: 3px;
    }
  }
`;
const Icon = styled.img`
  /* width: 18px; */
`;

const CafeTagWrapper = styled.div`
  display: flex;
  margin-top: 5px;
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
  height: 60px;
  /* background-color: ${(props) => props.theme.mainColor}; */
  background-color: #ededed;
  position: absolute;
  bottom: 0;
  z-index: 3000;
  /* margin: -35px -25px; */
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    /* margin-top: -28px; */
    text-align: center;
    /* color: ${(props) => props.theme.white}; */
    color: #a5a5a5;
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
  max-height: 250px;
  overflow-y: scroll;
  padding: 0px 0px 20px 0px;
`;
const CafeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 12px;
`;

const CafeTag = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  font-size: 9px;
  height: 15px;
  font-weight: 3px;
  color: white;
  margin-right: 5px;
`;

const EmptyImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: #f6f6f6;
`;

const Title = styled.div`
  color: #d4845b;
  font-weight: bold;
`;

const Profile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50% 50%;
  background-color: #f6f6f6;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 3px;
  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    padding: 5px 10px;
  }
`;

function CafeModal({ cafe }: IProps) {
  const category: any = cafe?.category.split(',');
  category?.pop(); // 마지막 배열은 빼준다

  const { data } = useQuery(SELECT_CATEGORY_LIST);
  const category_list = data?.select_category_list.rows;
  const review = [
    {
      reviewer: '🐯',
      review:
        '구움과자를 먹으며 유럽을 가고싶게 하는.... 레몬 마들렌도..다양한 종류의 구움과자들도 진짜 너무 굳...! 너무 고급스러워서 나중에 선물용으로 하기도 좋을 것 같아요! 티를 시키면 함께 나오는 모래시계 쏘 큩....',
    },
    {
      reviewer: '🐰',
      review: '작지만 다양한 프랑스 구움과자를 즐길 수 있는 곳 🌱',
    },
    {
      reviewer: '🧸',
      review:
        '자리는 협소했지만 분위기가 따뜻하고 다양한 종류의 구움과자와 티가 있어서 좋았습니다! (개인적으로 레몬마들렌이 맛있었어요♥)',
    },
  ];

  let _category = [];
  for (let category_name of category) {
    const temp = category_list?.find((_: any) => _.category_name == category_name);
    const item = {
      category_name: temp?.category_name,
      category_color: temp?.category_color,
    };
    _category.push(item);
  }
  const review_json: [] = JSON.parse(cafe ? cafe.review_json : '');
  console.log(review_json);
  return (
    <>
      <ModalWrapper className="Wrapperwidth">
        {cafe?.is_visit ? (
          <Img
            style={{ width: '120px', marginBottom: '1px' }}
            src={`${process.env.PUBLIC_URL}/img/pick.svg`}
            onClick={() => window.open(`https://www.instagram.com/${cafe?.cafe_insta}/`)}
          />
        ) : null}
        <TitleWrapper>
          <span>
            {cafe?.cafe_name}{' '}
            {cafe?.cafe_insta ? (
              <Icon
                src={`${process.env.PUBLIC_URL}/icon/insta_logo.svg`}
                onClick={() => window.open(`https://www.instagram.com/${cafe?.cafe_insta}/`)}
              />
            ) : null}
          </span>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon src={`${process.env.PUBLIC_URL}/icon/heart/enabled.svg`} />
            <Icon src={`${process.env.PUBLIC_URL}/icon/share.svg`} />
          </div>
        </TitleWrapper>
        <CafeTagWrapper>
          {_category?.map((item: any, index: any) => (
            <CafeTag color={item.category_color} itemID={index}>
              {item.category_name}
            </CafeTag>
          ))}
        </CafeTagWrapper>

        <Address>
          <Icon src={`${process.env.PUBLIC_URL}/icon/map.svg`} />
          {cafe?.cafe_address}
        </Address>

        <CafeImgList>
          {cafe && cafe?.cafe_img.length > 0 ? (
            cafe?.cafe_img.map((item, index) => <ImgCafe src={item.cafe_img_url} />)
          ) : (
            <EmptyImg>
              <ImgCafe src={`${process.env.PUBLIC_URL}/icon/emptyImg.svg`} style={{ width: '25px' }} />
            </EmptyImg>
          )}
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
          {cafe?.is_visit ? (
            <>
              <br />
              <br />
              <Title>💬 마중크루의 한줄평!</Title>
              {review_json &&
                review_json.map((item: any) => (
                  <TextWrapper>
                    <Profile>
                      <span>{item.reviewer}</span>
                    </Profile>
                    <p>{item.review}</p>
                  </TextWrapper>
                ))}
            </>
          ) : null}
        </CafeInfo>
      </ModalWrapper>
      <InterviewButton className="Wrapperwidth">
        <span>카페 인터뷰 준비중</span>
      </InterviewButton>
    </>
  );
}

export default CafeModal;
