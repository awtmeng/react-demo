import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput/index';

export default class HomeHeader extends Component {
    render(){
        return (
            <div className="home-header back">
                <Link to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    {/*此搜索框 需要接受一个函数，当回车时 调用传递的函数，将值传递出来，*/}
                    <SearchInput value="" fn={this.toSearch.bind(this)}/>
                </div>
                <Link to="/login">
                    <div className="profile">
                        <i className="iconfont icon-yonghufill"></i>
                    </div>
                </Link>
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/' + value)
    }
}