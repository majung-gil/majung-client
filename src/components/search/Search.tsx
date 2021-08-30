import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { SELECT_CAFE_CURATION, SELECT_CAFE_LIST } from '../../apollo/query';
import CafeItem from '../common/CafeItem';
import SearchBanner from './SearchBanner';
import SearchHeader from './SearchHeader';

const SearchWrapper = styled.div`
  padding: 20px;
  height: 100%;
  overflow-y: scroll;
`;

const ItemWrapper = styled.div`
  margin-top: 35px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #161616;
    font-weight: 2500;
    font-size: 15px;
  }
`;
const Icon = styled.img`
  width: 20px;
  transform: rotate(90deg);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: 'FlipH';
`;

const CafeCardListWrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

function Search() {
  let cafe_item = {
    cafe_photo: [],
    cafe_dessert: [],
    cafe_coffee: [],
  };

  const cafe_photo = useQuery(SELECT_CAFE_CURATION, {
    variables: { category_idx: 1 },
  });
  const cafe_dessert = useQuery(SELECT_CAFE_CURATION, {
    variables: { category_idx: 2 },
  });
  const cafe_coffee = useQuery(SELECT_CAFE_CURATION, {
    variables: { category_idx: 4 },
  });
  console.log(cafe_photo);

  //...
  if (cafe_photo.loading) {
    console.log('Loading list of products');
  } else {
    cafe_item.cafe_photo = cafe_photo.data.select_cafe_category.rows;
  }

  //...
  if (cafe_dessert.loading) {
    console.log('Loading list of categories');
  } else {
    console.log(cafe_dessert.data.select_cafe_category.rows);
    cafe_item.cafe_dessert = cafe_dessert.data.select_cafe_category.rows;
  }

  if (cafe_coffee.loading) {
    console.log('Loading list of categories');
  } else {
    console.log(cafe_coffee.data.select_cafe_category.rows);
    cafe_item.cafe_coffee = cafe_coffee.data.select_cafe_category.rows;
  }

  return (
    <>
      <SearchHeader />
      <SearchWrapper>
        <SearchBanner />
        <ItemWrapper>
          <Text>
            <span> ☕️ 커피랑 음료 찐 맛집!</span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {cafe_item && cafe_item?.cafe_coffee.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <Text>
            <span> 📸 인스타갬성 취저! 사진찍기 좋아요!</span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {cafe_item && cafe_item?.cafe_photo.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <Text>
            <span> 디저트 맛집! 🧇🍰🍩 </span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {cafe_item && cafe_item?.cafe_dessert.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>
      </SearchWrapper>
    </>
  );
}

export default Search;
