import React from 'react'
import Header from './Header'

const Info = () => (
    <div class='main'>
        <Header />
        <footer>
            © {new Date().getFullYear()}
        </footer>
    </div>
)

export default Info