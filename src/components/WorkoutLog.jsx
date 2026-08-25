import React, { useEffect, useState } from 'react';
import { fetchRecentWorkouts } from '../api';
import WorkoutItem from './WorkoutItem';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchRecentWorkouts()
      .then((data) => setWorkouts(Array.isArray(data) ? data : []))
      .catch(() => setWorkouts([])); // Handle errors
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {workouts.length === 0 ? (
        <p className="text-center">No recent workouts available.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <WorkoutItem key={workout.id} workout={workout} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutLog;
