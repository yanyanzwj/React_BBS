import React from 'react'

import UserHeadimg from '../../components/Common/UserHeadimg'
import Tabicon from '../../components/Common/Tabicon'
import Relist from '../../components/Detail/ReList'

import {formatDate} from '../../lib/lib'

import './Article.less'

class Article extends React.Component {

	render() {

		let {title, create_at, visit_count, reply_count, replies, author, content} = this.props.detaildata;

		return (
            <div className="topic">
                <div className="user" data-flex>
                    <div className="headimg" data-flex-box="0">
                        <UserHeadimg url={author.avatar_url} />
                    </div>
                    <div className="data" data-flex="dir:top" data-flex-box="1">
                        <div data-flex="main:justify">
                            <span className="name">{author.loginname}</span>
                            <time data-flex-box="1">{formatDate(create_at)}</time>
                            <div className="lou">#楼主</div>
                            <div className="font" data-flex="main:center cross:center">
                            	<Tabicon {...this.props.detaildata} />
                            </div>
                        </div>
                        <div className="qt" data-flex>
                            <div>阅读：{visit_count}</div>
                            <div>回复：{reply_count}</div>
                        </div>
                    </div>
                </div>
                <h2 className="tit2">{title}</h2>
               	<div className="content" dangerouslySetInnerHTML={{__html:content}}></div>
                <h3 className="tit3">共<em>{replies.length}</em>条回复</h3>
                <Relist replieslist={replies}/>
            </div>
        );
	}

}

export default Article;