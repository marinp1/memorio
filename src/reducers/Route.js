export default function CurrentRoute(state = '', action) {
  switch (action.type) {
    case 'ROUTE_UPDATE':
      state = action.text;
      return state;
    default:
      return state;
  }
}
