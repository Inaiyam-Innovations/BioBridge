# BioBridge 2026

Official website and registration portal for **BioBridge**, a national student biotech hackathon hosted by MARABANU, StartupTN, and K.S.Rangasamy College of Technology.

- 36 problem statements across 7 tracks
- Teams of 2–4 students
- Four mandatory mentoring weekends
- One-pager PDF submission (deadline 31 October 2026, 6:30 PM IST)

## Development

Requires Node.js 22+ and npm.

```sh
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/problems` | Problem statement explorer |
| `/details` | Timeline, eligibility, and rules |
| `/apply` | Five-step team registration |
| `/status` | Look up a submitted application ID |

```sh
npm run build
npm run preview
```
