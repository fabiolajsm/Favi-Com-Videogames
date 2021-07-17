import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';

configure({ adapter: new Adapter() });

describe('<Game />', () => {
    let wrapper;
    beforeEach(() => {
        let title = 'escuchar musica';
        let id = 1
        let img = 'an image'
        let genres = ['1genre', '2genre']
        wrapper = shallow(<Game id={id} img={img} name={title} genres={genres} />)
    })
    it('it most render the component', () => {
        expect(wrapper.contains([])).toEqual(true)
    });
    it('it does not render only one div', () => {
        expect(wrapper.contains(<div></div>)).toEqual(false)
    });
    it("shouldn't render without the info", () => {
        expect(wrapper.contains(<div>
            <h2></h2>
            <img />
            <h4></h4>
        </div>)).toEqual(false)
    })
    it("Image isn't an array", () => {
        expect(wrapper.find('image')).toHaveLength(0);
    });
});