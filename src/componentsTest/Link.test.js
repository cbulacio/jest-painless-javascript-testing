import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Link';

it('reders correctly', () =>{
    const tree = renderer
        .create(<Link page="http://www.instagram.com">Intagram</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<Link>Facebook</Link>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('changes the class when hovered',() => {
    const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    tree.props.onMouseLeave();

    tree = component.toJSON();

    expect(tree).toMatchSnapshot();



})


