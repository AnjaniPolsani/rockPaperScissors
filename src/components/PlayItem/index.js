import {ListItem, Button, Image} from './styledComponents'

const PlayItem = props => {
  const {details, onPlay} = props
  const {id, imageUrl} = details
  const onPlaying = () => {
    onPlay(id)
  }
  return (
    <ListItem>
      <Button
        type="button"
        onClick={onPlaying}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <Image className="img1" src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}
export default PlayItem
