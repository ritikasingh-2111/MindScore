const API_URL = process.env.REACT_APP_API_URL || '';

// Builds a body that exactly matches the StudentData model in FastAPI.
export function buildPayload(v) {
  return {
    Age: Math.round(Number(v.Age)),
    Gender: v.Gender,
    Country: String(v.Country).trim(),
    Academic_Level: v.Academic_Level,
    Most_Used_Platform: v.Most_Used_Platform,
    Purpose_Of_Use: v.Purpose_Of_Use,
    Avg_Daily_Usage_Hours: Number(v.Avg_Daily_Usage_Hours),
    Daily_Unlocks: Math.round(Number(v.Daily_Unlocks)),
    Study_Hours: Number(v.Study_Hours),
    Physical_Activity_Hours: Number(v.Physical_Activity_Hours),
    Sleep_Hours_Per_Night: Number(v.Sleep_Hours_Per_Night),
    Stress_Level: v.Stress_Level,
  };
}

export async function predictScore(payload) {
  let res;
  try {
    res = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Could not reach the MindScore server. Make sure the FastAPI backend is running and try again.');
  }

  if (!res.ok) {
    let message = 'The server could not process your request. Please try again.';
    try {
      const body = await res.json();
      if (Array.isArray(body.detail)) {
        message = body.detail.map((d) => `${d.loc.slice(1).join('.')}: ${d.msg}`).join('; ');
      } else if (typeof body.detail === 'string') {
        message = body.detail;
      }
    } catch { /* keep default message */ }
    throw new Error(message);
  }

  const data = await res.json();
  return data.predicted_mental_health_score;
}
