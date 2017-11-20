const { Component } = React
const { Provider, connect } = ReactRedux
const { createStore, applyMiddleware } = Redux
const { takeEvery, takeLatest, delay } = ReduxSaga
const { put, call } = ReduxSaga.effects
const createSagaMiddleware = ReduxSaga.default


const { PropTypes} = PropTypes


//Action
const INCREMENT = 'e.INCREMENT'
const ASYNC_INCREMENT = 'e.ASYNC_INCREMENT'
const CALL_FAKE_API = 'e.CALL_FAKE_API'
const RECORD_USER = 'e.RECORD_USER'

//Action Creators
const increment = () => ({
  type:INCREMENT,
})

const asyncIncrement = seconds => ({
  type: ASYNC_INCREMENT,
  seconds
})

const callFakeApi = () => ({
  type: CALL_FAKE_API
})


// Apply initial state
const initialState = {
  count: 0,
  user: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: {
      return Object.assign({}, state, {
        count: state.count + 1
      })
    }
    case RECORD_USER: {
      const { result } = action
      return Object.assign({}, state, 
        { user: `NAME: ${result.name} GENDER: ${result.gender}` }
      )
    }
    default:
      return state;
  }
}


// Saga
function* rootSaga() {
  //Catch all actions with a type of ASYNC_INCREMENT
  yield takeEvery(ASYNC_INCREMENT, sagaAsyncIncrement)
  //Catch all actions with a type of CALL_FAKE_API
  yield takeLatest(CALL_FAKE_API, fetchData)
} 

function* sagaAsyncIncrement(payload) {
  const {seconds} = payload
  yield delay(seconds * 1000)
  
  // "PUT" effect to act as a Redux Dispatch
  yield put({ type:INCREMENT })
}

const getUserData = () => {
  return {
    name: 'Steve Rogers',
    gender: 'Male'
  }
}

function* fetchData() {
  yield delay(1500)
  
  // "CALL" effect to allow to call another function
  const result = yield call(getUserData)
  yield put({ type: RECORD_USER, result })
}





const sagaMiddleware = createSagaMiddleware()

//Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// Run Saga
sagaMiddleware.run(rootSaga)

//Container
class App extends Component {
  constructor(props) {
    super(props)
    this.handleAsyncIncrement = this.handleAsyncIncrement.bind(this)
  }
  
  handleAsyncIncrement(seconds) {
    this.props.asyncIncrement(seconds)
  }
  
  render () {
    const { count, increment, callFakeApi, user } = this.props
    
   return (
     <div>
         <div className = 'count'>
            {count}
         </div>
         <button onClick={increment}>
         Sync Increment
         </button>
       <button onClick={()=>this.handleAsyncIncrement(3)}>
         Async Increment (3)
         </button>
       <button onClick={()=>this.handleAsyncIncrement(10)}>
         Async Increment (10)
         </button>
       <button onClick={callFakeApi}>
         Call Fake API
         </button>
       {user && <div className="user">{user}</div>}
     </div>
   )
  }
}
       
 App.PropTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired
 }

// State to Props
const mapStateToProps = state => ({
  count: state.count,
  user: state.user
})
     
//Dispatch
const mapDispatchToProps = ({
  increment,
  asyncIncrement,
  callFakeApi
})

//Connect
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//Provider
const Main = () => (
  <Provider store={store}>
    <AppContainer />
   </Provider>
)

//ReactDOM
ReactDOM.render(<Main />, document.getElementById('app'))