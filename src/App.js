import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset }  from "@chakra-ui/core"
import ItemEntry from './item_entry/item-entry';

const App = ({children}) => {
  return (
    <ThemeProvider>
      <CSSReset />
        <div className="App">
          <ItemEntry />
        </div>
    </ThemeProvider>
  );
}

export default App;
