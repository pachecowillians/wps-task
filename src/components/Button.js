import PropTypes from 'prop-types'

const Button = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='btn btn-outline-dark'>
            {title}
        </button>
    )
}

Button.defaultProps = {
    title: 'Button name',
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Button