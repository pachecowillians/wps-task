import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='row justify-content-between pt-5'>
            <h1 className='display-4'>{title}</h1>
            <div className='pt-4'><Button title={showAdd ? 'Close' : 'Add'} onClick={onAdd} /></div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header