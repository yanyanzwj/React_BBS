import React from 'react'

import './UserHeadimg.less'

export default class UserHeadimg extends React.Component {
    render() {
        return (
        	<div className="user-headimg" style={{ backgroundImage: 'url(' + this.props.url + ')' }}></div>
        )
    }
}