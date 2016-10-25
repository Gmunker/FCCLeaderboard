export let recentUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECENT_USERS":
      return [
        ...state,
        ...action.recentUsers
      ];
    default:
      return state;
  };
};

export let alltimeUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALLTIME_USERS":
      return [
        ...state,
        ...action.alltimeUsers
      ];
    default:
      return state;
  };
};
