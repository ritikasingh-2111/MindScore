// Option lists: these must match the Literal[...] values in the FastAPI model exactly.
export const GENDERS = ['Male', 'Female', 'Other'];
export const ACADEMIC_LEVELS = ['Undergraduate', 'Graduate', 'High School'];
export const PLATFORMS = [
  'Facebook', 'LinkedIn', 'Instagram', 'Snapchat', 'Twitter', 'YouTube',
  'TikTok', 'LINE', 'KakaoTalk', 'VKontakte', 'WhatsApp', 'WeChat',
];
export const PURPOSES = ['Networking', 'Education', 'Entertainment', 'News'];
export const STRESS_LEVELS = ['Low', 'Medium', 'High', 'Very High'];

// Suggestions for the Country field (users can still type any country).
export const COUNTRIES = [
  'India', 'USA', 'Canada', 'Australia', 'UK', 'Germany', 'Turkey', 'Mexico',
  'France', 'Brazil', 'Japan', 'South Korea', 'China', 'Italy', 'Spain',
  'Netherlands', 'Sweden', 'Singapore', 'South Africa', 'Nigeria',
];

// The highest value on your model's score scale. Change this to 10 if your
// model predicts on a 0-10 scale; the gauge and result bands adapt automatically.
export const MAX_SCORE = 10;

export const INITIAL_VALUES = {
  Age: 20,
  Gender: '',
  Country: '',
  Academic_Level: '',
  Most_Used_Platform: '',
  Purpose_Of_Use: '',
  Avg_Daily_Usage_Hours: 4,
  Daily_Unlocks: 60,
  Study_Hours: 4,
  Physical_Activity_Hours: 1,
  Sleep_Hours_Per_Night: 7,
  Stress_Level: '',
};
