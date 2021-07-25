export default function theme(state = "dark blue", action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}