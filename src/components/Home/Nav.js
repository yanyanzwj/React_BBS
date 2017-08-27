import React from 'react'
import {Link} from 'react-router'

import './Nav.less'

class Nav extends React.Component {

    child_changetab(tab) {
        this.props.changetab(tab);
    }

	render() {

		var setCur = {}
		setCur[this.props.tab] = 'on'

		return (
			<nav className="index-nav">
                <ul data-flex="box:mean">
                    <li className={setCur.all}>
                        <Link to="/" activeClassName="active" onClick={this.child_changetab.bind(this, 'all')}>全部</Link>
                    </li>
                    <li className={setCur.good}>
                        <Link to="/?tab=good" activeClassName="active" onClick={this.child_changetab.bind(this, 'good')}>精华</Link>
                    </li>
                    <li className={setCur.share}>
                        <Link to="/?tab=share" activeClassName="active" onClick={this.child_changetab.bind(this, 'share')}>分享</Link>
                    </li>
                    <li className={setCur.ask}>
                        <Link to="/?tab=ask" activeClassName="active" onClick={this.child_changetab.bind(this, 'ask')}>问答</Link>
                    </li>
                    <li className={setCur.job}>
                        <Link to="/?tab=job" activeClassName="active" onClick={this.child_changetab.bind(this, 'job')}>招聘</Link>
                    </li>
                </ul>
                <div className="height"></div>
            </nav>
		)
	}

}

export default Nav;