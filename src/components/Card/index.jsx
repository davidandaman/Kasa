import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/images/chat.jpg'


function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={picture} alt="Super location" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 
Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    picture: DefaultPicture,
  }


export default Card