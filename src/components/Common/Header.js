import React from 'react'

import {Link} from 'react-router'

import './Header.less'

class Header extends React.Component {

	render() {
        return (
            <header className="common-header" data-flex>
                <div className="icon" data-flex="main:center cross:center" data-flex-box="0">
                    <Link to='/'>
                        <i className={'iconfont icon-fanhui'}></i>
                    </Link>
                </div>
                <h2 className="title" data-flex-box="1">{this.props.title}</h2>
                <div className="icon" data-flex="main:center cross:center" data-flex-box="0">

                </div>
            </header>
        );
    }

}

export default Header;