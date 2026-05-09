# Slaughterhouse Fantasy — Website Package
**Dynasty. Strategy. Edge.**

---

## Files in this package

| File | Description |
|------|-------------|
| `index.html` | Landing / Home page |
| `rankings.html` | Dynasty Rankings tool (fully functional) |
| `rookies.html` | Rookie Rankings (paste full HTML to activate) |
| `calculator.html` | Dynasty Calculator (paste full HTML to activate) |
| `optimizer.html` | Lineup Optimizer (paste full HTML to activate) |
| `trade.html` | Trade Analyzer (paste full HTML to activate) |
| `shared.css` | Shared styles used by all pages |
| `nav.js` | Shared navigation component |

---

## How to deploy (step by step)

### Step 1 — Buy your domain
Go to **namecheap.com** and search for:
- `slaughterhousefantasy.com` (~$13/yr) ✅ Recommended
- `slaughterhouse.gg` (~$20/yr) — also great if available

Add to cart and check out.

---

### Step 2 — Create a free Vercel account
1. Go to **vercel.com**
2. Click "Sign Up" — use your Google account for the fastest setup
3. It's completely free for sites like this

---

### Step 3 — Deploy the site
1. Log into Vercel
2. Click **"Add New Project"**
3. Choose **"Deploy from your computer"** or drag and drop this folder
4. Vercel will give you a live URL instantly (e.g. `slaughterhouse-fantasy.vercel.app`)

---

### Step 4 — Connect your custom domain
1. In your Vercel project dashboard, go to **Settings → Domains**
2. Type in `slaughterhousefantasy.com` and click Add
3. Vercel will show you two DNS values to copy
4. Go to **Namecheap → Domain List → Manage → Advanced DNS**
5. Paste the two values Vercel gave you
6. Wait 10–30 minutes for it to go live

That's it. Your site will be live at slaughterhousefantasy.com.

---

## Activating the remaining tool pages

The `rankings.html` page is fully functional. For the other 4 tools, the full interactive HTML was built in Claude — to activate each page:

1. Open the Claude conversation
2. Find the tool page widget (Rookie Rankings, Calculator, Optimizer, Trade Analyzer)
3. Ask Claude: *"Give me the full standalone HTML for the [tool name] page"*
4. Replace the placeholder `.html` file with the full HTML Claude provides
5. Re-upload/re-deploy to Vercel (drag and drop again — takes 10 seconds)

---

## Future upgrades (when you're ready)

- **Live player data** — connect Sleeper API or FantasyPros for real rankings
- **User accounts** — allow managers to save their rosters
- **Platform import** — ESPN/Yahoo/Sleeper OAuth login to auto-pull rosters
- **Community forum** — Discord integration or custom forum
- **Mobile app** — React Native version of the tools

---

## Support
Built by Claude (Anthropic) for Slaughterhouse Fantasy.
For changes or new features, continue the conversation in Claude.
