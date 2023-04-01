import React from 'react'

const Button = ( {styles} ) => {
    return (
        <button type="button"
                className={`py-4 px-6 bg-blue-gradient 
                text-medium font-poppins text-primary outline-none text-[18px]  rounded-[10px] ${styles}`}>
            Get Started
        </button>
    )
}

export default Button