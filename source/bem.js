import React from 'react';
import PropTypes from 'prop-types';

const Bem = props => props.render ? props.render() : props.children;

Bem.propTypes = {
	children: PropTypes.node,
	render: PropTypes.func
};

export default Bem;

// concept =>
// 
// <Bem block="myBlock" mod="--">
//   <h1 className="&__myHeader"> Heading 1 </h1>
//   <div className="&__myElement"  modifier="active"> my element </div>
//   <div className="&__other &--mod1"> my other element </div>
// </Bem>
//
// resutl =>
//
// <h1 className="myBlock__myHeader"> ... </h1>
// <div className="myBlock__myElement  myBlock__myElement--active"> ... </div>
// <div className="myBlock__other myBlock--mod1> ... </div>


