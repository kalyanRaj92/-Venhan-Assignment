import React,{ useEffect } from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import Diagram from './components/Diagram';
import Sidebar from './components/Sidebar';
import metadata from './metadata.json'; 
import { addNode, addEdge } from './redux/diagramSlice'
import './styles.css';

const App = () => {
  useEffect(() => {
    // Dispatch nodes and edges to the Redux store
    metadata.nodes.forEach(node => {
      store.dispatch(addNode(node));
    });
    metadata.edges.forEach(edge => {
      store.dispatch(addEdge(edge));
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Sidebar />
        <Diagram />
      </div>
    </Provider>
  );
};

export default App;