import React from 'react'

import Header from '../components/Common/Header'
import Loading from '../components/Common/Loading'
import Article from '../components/Detail/Article'

import axios from 'axios'

class Detail extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			loading: 'true',
			detaildata: {}
		}
	}
	//
	componentWillMount() {
		this.initdata(this.props.params.id);
	}

	initdata(id) {
		const _this = this;
		axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
  			.then(function (response) {
	    		_this.setState({
	    			loading: 'false',
	    			detaildata: response.data.data
	    		})
	  		})
  			.catch(function (error) {
    			console.log(error);
  			});
	}

	render() {
		return (
			<div>
				<Header title="详情"/>
				{
					this.state.loading === 'true'
						?
					<Loading loadAnimation={this.state.loading} />
						:
					<Article detaildata={this.state.detaildata}/>
				}
			</div>
		)
	}

}

export default Detail;