import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import PlayItem from '../PlayItem'

import 'reactjs-popup/dist/index.css'

import {
  ResultContainer,
  Container1,
  ResultLabel,
  ResultImage,
  ResultText,
  PlayAgainButton,
  MainContainer,
  PopupContainer,
  PopupContainer1,
  ImageContainer,
  UnorderedList,
  CloseButton,
  ButtonRules,
  Image,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    choice: '',
    opponent: '',
    isWon: false,
    isLost: false,
    isDraw: false,
    isPlaying: true,
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: true, isWon: false, isLost: false, isDraw: false})
  }

  renderResultView = () => {
    const {choice, opponent, isWon, isLost, isDraw} = this.state
    const choiceItem = choicesList.filter(each => each.id === choice)
    const you = choiceItem[0]
    return (
      <ResultContainer>
        <Container1>
          <ResultLabel>YOU</ResultLabel>
          <ResultImage alt="your choice" src={you.imageUrl} />
          <ResultLabel>OPPONENT</ResultLabel>
          <ResultImage alt="opponent choice" src={opponent.imageUrl} />
        </Container1>
        <ResultText>
          {isWon && 'YOU WON'}
          {isLost && 'YOU LOSE'}
          {isDraw && 'IT IS DRAW'}
        </ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  onPlay = id => {
    const generatedId1 = Math.floor(Math.random() * 3)
    console.log(choicesList[generatedId1].id)
    console.log(id)
    const generatedId = choicesList[generatedId1].id
    this.setState({
      choice: id,
      opponent: choicesList[generatedId1],
      isPlaying: false,
    })
    if (id === 'ROCK' && generatedId === 'SCISSORS') {
      this.setState({isWon: true})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'ROCK' && generatedId === 'PAPER') {
      this.setState({isLost: true})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && generatedId === 'ROCK') {
      this.setState({isLost: true})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && generatedId === 'PAPER') {
      this.setState({isWon: true})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'PAPER' && generatedId === 'SCISSORS') {
      this.setState({isLost: true})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'PAPER' && generatedId === 'ROCK') {
      this.setState({isWon: true})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isDraw: true})
    }
  }

  render() {
    const {
      score,

      isPlaying,
    } = this.state

    return (
      <MainContainer>
        <Header score={score} />
        <Container1>
          {isPlaying ? (
            <UnorderedList className="cont1">
              {choicesList.map(each => (
                <PlayItem details={each} key={each.id} onPlay={this.onPlay} />
              ))}
            </UnorderedList>
          ) : (
            this.renderResultView()
          )}
        </Container1>
        <PopupContainer>
          <Popup modal trigger={<ButtonRules>RULES</ButtonRules>}>
            {close => (
              <PopupContainer1>
                <CloseButton
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <RiCloseLine size={20} color="#231f20" />
                </CloseButton>
                <ImageContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ImageContainer>
              </PopupContainer1>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
