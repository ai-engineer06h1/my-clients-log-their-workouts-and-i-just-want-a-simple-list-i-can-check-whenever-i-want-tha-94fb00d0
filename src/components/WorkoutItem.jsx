import React from 'react';

function WorkoutItem({ workout }) {
  return (
    <li className="border-b py-2">
      <a href={`/workouts/${workout.id}`} className="block hover:bg-gray-100 p-2">
        <p className="font-semibold">{workout.clientName}</p>
        <p className="text-sm text-gray-600">{workout.date}</p>
      </a>
    </li>
  );
}

export default WorkoutItem;
