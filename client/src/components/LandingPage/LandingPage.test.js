import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './Landing';

configure({ adapter: new Adapter() });

describe('<LandingPage />', function () {
    describe('Structure', function () {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<LandingPage />);
        })
        it('Render a <Link>', () => {
            expect(wrapper.find('Link')).toHaveLength(1)
        });

        it('Render an  imagen', () => {
            expect(wrapper.find('div')).toHaveLength(2)
        });
    })
});