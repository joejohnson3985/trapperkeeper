import React from 'react';
import { Form, mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions/index';
import { shallow } from 'enzyme';

describe('Form', () => {

  describe('Component', () => {
    let wrapper;

    beforeEach(() => {

    });

    describe('mapStateToProps', () => {
      it('should return back an object of the current card', () => {
        const mockState = {
          cards: [{id:2, name: 'Errands'}, {id:1, name: 'Bob'}],
          currentCard: {"id":1, "name": 'Bob'}
        }
        const outcome = {"id":1, "name": 'Bob'}
        expect(mapStateToProps(mockState).currentCard).toEqual(outcome)
      })
    });

    describe('mapDispatchToProps', () => {
      it('should call method setCurrentCard with correct params', () => {

      });

      it('should call method createdCard with correct params', () => {

      });
    });
    
  });
});


