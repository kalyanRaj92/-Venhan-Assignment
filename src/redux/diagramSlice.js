import { createSlice } from '@reduxjs/toolkit';

const diagramSlice = createSlice({
  name: 'diagram',
  initialState: {
    nodes: [],
    edges: [],
  },
  reducers: {
    addNode: (state, action) => {
      state.nodes.push(action.payload);
    },
    addEdge: (state, action) => {
      state.edges.push(action.payload);
    },
    removeNode: (state, action) => {
      state.nodes = state.nodes.filter(node => node.id !== action.payload);
      state.edges = state.edges.filter(edge => edge.source !== action.payload && edge.target !== action.payload);
    },
    removeEdge: (state, action) => {
      state.edges = state.edges.filter(edge => edge.id !== action.payload);
    },
  },
});

export const { addNode, addEdge, removeNode, removeEdge } = diagramSlice.actions;
export default diagramSlice.reducer;