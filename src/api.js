export async function fetchRecentWorkouts() {
  const response = await fetch('/api/recent-workouts');
  if (!response.ok) {
    throw new Error('Failed to fetch workouts');
  }
  return response.json();
}
