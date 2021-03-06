import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

customHistory.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`)
  })

export default customHistory;