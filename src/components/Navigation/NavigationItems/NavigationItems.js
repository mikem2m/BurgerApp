import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../HOC/Auxilliary';

const navigationItems = (props)=>{
    let render = <NavigationItem link='/auth'>Sign Up</NavigationItem>;
    if(props.isAuthenticated){
        render=(
        <Aux>
        <NavigationItem link='/orders'>My Orders</NavigationItem>
        <NavigationItem link='/logout'>Log Out</NavigationItem>
        </Aux>
        )
    }
    return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        {render}
    </ul>
    );
}

export default navigationItems;