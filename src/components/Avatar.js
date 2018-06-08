import styled from 'styled-components'
import PropTypes from 'prop-types'

const Avatar = styled.img`
  border-radius: 50%;
  width: ${props => {
    if (props.size) {
      switch (props.size) {
        case 'large':
          return '120px'
        case 'small':
          return '30px'
        case 'medium':
        default:
          return '50px'
      }
    }
    return '50px'
  }};
`

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Avatar.defaultProps = {
  size: 'large'
}

export default Avatar
