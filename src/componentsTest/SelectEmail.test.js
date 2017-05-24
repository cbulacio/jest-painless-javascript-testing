import React from 'react';
import renderer from 'react-test-renderer';

import {users} from '../data/data';
import SelectEmail from '../components/SelectEmail';

it('renders correctly', () =>{
    const tree = renderer
        .create(<SelectEmail title="User emails" options={users} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('changes the background color when click',() => {
    const component = renderer.create(<SelectEmail title="User emails" options={users} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[1].props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

it('changes the background color when the mouse is over',() => {
    const component = renderer.create(<SelectEmail title="User emails" options={users} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[1].props.onMouseOver();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

it('changes the background color when the mouse is out',() => {
    const component = renderer.create(<SelectEmail title="User emails" options={users} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[1].props.onMouseOut();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

it('changes in the background color',() => {
    const component = renderer.create(<SelectEmail title="User emails" options={users} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[1].props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[1].props.onMouseOver();

    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    tree.children[1].props.onMouseOut();

    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    
})
