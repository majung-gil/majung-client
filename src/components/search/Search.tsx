import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { SELECT_CAFE_LIST } from '../../apollo/query';
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

const testArr = [1, 2, 3, 4, 5, 6];
function Search() {
  const { data } = useQuery(SELECT_CAFE_LIST);
  const CafeList = data?.select_cafe_list.rows;
  console.log(CafeList);

  return (
    <>
      <SearchHeader />
      <SearchWrapper>
        <SearchBanner />
        <ItemWrapper>
          <Text>
            <span> 💻 노트북 하기 좋아요!</span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {CafeList && CafeList.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <Text>
            <span> 💓 분위기 깡패, 카페 추천! </span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {CafeList && CafeList.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <Text>
            <span> 디저트 맛집! 🧇🍰🍩 </span>
            <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
          </Text>

          <CafeCardListWrapper className="Wrapperwidth">
            {CafeList && CafeList.map((cafe: any) => <CafeItem cafe={cafe} />)}
          </CafeCardListWrapper>
        </ItemWrapper>
      </SearchWrapper>
    </>
  );
}

export default Search;
