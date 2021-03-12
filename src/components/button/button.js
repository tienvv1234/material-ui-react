import React from 'react';
import './button.css'
function Button({ label }) {
    // user data-testid is for testing
    return <div data-testid="button" className="button-style">{label}</div>
}

export default Button;