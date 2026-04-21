import { useMemo, useState } from "react";
import { DB, patterns } from "./data";
import { PatternCard, ResultCard } from "./components";

const EVEN_CHARS = new Set(["2", "4", "6", "8"]);
const kindOf = (ch: string) => (EVEN_CHARS.has(ch) ? "gold" : "red");

export default function App() {
  const [input, setInput] = useState("");

  const exact = useMemo(
    () => (input.length < 3 ? [] : DB.filter((d) => d.code === input.toUpperCase())),
    [input]
  );
  const pats = useMemo(
    () => (input.length !== 3 ? [] : patterns(input.toUpperCase())),
    [input]
  );

  const tap = (c: string) => {
    if (input.length < 3) setInput((p) => p + c);
  };
  const done = input.length >= 3;

  const rows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "0"],
    ["V", "S", "←"],
  ];

  return (
    <div id="app">
      {/* ===== Header ===== */}
      <div className="hdr">
        <div className="hdr-eyebrow">MILLION · GOD · KISEKI</div>
        <h1 className="hdr-title">KISEKI</h1>
        <div className="hdr-jp">神々の軌跡</div>
        <div className="hdr-laurel">
          <span>LIQUID · CRYSTAL · CHECKER</span>
        </div>
        <div className="hdr-sub">液晶出目チェッカー</div>
      </div>

      <div className="gk-divider" />

      {/* ===== Display ===== */}
      <div className="frame display">
        <div className="display-lbl">— DISPLAY —</div>
        <div className="digit-row">
          {[0, 1, 2].map((i) => {
            const ch = input[i];
            const isCursor = !ch && i === input.length;
            const kind = ch ? kindOf(ch) : null;
            return (
              <div
                key={i}
                className={`digit-cell ${ch ? "filled" : ""} ${kind === "gold" ? "even" : ""} ${isCursor ? "cursor" : ""}`}
              >
                {ch && (
                  <span className="god-digit" data-ch={ch} data-kind={kind}>
                    {ch}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div className={`display-status ${done ? "done" : ""}`}>
          {input.length === 0
            ? "TAP · TO · INPUT"
            : done
            ? "▼ ORACULUM ▼"
            : `${3 - input.length} · MORE`}
        </div>
      </div>

      {/* ===== Keypad ===== */}
      <div className="kp-wrap">
        <div className="kp-grid">
          {rows.flat().map((b, idx) => {
            const isBack = b === "←";
            const disabled = !isBack && done;
            const kind = !isBack ? kindOf(b) : undefined;
            return (
              <button
                key={idx}
                className={`key ${isBack ? "back" : ""}`}
                data-ch={b}
                data-kind={kind}
                disabled={disabled}
                onClick={() => (isBack ? setInput((p) => p.slice(0, -1)) : tap(b))}
              >
                <span className="k-label">{b}</span>
              </button>
            );
          })}
        </div>

        <div className="ctrl-row">
          <button className="ctrl-btn" onClick={() => setInput("")}>
            ク リ ア
          </button>
        </div>
      </div>

      {/* ===== Results ===== */}
      {done && (
        <div className="result-section">
          {exact.length > 0 ? (
            <>
              <div className="section-eyebrow">— 固定出目 —</div>
              {exact.map((it, i) => (
                <ResultCard key={i} item={it} />
              ))}
            </>
          ) : (
            <div className="rcard-empty">NO · FIXED · MATCH</div>
          )}

          {pats.length > 0 && (
            <>
              <div className="section-eyebrow">— パターン法則 —</div>
              {pats.map((p, i) => (
                <PatternCard key={i} p={p} />
              ))}
            </>
          )}

          {exact.length === 0 && pats.length === 0 && (
            <div className="rcard-empty" style={{ marginTop: 8 }}>
              通常出目 · 特殊な意味なし
            </div>
          )}
        </div>
      )}

      {!done && (
        <div className="idle-hint">
          — TAP · 3 · DIGITS —
          <div className="idle-hint-jp">出目を3桁入力してください</div>
        </div>
      )}

      <div className="gk-divider" />
      <div className="foot">HiveMind · AkiraP · @AkiraP</div>
    </div>
  );
}
