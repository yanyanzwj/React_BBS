import React from 'react'

import Listdata from './Listdata'
import './List.less'

class List extends React.Component {

	render() {

		return (
			<ul className="index-list">
				{
					this.props.listdata.map((item) => {
						return <Listdata key={item.id} item={item} />
					})
				}
			</ul>
		)
	}

}

export default List;