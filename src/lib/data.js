// ── Types ──────────────────────────────────────────────────────────────────

export const SPORT_COLORS = {
  Basketball: "#FF6B35",
  Swimming: "#00B4D8",
  Tennis: "#80B918",
  Soccer: "#9B5DE5",
  Cycling: "#F15BB5",
  Boxing: "#FFA500",
  Running: "#EF4444",
  Volleyball: "#06B6D4",
};

// ── Current User ────────────────────────────────────────────────────────────

export const currentUser = {
  id: "me",
  name: "Jordan Rivera",
  handle: "jrivera",
  initials: "JR",
  location: "San Francisco, CA",
  bio: "Multi-sport athlete. Basketball courts, swim lanes, tennis courts — wherever the competition is, I'm there.",
  avatarColor: "#FF6B35",
  followers: 142,
  following: 98,
  totalSessions: 2295,
  yearsActive: 15,
  sports: [
    {
      id: 1,
      name: "Basketball",
      icon: "🏀",
      color: "#FF6B35",
      years: 5,
      frequency: "4x/week",
      level: "Competitive",
      sessions: 847,
      streak: 12,
    },
    {
      id: 2,
      name: "Swimming",
      icon: "🏊",
      color: "#00B4D8",
      years: 8,
      frequency: "3x/week",
      level: "Advanced",
      sessions: 1240,
      streak: 5,
    },
    {
      id: 3,
      name: "Tennis",
      icon: "🎾",
      color: "#80B918",
      years: 2,
      frequency: "2x/week",
      level: "Intermediate",
      sessions: 208,
      streak: 3,
    },
  ],
  badges: [
    { label: "🔥 12-Day Streak", highlight: true },
    { label: "🏆 Tournament Winner", highlight: false },
    { label: "⚡ Early Bird", highlight: false },
    { label: "🎯 Consistent", highlight: false },
  ],
  achievements: [
    { icon: "🏆", title: "Tournament Champion", desc: "Won club tennis tournament", date: "Mar 2024" },
    { icon: "🔥", title: "On Fire", desc: "30-day activity streak", date: "Feb 2024" },
    { icon: "⚡", title: "Speed Demon", desc: "Personal best 200m swim", date: "Jan 2024" },
    { icon: "🎯", title: "1000 Sessions", desc: "Logged 1000 workouts", date: "Dec 2023" },
    { icon: "🌅", title: "Early Bird", desc: "100 morning sessions", date: "Nov 2023" },
    { icon: "👑", title: "Multi-Sport", desc: "Active in 3+ sports", date: "Oct 2023" },
    { icon: "💪", title: "Ironman", desc: "Never missed a week in a year", date: "Sep 2023" },
    { icon: "🤝", title: "Team Player", desc: "50 group sessions", date: "Aug 2023" },
  ],
  upcomingSessions: [
    { sport: "🏀", title: "Pickup Basketball", time: "Today, 6PM" },
    { sport: "🏊", title: "Lap Swimming", time: "Tomorrow, 7AM" },
  ],
};

// ── Feed Posts ───────────────────────────────────────────────────────────────

