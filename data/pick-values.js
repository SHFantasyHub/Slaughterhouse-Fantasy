// ── SH FANTASY HUB — PICK VALUES DATABASE ──
// Used by: Trade Analyzer, Dynasty Calculator
//
// 2026 PICKS: Specific slots (1.01-1.12 for 12-team, etc.)
//   Values are exact — higher pick = more valuable
//   Update after each season when new slots are determined
//
// 2027-2029 PICKS: Early / Mid / Late by round
//   Values already discounted by year multiplier:
//   2026 = 100% face value (known class, specific slots)
//   2027 = 85% (deep class, strong value)
//   2028 = 45% (murky class, 2 years out)
//   2029 = 25% (speculative, nearly unknown)
//
// TO UPDATE: Change values after each draft to reflect new class strength
// Last updated: May 2026

// ── PICK VALUES ──
// 2026: specific slots per league size
// Format: [early picks higher value, late picks lower value]
const PICK_VALUES_2026 = {
  10: {
    1: [9200,8800,8400,8000,7600,7200,6800,6400,6000,5600],
    2: [5000,4600,4200,3800,3500,3200,2900,2600,2300,2000],
    3: [1800,1600,1400,1200,1100,1000,900,800,700,600],
    4: [550,500,450,400,350,300,280,260,240,220],
  },
  12: {
    1: [9200,8800,8400,8000,7600,7200,6800,6400,6000,5600,5200,4800],
    2: [4400,4000,3600,3200,2900,2600,2300,2000,1800,1600,1400,1200],
    3: [1100,1000,900,800,720,640,560,480,400,350,300,260],
    4: [240,220,200,180,160,150,140,130,120,110,100,90],
  },
  14: {
    1: [9200,8800,8400,8000,7600,7200,6800,6400,6000,5600,5200,4800,4400,4000],
    2: [3600,3200,2900,2600,2300,2000,1800,1600,1400,1200,1100,1000,900,800],
    3: [720,640,560,480,400,350,300,260,220,190,160,140,120,100],
    4: [90,80,72,64,56,48,40,36,32,28,24,20,18,16],
  }
};

// Future picks (2027-2029): Early/Mid/Late by round
const FUTURE_PICK_VALUES = {
  2027: {1:{Early:4200,Mid:3200,Late:2400},2:{Early:1800,Mid:1200,Late:800},3:{Early:600,Mid:400,Late:260},4:{Early:200,Mid:140,Late:90}},
  2028: {1:{Early:3600,Mid:2800,Late:2000},2:{Early:1500,Mid:1000,Late:660},3:{Early:500,Mid:330,Late:210},4:{Early:160,Mid:110,Late:70}},
  2029: {1:{Early:3000,Mid:2400,Late:1800},2:{Early:1200,Mid:800,Late:540},3:{Early:400,Mid:260,Late:170},4:{Early:130,Mid:90,Late:56}},
};

let sideA=[], sideB=[];
let pickTarget=null, selYear='2026', selRound=1, selSlot=null, selQuality=null;
let fmt='sf', tepMult=1.5, leagueSize=12;

// ── VALUE CALCULATION ──
function getVal(asset){
  if(asset.type==='player'){
    const p=asset.data;
    if(fmt==='ppr') return p.ppr;
    if(fmt==='half') return p.half;
    if(fmt==='sf') return p.sf;
    if(fmt==='tep'){
      // TEP: add bonus per reception * (mult-1) for TEs
      const bonus = p.pos==='TE' ? Math.round(p.ppr * (tepMult-1) * 0.15) : 0;
      return p.ppr + bonus;
    }
    return p.ppr;
  }
  if(asset.type==='pick') return asset.value;
  return 0;
}

function totalVal(side){ return side.reduce((s,a)=>s+getVal(a),0); }

// ── YEAR MULTIPLIERS (used for dynasty calculator grading) ──
// These reflect how much weight each year's picks carry in team grades
const YEAR_MULT={2026:1.0,2027:0.85,2028:0.45,2029:0.25};

// ── FUTURE PICK VALUES (2027-2029) ──
// Already discounted by year multiplier above
// Format: year -> round -> Early/Mid/Late -> value
const FUTURE_PICK_VALUES = {
  2027:{1:{Early:4200,Mid:3200,Late:2400},2:{Early:1800,Mid:1200,Late:800},3:{Early:600,Mid:400,Late:260},4:{Early:200,Mid:140,Late:90}},
  2028:{1:{Early:1900,Mid:1400,Late:1050},2:{Early:750,Mid:500,Late:330},3:{Early:240,Mid:160,Late:100},4:{Early:72,Mid:50,Late:32}},
  2029:{1:{Early:900,Mid:700,Late:530},2:{Early:360,Mid:240,Late:160},3:{Early:120,Mid:78,Late:50},4:{Early:38,Mid:26,Late:16}}
};
