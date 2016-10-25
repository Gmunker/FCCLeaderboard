import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

let createMockStore = configureMockStore([thunk]);

import * as actions from 'actions';

describe('Actions', () => {
  it('should generate ADD_RECENT_USERS action', () => {
    let action = {
      type: 'ADD_RECENT_USERS',
      recentUsers: [
        {
          username: "sjames1958gm",
          img: "https://avatars.githubusercontent.com/u/4639625?v=3",
          alltime: 3645,
          recent: 515,
          lastUpdate: "2016-10-24T06:11:46.540Z"
        }
      ]
    }
    let res = actions.addRecentUsers(action.recentUsers);
    expect(res).toEqual(action);
  })// Should generate ADD_RECENT_USERS

  it('should store users in store when addRecentUsers action called', (done) => {
    const store = createMockStore();
    const users = [
      {
    	username: "sjames1958gm",
    	img: "https://avatars.githubusercontent.com/u/4639625?v=3",
    	alltime: 3645,
    	recent: 515,
    	lastUpdate: "2016-10-24T06:11:46.540Z"
    	}
    ]
    const action = actions.addRecentUsers(users);

    store.dispatch(action).then(() => {
      const mockActions = store.getActions();

      expect(mockActions[0]).toInclude({type: 'ADD_RECENT_USERS'})
      done();
    },done)
  })

});// Actions
