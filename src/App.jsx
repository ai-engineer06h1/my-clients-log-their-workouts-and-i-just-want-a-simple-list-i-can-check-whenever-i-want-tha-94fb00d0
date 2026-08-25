import React from 'react';
import WorkoutLog from './components/WorkoutLog';

function App() {
  return (
    <div className="min-h-screen p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Workout Log</h1>
      </header>
      <main>
        <WorkoutLog />
      </main>
    </div>
  );
}

export default App;
