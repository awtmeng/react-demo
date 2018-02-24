import React, {Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from '../../../components/ListComponent/index'
import LoadMore from '../../../components/LoadMore/index';

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore: true,
            data: [],
            page: 0,
            isLoading: true
        }
    }
    render(){
        return (
            <div>
                {/*将数据传递给ListComponent组件 让其展示*/}
                {this.state.data.length?
                    <ListComponent data={this.state.data} />
                    :<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName, 0));
    }
    //需要在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发我们传递函数
    loadMore(){
        console.log('loading more ...')
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        },()=>{
            this.processData(getList(this.props.cityName, this.state.page));
        })
    }

    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            });
        })
    }
}

