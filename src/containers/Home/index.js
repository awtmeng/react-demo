import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader/index';
import Ad from './subpage/Ad';
import List from './subpage/List'

class Home extends Component{
    render(){
        return (
            <div>   
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history} />
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    }
}

export default connect(
    mapStateToProps
)(Home)