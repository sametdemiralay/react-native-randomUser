import React, {createContext, useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const initialState = {
  loading: true,
  error: '',
  post: [],
  searchHolder: '',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [search, setSearch] = useState('');
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=20`)
      .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data.results});
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR'});
      });
  }, []);

  useEffect(() => {
    setFilteredPeople(
      state.post.filter(people =>
        people.name.first.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, state.post]);

  return (
    <GlobalContext.Provider
      value={{post: state.post, setSearch, filteredPeople}}>
      {children}
    </GlobalContext.Provider>
  );
};
