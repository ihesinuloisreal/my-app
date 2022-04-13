import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
  const onClick = () => {
    return (
      console.log ('Click')
    )
      
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text ='Add' onClick={onClick} />
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Traker',
}
//css in js
// const HeadingStyle = {
//     color: 'red',
// }


Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header