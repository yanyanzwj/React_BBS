import React from 'react'

export default class Tabicon extends React.Component {
    render() {
        var {tab, top, good} = this.props;

        if (top) {
            tab = 'top';
        } else if (good) {
            tab = 'good';
        }

        return (
            <i className={'iconfont icon-' + tab}></i>
        );
    }
}