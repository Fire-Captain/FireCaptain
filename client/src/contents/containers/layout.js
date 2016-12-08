import React from 'react';
import { RouteTransition } from 'react-router-transition';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<RouteTransition
				  pathname={this.props.location.pathname}
				  atEnter={{ translateX: 100 }}
				  atLeave={{ translateX: -100 }}
				  atActive={{ translateX: 0 }}
				  mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
				>
				  <div style={{"position": "absolute"}}>
				  	{this.props.children}
				  </div>
				</RouteTransition>
			</div>
		) 
	}
}