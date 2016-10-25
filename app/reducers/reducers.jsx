export let recentUsersReducer = (state = ["Default State"], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        ...action.recentUsers
      ];
    default:
      return state;
  };
};
