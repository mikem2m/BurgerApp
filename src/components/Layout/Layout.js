import React,{Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../HOC/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:true});
    }
    
    render(){
        return(
            <Aux>
                <Toolbar 
                isAuth={this.props.isAuthenticated}
                clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </Aux>
        );
    }   
};

const mapStateToProps = state => {
    return{
        isAuthenticated:state.auth.token !== null,
    };
}

export default connect(mapStateToProps,null)(Layout);