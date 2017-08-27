import React from 'react'

import Nav from '../components/Home/Nav'
import List from '../components/Home/List'
import Loading from '../components/Common/Loading'
import ButtonGroup from '../components/Home/ButtonGroup'

import axios from 'axios'

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: 'true',
			listdata: [],
            page: 1,
            tab: 'all'
		}
	}
	//
	componentWillMount() {
		this.initdata(1, 10, this.state.tab);
	}

	nextpage() {
	    this.setState({
	        loading: 'true'
        })
        this.initdata(this.state.page + 1, 10, this.state.tab);
    }

    prevpage() {
        this.setState({
            loading: 'true'
        })
        this.initdata(this.state.page - 1, 10, this.state.tab);
    }

    changetab(tab) {
        this.setState({
            loading: 'true'
        })
        this.initdata(this.state.page, 10, tab);
    }

	initdata(page, limit, tab) {
		const _this = this;
		axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=${limit}&tab=${tab}`)
  			.then(function (response) {
	    		_this.setState({
	    			loading: 'false',
	    			listdata: response.data.data,
                    page: page,
                    tab: tab
	    		})
	  		})
  			.catch(function (error) {
    			console.log(error);
  			});
	}

	render() {

		return (
			<div>
				<Nav tab={this.state.tab} changetab={this.changetab.bind(this)}/>
				{
					this.state.loading === 'true'
						?
					<Loading loadAnimation={this.state.loading} />
						:
					<div>
                        <List listdata={this.state.listdata} />
                        <ButtonGroup page={this.state.page} nextpage={this.nextpage.bind(this)} prevpage={this.prevpage.bind(this)}/>
                    </div>
				}
			</div>
		)
	}
}

export default Home;