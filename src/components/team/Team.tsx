import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d4845b;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  letter-spacing: 2.5px;
  margin-bottom: 30px;
`;

const SubHeading = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 2.5px;
`;

const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

const Emoji = styled.div`
  background: #f6f6f6;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  span {
    margin-top: 6px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f6f6f6;
  width: 100%;
  border-radius: 8px;
  margin: 8px;
  line-height: 25px;
  b {
    font-weight: 500;
    color: #2f80ed;
    font-size: 19px;
    margin-bottom: 10px;
  }
  p {
    line-height: 25px;
    color: #27282a;
  }
`;

const SubText = styled.div`
  padding: 20px;
  background: #f6f6f6;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
  margin-top: 10px;
  text-align: center;
`;

const Max = styled.div`
  overflow: scroll;
`;

function Team() {
  return (
    <Wrapper>
      <Title>서쪽친구들</Title>

      <Max>
        <PeopleWrapper>
          <Emoji>
            <span>🐯</span>
          </Emoji>
          <Text>
            <b>랑호</b>
            <p>
              뇽하! 뭐든 개발로 만들어나가는 것을 좋아합니다..잼있어요 깔깔 ...그렇다구요 ^_^ 사진 찍는 것두 좋아하고
              수다 떠는 것도 너무 조아해여 회사 다니면서 일 벌리는게 요즘 취미입니다 🤭 많관부
            </p>
          </Text>
        </PeopleWrapper>

        <PeopleWrapper>
          <Text>
            <b>펩시</b>
            <p>
              안녕하세요:) 노는 게 제일 좋은 21살 현대판 베짱이, 이소민입니다! 기타 치고 그림 그리는 것, 사진 찍는 것 다
              좋아해요ෆ 사실 공부빼고는 다 재밌어요!! 대학생활이 다 그런 거 아닌가요?🙄? And I also 공강 좋아 ᕕ( ᐛ )ᕗ
            </p>
          </Text>
          <Emoji>
            <span>👾</span>
          </Emoji>
        </PeopleWrapper>

        <PeopleWrapper>
          <Emoji>
            <span>🐭</span>
          </Emoji>
          <Text>
            <b>오물</b>
            <p>
              Hi~ 나는 ESFJ 계획적이면서도 아닌 거 같은 오물입니다ㅏ 대학교 친구는 없지만..^^ 랑호와 펩시가 있어서
              ㅈ..좋아요.. 손재주가 좋고 풍경 사진 찍는 것을 좋아해요! 아 공부도 아주 잘 할 예정입니다 😊 아 그리고
              대학교 인싸가 되는 게 제 꿈이랍니다
            </p>
          </Text>
        </PeopleWrapper>

        <SubWrapper>
          <SubHeading>함께해주신 마중크루 ♥️</SubHeading>
          <SubText>🐕 한영님 🐻 영유님 🥑 소현님 🐰 민성님 ☃️ 성주님</SubText>
        </SubWrapper>

        <SubWrapper>
          <SubHeading>Special Thanks To ♥️</SubHeading>
          <SubText>
            👶🏻뽀짝한 마중이를 탄생시켜준 윤줜 <br />
            🗺지도 디자인을 맡아준 소진 <br />
            💰마중길의 시작이 되었던 10만원 프로젝트
          </SubText>
        </SubWrapper>
      </Max>
    </Wrapper>
  );
}

export default Team;
