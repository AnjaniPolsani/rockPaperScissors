import {MainContainer, Cont1, Text, ScoreText} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <MainContainer>
      <Cont1>
        <Text>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </Text>
      </Cont1>
      <Cont1>
        <ScoreText>Score</ScoreText>
        <ScoreText>{score}</ScoreText>
      </Cont1>
    </MainContainer>
  )
}
export default Header
