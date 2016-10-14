import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p><span><i>{props.tagline}</i></span></p>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  tagline: React.PropTypes.string.isRequired
}

export default Header;
