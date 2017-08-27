import React from 'react'

import './ButtonGroup.less'

class ButtonGroup extends React.Component {

    child_nextpage() {
        this.props.nextpage();
    }

    child_prevpage() {
        this.props.prevpage();
    }

    render() {
        return (
            <div className="buttongroup">
                {
                    this.props.page === 1
                        ?
                    <div>
                        <button type="button" className="nextbutton" onClick={this.child_nextpage.bind(this)}>下一页</button>
                    </div>
                        :
                    <div>
                        <button type="button" className="prevbutton" onClick={this.child_prevpage.bind(this)}>上一页</button>
                        <button type="button" className="nextbutton" onClick={this.child_nextpage.bind(this)}>下一页</button>
                    </div>
                }
            </div>
        );
    }
}

export default ButtonGroup;
