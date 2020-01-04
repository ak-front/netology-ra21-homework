import React, { useState } from 'react';

import Collapse from './components/Collapse';

import './App.css';

function App() {
  const [isExpanded, setExpanded] = useState(false);
  const handleExpandedChange = newIsExpanded => {
    setExpanded(newIsExpanded);
  };

  return (
    <Collapse
      isExpanded={isExpanded}
      onExpandedChange={handleExpandedChange}
    >
      <p>Альфа-Банк, основанный в 1990 году, является универсальным банком, осуществляющим все основные виды банковских операций, представленных на рынке финансовых услуг, включая обслуживание частных и корпоративных клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.</p>
    </Collapse>
  );
}

export default App;
