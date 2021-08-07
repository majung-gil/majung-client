import styled from 'styled-components';
import FavoriteHeader from './FavoriteHeader';

const FavoriteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`;

const FavoriteCafeItem = styled.img`
  border-radius: 8px;
  width: 150px;
  height: 150px;
`;

const CafeName = styled.div`
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 150px;
  border: 1px solid rgba(192, 192, 192, 0.6);
  border-top: none;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.mainColor};
  font-size: 14px;
`;

const Cafe = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  margin: 5px;
`;

const testArr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

function Favorite() {
  return (
    <>
      <FavoriteHeader />
      <FavoriteWrapper>
        {testArr.map((item, index) => (
          <>
            <Cafe>
              <FavoriteCafeItem src={`${process.env.PUBLIC_URL}/img/cafe.jpg`} />
              <CafeName>남대문커피</CafeName>
            </Cafe>
            <Cafe>
              <FavoriteCafeItem src="https://mp-seoul-image-production-s3.mangoplate.com/586167_1600665631094364.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80" />
              <CafeName>카페 우드진</CafeName>
            </Cafe>
            <Cafe>
              <FavoriteCafeItem src="https://mp-seoul-image-production-s3.mangoplate.com/586167_1600665631094364.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80" />
              <CafeName>카페 우드진</CafeName>
            </Cafe>
            <Cafe>
              <FavoriteCafeItem src={`${process.env.PUBLIC_URL}/img/cafe.jpg`} />
              <CafeName>남대문커피</CafeName>
            </Cafe>
          </>
        ))}
      </FavoriteWrapper>
    </>
  );
}

export default Favorite;
