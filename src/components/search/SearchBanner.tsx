import styled from 'styled-components';
import { ImgBannerChracter } from '../common/Common';

const Banner = styled.div`
  height: 63px;
  background: #f6f6f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.theme.mainColor};
    font-weight: bold;
  }
  margin-top: 10px;
`;

function SearchBanner() {
  return (
    <>
      <Banner>
        <ImgBannerChracter src={`${process.env.PUBLIC_URL}/img/ch.png`} />
        <span>마중이가 카페를 추천해드려요!</span>
      </Banner>
    </>
  );
}

export default SearchBanner;
