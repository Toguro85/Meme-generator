import React from 'react';

function Header() {
      return (
        <header>
            <img src={require("./pikachu.jpg")} height="100px" width="auto" alt="surprised"/>
            <p>Meme Generator</p>
        </header>
      )
}

export default Header;
