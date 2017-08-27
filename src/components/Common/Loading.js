import React from 'react'

import './Loading.less'

class Loading extends React.Component {

	render() {
        return (
            <div className={'data-load data-load-' + this.props.loadAnimation}></div>
        );
    }

}

export default Loading;