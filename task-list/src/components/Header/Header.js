import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Header = () => {
    return (
        <header>
            <div>Task list</div>
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