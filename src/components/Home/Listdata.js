import React from 'react'
import {Link} from 'react-router'

import UserHeadimg from '../../components/Common/UserHeadimg'
import Tabicon from '../../components/Common/Tabicon'

import {formatDate} from '../../lib/lib'

class Listdata extends React.Component {

	render() {


        let {id, title, author, visit_count, reply_count, create_at, last_reply_at} = this.props.item;

        return (
					<li>
						<Link to={`/detail/${id}`}>
							<div data-flex="box:first">
								<div className="font" data-flex="cross:center">
									<Tabicon {...this.props.item} />
								</div>
								<h3 className="tit">{title}</h3>
							</div>
							<div className="bottom" data-flex="box:first">
								<div className="author" data-flex="cross:center">
                            		<UserHeadimg url={author.avatar_url} />
								</div>
								<div className="con" data-flex="dir:top main:center">
									<p data-flex="cross:center box:last">
										<span className="name">{author.loginname}</span>
										<span className="count">{reply_count}/{visit_count}</span>
									</p>
									<p data-flex="cross:center box:last">
										<time className="create">{formatDate(create_at)}</time>
										<time className="re">{formatDate(last_reply_at)}</time>
									</p>
								</div>
							</div>
						</Link>
					</li>
				)
			}
	

}

export default Listdata;