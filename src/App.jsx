import {useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  function changeUser(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispatch({ type: 'CHANGE_NAME', payload: value });
        break;
      case 'age':
        dispatch({ type: 'CHANGE_AGE', payload: parseInt(value) });
        break;
      case 'gender':
        dispatch({ type: 'CHANGE_GENDER', payload: value });
        break;
      default:
        break;
    }
  }
  return (
    <div className='app'>
      <div className='user'>
        <h1>Hello {user.name}</h1>
        <h2>You are {user.age} years old</h2>
        <h3>And you are a {user.gender}</h3>
      </div>
      <form action="">
        <label htmlFor="">Name:
          <input type="text" name='name' onChange={changeUser}/>
        </label>
        <label htmlFor="">Age:
          <input type="number" name='age' onChange={changeUser}/>
        </label>
        <label htmlFor="">Select your gender:
          <select name='gender' value={'user.gender'} onChange={changeUser}>
            <option value='' disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </form>
    </div>
  )
}

export default App
