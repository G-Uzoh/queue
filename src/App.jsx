import { useState } from 'react'

function App() {
  const [queue, setQueue] = useState([]);

  const enqueueItem = () => {
    const newItem = `${queue.length + 1}`;
    setQueue([...queue, newItem]);
  };

  const dequeueItem = () => {
    if (queue.length === 0) {
      alert('Queue is empty!');
      return;
    }

    const [removedItem, ...newQueue] = queue;
    setQueue(newQueue);
    return removedItem;
  };

  return (
    <div className='container'>
      <div className='btn'>
        <button onClick={enqueueItem}>Enqueue Item</button>
        <button onClick={dequeueItem}>Dequeue Item</button>
      </div>
      <div>
        <h2>Queue:</h2>
        <div className='queue-items'>
          {queue.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
