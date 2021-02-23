import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  if (people.length === 0) {
    return (<>

      <div> Use State Project -1</div>
      <main>
        <section className="container">
          <h3> 0 birthday today</h3>
          <button onClick={() => setPeople(data)}>Reset here</button>
        </section>
      </main>
    </>
    );
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <div className="Section">
          <List person={people}></List>
        </div>
        <button onClick={() => setPeople([])}>clear List</button>
      </section>
    </main>
  
  );
}

export default App;
