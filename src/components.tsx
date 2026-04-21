import type { CSSProperties } from "react";
import { TYPE_STYLES, type Condition, type DemeEntry, type PatternMatch } from "./data";

type AccentStyle = CSSProperties & { "--accent"?: string; "--c"?: string; "--pc"?: string };

export function Conds({ cond, accent }: { cond: Condition[] | null; accent: string }) {
  if (!cond) return null;
  const style: AccentStyle = { "--accent": accent };
  return (
    <div className="conds" style={style}>
      <div className="conds-head">▼ 条件別</div>
      {cond.map((c, i) => (
        <div key={i} className="cond-row">
          <span className="cond-ic">{c.i}</span>
          <div className="cond-body">
            <div className="cond-when">{c.w}</div>
            <div className="cond-result">{c.r}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResultCard({ item }: { item: DemeEntry }) {
  const s = TYPE_STYLES[item.type];
  const cardStyle: AccentStyle = { "--accent": s.accent, "--c": s.c };
  const tagStyle: AccentStyle = { "--c": s.c };
  const codeStyle: AccentStyle = { "--c": s.c };
  return (
    <div className="rcard" style={cardStyle}>
      <div className="rcard-head">
        <span className="rtag" style={tagStyle}>
          <span className="rtag-ic">{s.ic}</span>
          {s.tg}
        </span>
        <span className="rcard-code" data-typec style={codeStyle}>
          {item.code}
        </span>
        <span className="rcard-label">{item.label}</span>
      </div>
      <div className="rcard-desc">{item.desc}</div>
      <Conds cond={item.cond} accent={s.accent} />
    </div>
  );
}

const PATTERN_COLORS: Record<string, string> = {
  s: "#8FE08F",
  m: "#8FD0EE",
  w: "#c9b892",
  v: "#35E68A",
  h: "#FFD76A",
};

export function PatternCard({ p }: { p: PatternMatch }) {
  const pc = PATTERN_COLORS[p.lv] || "#c9b892";
  const style: AccentStyle = { "--pc": pc };
  return (
    <div className="pcard" style={style}>
      <div className="pcard-lbl">{p.lb}</div>
      <div className="pcard-ds">{p.ds}</div>
      <Conds cond={p.cond} accent={pc} />
    </div>
  );
}
