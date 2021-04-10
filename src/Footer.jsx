import React from "react"; // so that we can write JSX


const currentTime = new Date();
const Year = currentTime.getFullYear();

function Footer() {
    return(
        <footer>
            <p>Copyright {Year}</p>
        </footer>
    );
}

export default Footer;