import * as types from '../actions/actionTypes';
const defaultState = {
  cities: [
    {
      name: 'Los Angeles',
      img: 'LA.jpg',
      url: '/LA'
    },
    {
      name: 'New York',
      img: 'NY.jpg',
      url: '/NY'
    },
    {
      name: 'San Francisco',
      img: 'SF.jpg',
      url: '/SF'
    }
  ],
  posts: []
}
export default (state = defaultState, action) => {
  // let posts = [...state.posts];
  switch (action.type) {
   case 'ADD_TASK':
    return {
      ...state,
      tasks: [...state.tasks,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]
    }
   default:
     return state
   }
}
