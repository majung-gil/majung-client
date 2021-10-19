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

const SearchInput = styled.input`
  margin-top: 10px;
  background: #f6f6f6;
  border-radius: 17px;
  height: 34px;
  background-image: url('${process.env.PUBLIC_URL}/icon/searchgray.svg');
  background-position: 5px center;
  background-repeat: no-repeat;
  padding-left: 30px;
  background-size: 26px;
  background-position: top 15px;
  color: red;

  ::placeholder {
    color: #d5d5d5;
    font-size: 14px;
  }
`;

function SearchHeader() {
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
      <SearchInput type="text" name="title" placeholder="가고 싶은 카페가 있나요? (업뎃예정!)" />
      {/* <Between>
        <Icon src={`${process.env.PUBLIC_URL}/icon/heart/unabled.svg`} />
      </Between> */}
    </Wrapper>
  );
}

export default SearchHeader;
