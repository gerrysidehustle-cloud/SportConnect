# ⚡ SportConnect

A sports-focused social network built with **Next.js 14** — deployable to Vercel in minutes.

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root HTML layout + metadata
│   └── page.js            # Entry point
├── components/
│   ├── layout/
│   │   ├── AppShell.jsx   # Main grid layout orchestrator
│   │   ├── TopNav.jsx     # Sticky top navigation bar
│   │   ├── LeftSidebar.jsx  # Mini profile + nav links
│   │   └── RightSidebar.jsx # Friends, trending, sessions
│   ├── feed/
│   │   ├── Feed.jsx       # Feed page container
│   │   ├── PostCard.jsx   # Individual post with stats
│   │   └── PostComposer.jsx # New post input
│   ├── profile/
│   │   ├── Profile.jsx    # Profile page with tabs
│   │   ├── ProfileBanner.jsx # Banner, avatar, stats
│   │   ├── SportCard.jsx  # Sport detail card
│   │   └── AchievementCard.jsx # Achievement badge
│   └── explore/
│       ├── Explore.jsx    # Explore page with search/filter
│       └── AthleteCard.jsx # Athlete listing card
├── lib/
│   └── data.js            # All mock data & types
└── styles/
    └── globals.css        # CSS variables + reset
```

## 🚀 Deploy to Vercel via GitHub

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial SportConnect app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sportconnect.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Done! Your app is live 🎉

### 3. Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules** (scoped, no Tailwind needed)
- **Google Fonts** — Barlow Condensed + Barlow

## ✨ Features

- **Feed** — Activity posts with sport stats, likes, comments
- **Profile** — Banner, sport cards (experience, frequency, sessions, streak), achievements, activity tab
- **Explore** — Search & filter athletes by sport, follow/unfollow
- **Sidebars** — Mini profile, active friends with status, trending tags, upcoming sessions
- Fully responsive (collapses to single column on mobile)
