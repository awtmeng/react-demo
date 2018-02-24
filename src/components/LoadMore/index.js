import React, {Component} from 'react';
import './index.less'

export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore?
                    <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>
                    :<div>我是有底线的</div>}
            </div>
        )
    }
    componentDidMount(){
        this.fn = ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                console.log('滚动')
                if(this.props.isLoading){
                    return
                }

                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;

                if(top < screen){
                    this.props.loadMore();
                }
            },50)
        }
        window.addEventListener('scroll', this.fn);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.fn);
    }
    loadMore(){
        if(this.props.isLoading){
            return
        }
        this.props.loadMore();
    }
}