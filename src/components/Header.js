import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? '#FE6B8B' : '#2196F3'} text={showAdd ? 'Close' : 'Add'} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
