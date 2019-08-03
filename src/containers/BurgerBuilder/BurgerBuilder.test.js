import {BurgerBuilder} from './BurgerBuilder';
import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BuildControls from '../../components/Burger/BuildControls/BuildControl/BuildControl';

configure({adapter:new Adapter()});

describe('<BurgerBuilder/>',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}}/>);
    })

    // it('should render <BuildControls/> when receiving ingredients',()=>{
    //     wrapper.setProps({tp:0,ings:{
    //         salad:0
    //     }});
    //     expect(wrapper.find(BuildControls)).toHaveLength(1);
    // });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({tp: 0, ings: { salad: 0 }});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});