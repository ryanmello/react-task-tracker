import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onCLick = () => {
        console.log('click');
    }

    return (
        <button onClick={onCLick} style={{ backgroundColor: color}} 
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