export const feedPosts = [
  {
    id: 1,
    user: "Marcus Chen",
    handle: "mchen",
    initials: "MC",
    avatarColor: "#FF6B35",
    sport: "🏀 Basketball",
    time: "2h ago",
    content:
      "Just finished a 2-hour pickup game at Riverside Courts. Dropped 28 pts and hit the game winner in overtime. The grind never stops 💪",
    stats: { distance: null, duration: "2h 14m", calories: 680 },
    likes: 47,
    comments: 12,
    reposts: 5,
  },
  {
    id: 2,
    user: "Aisha Okonkwo",
    handle: "aokonkwo",
    initials: "AO",
    avatarColor: "#00B4D8",
    sport: "🏊 Swimming",
    time: "5h ago",
    content:
      "Personal best! 1500m in under 20 minutes for the first time. 3 years of 5AM training finally paying off. If you know, you know.",
    stats: { distance: "1500m", duration: "19:47", calories: 420 },
    likes: 93,
    comments: 24,
    reposts: 11,
  },
  {
    id: 3,
    user: "Diego Ramirez",
    handle: "dramirez",
    initials: "DR",
    avatarColor: "#80B918",
    sport: "🎾 Tennis",
    time: "Yesterday",
    content:
      "Won my first club tournament! Lost the first set but came back 6-3, 7-5. Mental toughness is everything in this sport.",
    stats: { distance: null, duration: "1h 45m", calories: 510 },
    likes: 156,
    comments: 38,
    reposts: 19,
  },
  {
    id: 4,
    user: "Yuki Tanaka",
    handle: "ytanaka",
    initials: "YT",
    avatarColor: "#9B5DE5",
    sport: "⚽ Soccer",
    time: "2 days ago",
    content:
      "League match tonight. We were down 2-0 at halftime, but ended 3-2 with my first hat-trick in competitive play. Unreal night.",
    stats: { distance: "9.2km", duration: "90m", calories: 730 },
    likes: 204,
    comments: 51,
    reposts: 27,
  },
  {
    id: 5,
    user: "Sam Park",
    handle: "sampark",
    initials: "SP",
    avatarColor: "#F15BB5",
    sport: "🚴 Cycling",
    time: "3 days ago",
    content:
      "Century ride complete ✅ 100 miles in 5h 12m. The last 20 were a grind but the view from the top of the climb made it worth every pedal stroke.",
    stats: { distance: "160km", duration: "5h 12m", calories: 3200 },
    likes: 318,
    comments: 74,
    reposts: 42,
  },
];

// ── Friends ──────────────────────────────────────────────────────────────────

export const friends = [
  { id: 1, name: "Marcus Chen", initials: "MC", color: "#FF6B35", sport: "🏀", status: "online" },
  { id: 2, name: "Aisha O.", initials: "AO", color: "#00B4D8", sport: "🏊", status: "online" },
  { id: 3, name: "Diego R.", initials: "DR", color: "#80B918", sport: "🎾", status: "offline" },
  { id: 4, name: "Yuki T.", initials: "YT", color: "#9B5DE5", sport: "⚽", status: "online" },
  { id: 5, name: "Sam Park", initials: "SP", color: "#F15BB5", sport: "🚴", status: "away" },
];

// ── Trending ─────────────────────────────────────────────────────────────────

export const trending = [
  { tag: "#BasketballSeason", count: "2.4k posts" },
  { tag: "#SwimChallenge", count: "1.1k posts" },
  { tag: "#MorningRun", count: "890 posts" },
  { tag: "#TennisOpen", count: "744 posts" },
];

// ── Explore Athletes ─────────────────────────────────────────────────────────

export const athletes = [
  { id: 1, name: "Marcus Chen", initials: "MC", sports: ["🏀 Basketball"], sessions: 847, followers: 312, color: "#FF6B35" },
  { id: 2, name: "Aisha Okonkwo", initials: "AO", sports: ["🏊 Swimming"], sessions: 1240, followers: 589, color: "#00B4D8" },
  { id: 3, name: "Diego Ramirez", initials: "DR", sports: ["🎾 Tennis"], sessions: 208, followers: 156, color: "#80B918" },
  { id: 4, name: "Yuki Tanaka", initials: "YT", sports: ["⚽ Soccer", "🏃 Running"], sessions: 430, followers: 227, color: "#9B5DE5" },
  { id: 5, name: "Sam Park", initials: "SP", sports: ["🚴 Cycling"], sessions: 980, followers: 445, color: "#F15BB5" },
  { id: 6, name: "Alex Torres", initials: "AT", sports: ["🥊 Boxing", "🏋️ Weights"], sessions: 660, followers: 198, color: "#FFA500" },
  { id: 7, name: "Priya Sharma", initials: "PS", sports: ["🏐 Volleyball"], sessions: 390, followers: 173, color: "#06B6D4" },
  { id: 8, name: "Noah Kim", initials: "NK", sports: ["🏃 Running", "🚴 Cycling"], sessions: 1120, followers: 634, color: "#EF4444" },
];
