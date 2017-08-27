import React from 'react'

import UserHeadimg from '../../components/Common/UserHeadimg'
import './Relist.less'

import {formatDate} from '../../lib/lib'

class ReList extends React.Component {

    render() {
        return (
            <ul className="re-list">
                {
                    this.props.replieslist.map((item, index) => {
                        var {content, author, create_at} = item;

                        return (
                            <li key={index} data-flex>
                                <div className="headimg" data-flex-box="0">
                                    <UserHeadimg url={author.avatar_url} />
                                </div>
                                <div className="main" data-flex-box="1">
                                    <div data-flex="main:justify">
                                        <span className="name">{author.loginname}</span>
                                        <time data-flex-box="1">{formatDate(create_at)}</time>
                                        <div className="lou">#{++index}</div>
                                    </div>
                                    <div className="content markdown-body" dangerouslySetInnerHTML={{__html:content}}></div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ReList;
