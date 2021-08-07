import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #f1f3f5;
`;

const Between = styled.div`
  color: ${(props) => props.theme.gray100};
  height: 56px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 35px;
`;

function FavoriteHeader() {
  const history = useHistory();
  return (
    <Wrapper>
      <Between
        onClick={() => {
          history.goBack();
        }}
      >
        <Icon src={`${process.env.PUBLIC_URL}/icon/back.svg`} />
      </Between>
      <span>관심 카페</span>
      <Between>
        <Icon src={`${process.env.PUBLIC_URL}/icon/sidemenu.svg`} />
      </Between>
    </Wrapper>
  );
}

export default FavoriteHeader;
