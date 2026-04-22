// ===== 神々の軌跡 液晶出目データベース =====

export type DemeType =
  | "special"
  | "reach"
  | "chance"
  | "gstop_w"
  | "gstop_s"
  | "ultra"
  | "t_short"
  | "v_mode"
  | "prep"
  | "normal"
  | "joke";

export interface Condition {
  w: string;
  r: string;
  i: string;
}

export interface DemeEntry {
  code: string;
  type: DemeType;
  label: string;
  desc: string;
  cond: Condition[] | null;
}

export type PatternLevel = "s" | "m" | "w" | "v" | "h";

export interface PatternMatch {
  lv: PatternLevel;
  lb: string;
  ds: string;
  cond: Condition[] | null;
}

export interface TypeStyle {
  c: string;
  accent: string;
  tg: string;
  ic: string;
}

export const DB: DemeEntry[] = [
  // ===== 特典揃い目 =====
  { code:"000", type:"special", label:"Z-ZONE突入", desc:"0揃い。Z-ZONE（上乗せ連鎖状態）突入濃厚。", cond:null },
  { code:"111", type:"special", label:"GG濃厚", desc:"奇数揃い。GG当選濃厚。", cond:null },
  { code:"333", type:"special", label:"GG濃厚", desc:"奇数揃い。GG当選濃厚。", cond:null },
  { code:"555", type:"special", label:"GG濃厚", desc:"奇数揃い。GG当選濃厚。", cond:null },
  { code:"777", type:"special", label:"GG4セット以上濃厚", desc:"7揃い。基本はGOD揃い時に出現。",
    cond:[{w:"GOD揃い時",r:"GG4セット以上濃厚",i:"🔥"},{w:"G-ZONE中",r:"残りストック4個以上示唆",i:"✅"}] },
  { code:"VVV", type:"special", label:"GG3セット以上濃厚", desc:"V揃い。GG3セット以上のストック濃厚。別名・超革命目。", cond:null },
  { code:"SSS", type:"special", label:"SGG突入", desc:"S揃い。SGG（スーパーゴッドゲーム）突入。ゲーム数変動型AT（75%ループ以上）。", cond:null },

  // ===== リーチ目 =====
  { code:"007", type:"reach", label:"007", desc:"GG当選濃厚。", cond:null },
  { code:"012", type:"reach", label:"朝イチ目", desc:"GG当選濃厚。",
    cond:[{w:"朝イチ状態（設定変更/電源ON直後）",r:"無効。通常出現するため判別不可",i:"⚠️"},{w:"通常遊技中",r:"リーチ目として有効",i:"✅"}] },
  { code:"026", type:"reach", label:"お風呂", desc:"GG当選濃厚。", cond:null },
  { code:"032", type:"reach", label:"お札", desc:"GG当選濃厚。", cond:null },
  { code:"038", type:"reach", label:"大宮", desc:"GG当選濃厚。", cond:null },
  { code:"046", type:"reach", label:"お城", desc:"GG当選濃厚。", cond:null },
  { code:"04V", type:"reach", label:"レシーブ", desc:"GG当選濃厚。", cond:null },
  { code:"075", type:"reach", label:"おなご", desc:"GG当選濃厚。", cond:null },
  { code:"0V0", type:"reach", label:"顔文字", desc:"GG当選濃厚。", cond:null },
  { code:"104", type:"reach", label:"天使", desc:"GG当選濃厚。", cond:null },
  { code:"110", type:"reach", label:"110番", desc:"GG当選濃厚。リーチ目中で唯一の奇数テンパイ形。「キン！」音が鳴る。", cond:null },
  { code:"123", type:"reach", label:"旧朝イチ出目", desc:"GG当選濃厚。",
    cond:[{w:"朝イチ状態（設定変更直後）",r:"朝イチ出目として出現するため無効",i:"⚠️"},{w:"通常遊技中",r:"リーチ目として有効",i:"✅"}] },
  { code:"135", type:"reach", label:"G-ZONE開始出目", desc:"GG当選濃厚。",
    cond:[{w:"G-ZONE突入時",r:"G-ZONE開始演出のため無効",i:"⚠️"},{w:"G-ZONE以外",r:"リーチ目として有効",i:"✅"}] },
  { code:"168", type:"reach", label:"いろは", desc:"GG当選濃厚。", cond:null },
  { code:"175", type:"reach", label:"イナゴ", desc:"GG当選濃厚。", cond:null },
  { code:"184", type:"reach", label:"いわし", desc:"GG当選濃厚。", cond:null },
  { code:"1V3", type:"reach", label:"イビサ島", desc:"GG当選濃厚。神々の軌跡で新規追加されたリーチ目。", cond:null },
  { code:"201", type:"reach", label:"におい", desc:"GG当選濃厚。スルーしがち。ヤメ時に要チェック。", cond:null },
  { code:"223", type:"reach", label:"富士山", desc:"GG当選濃厚。", cond:null },
  { code:"280", type:"reach", label:"ニーハオ", desc:"GG当選濃厚。", cond:null },
  { code:"283", type:"reach", label:"つばさ", desc:"GG当選濃厚。", cond:null },
  { code:"2V1", type:"reach", label:"ニブイチ", desc:"GG当選濃厚。語呂：2分の1。", cond:null },
  { code:"315", type:"reach", label:"最高", desc:"GG当選濃厚。", cond:null },
  { code:"324", type:"reach", label:"ミズホ", desc:"GG当選濃厚。メーカー名。", cond:null },
  { code:"344", type:"reach", label:"サシシ", desc:"GG当選濃厚。", cond:null },
  { code:"354", type:"reach", label:"神輿", desc:"GG当選濃厚。", cond:null },
  { code:"365", type:"reach", label:"365日", desc:"GG当選濃厚。", cond:null },
  { code:"415", type:"reach", label:"よい子", desc:"GG当選濃厚。", cond:null },
  { code:"423", type:"reach", label:"しじみ", desc:"GG当選濃厚。", cond:null },
  { code:"428", type:"reach", label:"四谷", desc:"GG当選濃厚。", cond:null },
  { code:"448", type:"reach", label:"使者", desc:"GG当選濃厚。", cond:null },
  { code:"481", type:"reach", label:"支配", desc:"GG当選濃厚。", cond:null },
  { code:"4V8", type:"reach", label:"渋谷", desc:"GG当選濃厚。", cond:null },
  { code:"508", type:"reach", label:"ゴーヤ", desc:"GG当選濃厚。", cond:null },
  { code:"510", type:"reach", label:"GOD", desc:"GG当選濃厚。GOD揃い濃厚目の可能性あり。", cond:null },
  { code:"514", type:"reach", label:"こいよ", desc:"GG当選濃厚。別名・こいよ目。114の次にこれが出たあなた、完走おめでとうございます。", cond:null },
  { code:"526", type:"reach", label:"小次郎", desc:"GG当選濃厚。", cond:null },
  { code:"543", type:"reach", label:"暦", desc:"GG当選濃厚。", cond:null },
  { code:"564", type:"reach", label:"殺し", desc:"GG当選濃厚。",
    cond:[{w:"注意",r:"凱旋では濃厚扱いされない報告あり。出現したら念のため続行推奨",i:"⚠️"}] },
  { code:"56V", type:"reach", label:"転ぶ", desc:"GG当選濃厚。", cond:null },
  { code:"5V0", type:"reach", label:"ご無礼", desc:"GG当選濃厚。", cond:null },
  { code:"5V4", type:"reach", label:"拳", desc:"GG当選濃厚。", cond:null },
  { code:"634", type:"reach", label:"武蔵", desc:"GG当選濃厚。", cond:null },
  { code:"664", type:"reach", label:"ロクムシ", desc:"GG当選濃厚。", cond:null },
  { code:"681", type:"reach", label:"無敗", desc:"GG当選濃厚。", cond:null },
  { code:"728", type:"reach", label:"浪速", desc:"GG当選濃厚。", cond:null },
  { code:"753", type:"reach", label:"七五三", desc:"GG当選濃厚。", cond:null },
  { code:"758", type:"reach", label:"名古屋", desc:"GG当選濃厚。", cond:null },
  { code:"78V", type:"reach", label:"7頭順目", desc:"GG当選濃厚。", cond:null },
  { code:"801", type:"reach", label:"ハワイ", desc:"GG当選濃厚。", cond:null },
  { code:"808", type:"reach", label:"八百屋", desc:"GG当選濃厚。", cond:null },
  { code:"821", type:"reach", label:"ハニー", desc:"GG当選濃厚。", cond:null },
  { code:"841", type:"reach", label:"弥生", desc:"GG当選濃厚。", cond:null },
  { code:"845", type:"reach", label:"ハシゴ", desc:"GG当選濃厚。", cond:null },
  { code:"850", type:"reach", label:"ハチ公", desc:"GG当選濃厚。", cond:null },
  { code:"873", type:"reach", label:"花見", desc:"GG当選濃厚。", cond:null },
  { code:"87V", type:"reach", label:"ハナビ", desc:"GG当選濃厚。", cond:null },
  { code:"884", type:"reach", label:"林", desc:"GG当選濃厚。", cond:null },
  { code:"V07", type:"reach", label:"ボーナス", desc:"GG当選濃厚。", cond:null },
  { code:"V31", type:"reach", label:"Vサイン", desc:"GG当選濃厚。", cond:null },
  { code:"V34", type:"reach", label:"バーサス", desc:"GG当選濃厚。", cond:null },

  // ===== チャンス目 =====
  { code:"38V", type:"chance", label:"雅（みやび）", desc:"チャンス目。歴代お馴染み。GG前兆中・当選Gで出現しやすい。", cond:null },
  { code:"461", type:"chance", label:"鎧（よろい）", desc:"チャンス目。神々の軌跡で新規追加。GG前兆示唆。", cond:null },
  { code:"468", type:"chance", label:"ヨーロッパ", desc:"チャンス目。歴代お馴染み。GG前兆中・当選Gで出現しやすい。", cond:null },
  { code:"631", type:"chance", label:"無罪", desc:"チャンス目。GG前兆中・当選Gで出現しやすい。", cond:null },
  { code:"831", type:"chance", label:"野菜", desc:"チャンス目。GG前兆中・当選Gで出現しやすい。", cond:null },
  { code:"101", type:"chance", label:"奇数ハサミ+中0", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"303", type:"chance", label:"奇数ハサミ+中0", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"505", type:"chance", label:"奇数ハサミ+中0", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"707", type:"chance", label:"奇数ハサミ+中0", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"100", type:"chance", label:"左奇数+ケツ0テンパイ", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"200", type:"chance", label:"左偶数+ケツ0テンパイ", desc:"軌跡のメーカー資料で明記。通常モード以上・GG前兆の示唆。", cond:null },
  { code:"300", type:"chance", label:"左奇数+ケツ0テンパイ", desc:"チャンス目。GG前兆示唆。", cond:null },
  { code:"500", type:"chance", label:"左奇数+ケツ0テンパイ", desc:"チャンス目。GG前兆示唆。", cond:null },

  // ===== ジョークMODE =====
  { code:"072", type:"joke", label:"オ○ニー目", desc:"<ジョークMODE>オ○ニー目。アホな検索してないで早く回してください。グッドラック！", cond:null },
  { code:"765", type:"joke", label:"ナムコ目", desc:"<ジョークMODE>ナムコ目。前身の社名が中村製作所だということは意外と知られていない。パックマンの生みの親にあやかって、ドットを食い尽くすように出玉を飲み込め。", cond:null },
  { code:"371", type:"joke", label:"見ない🙈目", desc:"<ジョークMODE>見ない目。都合の悪い収支は見ない。時給は計算しない。嫁にはバレない。三猿の教えに従うべし。", cond:null },
  { code:"710", type:"joke", label:"納豆目", desc:"<ジョークMODE>納豆目。ペナルティ中のGOD揃いで出現する悲哀目。ネバネバと絡みついた後悔を噛み締めながら、次ゲームへ。", cond:null },
  { code:"334", type:"joke", label:"阪神目", desc:"<ジョークMODE>阪神目。呪われし番号。岡田彰布が唱えた「アレ」の正体は、もしかするとGOD揃いだったのかもしれない。", cond:null },
  { code:"404", type:"joke", label:"Not Found目", desc:"<ジョークMODE>Not Found目。あなたが探している当たりは見つかりませんでした。サーバーではなく、あなたの引きの問題です。", cond:null },
  { code:"420", type:"joke", label:"ウィード目", desc:"<ジョークMODE>ウィード目。※この出目を見て気分が高揚しても、それは合法です。ただしハマりは合法的に痛い。", cond:null },
  { code:"666", type:"joke", label:"獣の数字目", desc:"<ジョークMODE>獣の数字目。視界にシュッと通り過ぎた瞬間に感じるのは達成感とプレッシャー。革命RUSHよ永遠に。", cond:null },
  { code:"360", type:"joke", label:"全方位目", desc:"<ジョークMODE>全方位目。隣の台、後ろの通路、店員の視線、嫁からのLINE。全方位に気を配れ。ただし画面への集中は切らすな。", cond:null },
  { code:"454", type:"joke", label:"シコ目", desc:"<ジョークMODE>シコ目。072目の親戚。検索傾向から察するに、今日の稼働は長くなりそうですね。水分補給を忘れずに。", cond:null },
  { code:"117", type:"joke", label:"時報目", desc:"<ジョークMODE>時報目。ピッ、ピッ、ピッ、ポーン。現在の時刻をお知らせします。「もう一回だけ」と思ってから、すでに3時間経過しています。", cond:null },
  { code:"081", type:"joke", label:"π目", desc:"<ジョークMODE>π目。出たらある意味ゴール。", cond:null },
  { code:"484", type:"joke", label:"冥界目", desc:"<ジョークMODE>冥界目。名機アナザーゴッドハーデスでは冥界目として君臨した。本作で意味があるかは不明だが出現したら挙動に注意。", cond:null },
  { code:"848", type:"joke", label:"冥界目", desc:"<ジョークMODE>冥界目。名機アナザーゴッドハーデスでは冥界目として君臨した。本作で意味があるかは不明だが出現したら挙動に注意。", cond:null },
  { code:"810", type:"joke", label:"野獣目", desc:"<ジョークMODE>野獣目。24歳、学生です。イキスギィ！な投資額にはご注意ください。", cond:null },
  { code:"114", type:"joke", label:"いいよ目", desc:"<ジョークMODE>いいよ目。次に514が来た場合、当アプリは一切の責任を負いません。", cond:null },
  { code:"413", type:"joke", label:"シーサ。目", desc:"<ジョークMODE>シーサ。目。出たらおでこを光らせてください。すると異常なまでに強いヒキが発揮できるでしょう。", cond:null },
  { code:"427", type:"joke", label:"鹿児島ちゃん目", desc:"<ジョークMODE>鹿児島ちゃん目。界隈の住人・鹿児島ちゃんが2桁以上ぶっ込んで辞めるちょっと前に出た数字。大丈夫。生きてるだけで偉いんだ。", cond:null },

  // ===== Z-ZONEチャンス目 =====
  { code:"017", type:"gstop_w", label:"Z-ZONE弱チャンス目", desc:"Z-ZONE前兆示唆（弱）。0頭+7含み。頻出すれば期待。", cond:null },
  { code:"01V", type:"gstop_w", label:"Z-ZONE弱チャンス目", desc:"Z-ZONE前兆示唆（弱）。0+奇数+V。頻出すれば期待。", cond:null },
  { code:"022", type:"gstop_w", label:"Z-ZONE弱チャンス目", desc:"Z-ZONE前兆示唆（弱）。0+偶数ケツテンパイ。頻出すれば期待。", cond:null },
  { code:"00V", type:"gstop_s", label:"Z-ZONE強チャンス目", desc:"Z-ZONE前兆示唆（強）。0テンパイ+V。1度でも出れば期待大。", cond:null },
  { code:"011", type:"gstop_s", label:"Z-ZONE強チャンス目", desc:"Z-ZONE前兆示唆（強）。0+奇数ケツテンパイ。1度でも期待大。", cond:null },
  { code:"020", type:"gstop_s", label:"Z-ZONE強チャンス目", desc:"Z-ZONE前兆示唆（強）。0ハサミ+中偶数。1度でも期待大。", cond:null },
  { code:"0V7", type:"gstop_s", label:"Z-ZONE強チャンス目", desc:"Z-ZONE前兆示唆（強）。0+V+7。1度でも期待大。", cond:null },

  // ===== 天国ショート以上 =====
  { code:"V7V", type:"t_short", label:"天国ショート以上濃厚", desc:"V7ハサミ。天国ショート以上濃厚。", cond:null },
  { code:"700", type:"t_short", label:"天国ショート以上濃厚", desc:"7+0ケツテンパイ。天国ショート以上濃厚。", cond:null },
  { code:"V1V", type:"t_short", label:"天国ショート以上濃厚", desc:"Vハサミ+中奇数。", cond:null },
  { code:"V3V", type:"t_short", label:"天国ショート以上濃厚", desc:"Vハサミ+中奇数。", cond:null },
  { code:"V5V", type:"t_short", label:"天国ショート以上濃厚", desc:"Vハサミ+中奇数。", cond:null },
  { code:"V00", type:"t_short", label:"天国ショート以上濃厚", desc:"V+0ケツテンパイ。", cond:null },
  { code:"V77", type:"t_short", label:"天国ショート以上濃厚", desc:"V+7ケツテンパイ。", cond:null },

  // ===== Vモード =====
  { code:"V0V", type:"v_mode", label:"Vモード示唆", desc:"Vハサミ+中0。",
    cond:[{w:"単発",r:"天国以上示唆。天国中 1/140〜1/190 に対し天国以外は約1/1000（※前作参考値）",i:"△"},{w:"頻発",r:"Vモード滞在濃厚（1/6.8 ※前作参考値）",i:"🔥"}] },
  { code:"V2V", type:"v_mode", label:"Vモード示唆/チャンス目", desc:"Vハサミ+中偶数。チャンス目兼用。",
    cond:[{w:"単発",r:"天国以上示唆。天国中 1/140〜1/190 に対し天国以外は約1/1000（※前作参考値）",i:"△"},{w:"頻発",r:"Vモード滞在濃厚（1/6.8 ※前作参考値）",i:"🔥"}] },
  { code:"V4V", type:"v_mode", label:"Vモード示唆/チャンス目", desc:"Vハサミ+中偶数。チャンス目兼用。",
    cond:[{w:"単発",r:"天国以上示唆。天国中 1/140〜1/190 に対し天国以外は約1/1000（※前作参考値）",i:"△"},{w:"頻発",r:"Vモード滞在濃厚（1/6.8 ※前作参考値）",i:"🔥"}] },
  { code:"V6V", type:"v_mode", label:"Vモード示唆/チャンス目", desc:"Vハサミ+中偶数。",
    cond:[{w:"単発",r:"天国以上示唆。天国中 1/140〜1/190 に対し天国以外は約1/1000（※前作参考値）",i:"△"},{w:"頻発",r:"Vモード滞在濃厚（1/6.8 ※前作参考値）",i:"🔥"}] },
  { code:"V8V", type:"v_mode", label:"Vモード示唆", desc:"Vハサミ+中偶数。",
    cond:[{w:"単発",r:"天国以上示唆。天国中 1/140〜1/190 に対し天国以外は約1/1000（※前作参考値）",i:"△"},{w:"頻発",r:"Vモード滞在濃厚（1/6.8 ※前作参考値）",i:"🔥"}] },

  // ===== 天国準備以上 =====
  ...["131","151","171","313","353","373","515","535","575","717","737"].map<DemeEntry>(c=>({code:c,type:"prep",label:"天国準備以上濃厚",desc:"奇数ハサミ+中奇数。",cond:null})),
  { code:"757", type:"t_short", label:"天国以上濃厚", desc:"7ハサミ+中奇数。", cond:null },
  ...["010","030","050","070"].map<DemeEntry>(c=>({code:c,type:"prep",label:"天国準備以上濃厚",desc:"0ハサミ+中奇数。凱旋から追加の0図柄パターン。",cond:null})),
  ...["177","377","577"].map<DemeEntry>(c=>({code:c,type:"prep",label:"天国準備以上濃厚",desc:"左奇数+7ケツテンパイ。",cond:null})),
  { code:"345", type:"prep", label:"天国準備以上示唆（強）", desc:"奇数順目。", cond:null },
  { code:"567", type:"prep", label:"天国準備以上示唆（強）", desc:"奇数順目。", cond:null },
  { code:"V01", type:"prep", label:"天国準備以上示唆（強）", desc:"奇数順目扱い。", cond:null },
  { code:"234", type:"normal", label:"通常モード以上示唆", desc:"偶数順目。リプ成立時出現で天国準備以上示唆（強）。", cond:null },
  { code:"456", type:"normal", label:"通常モード以上示唆", desc:"偶数順目。リプ成立時出現で天国準備以上示唆（強）。", cond:null },
  { code:"678", type:"normal", label:"通常モード以上示唆", desc:"偶数順目。リプ成立時出現で天国準備以上示唆（強）。", cond:null },
  { code:"8V0", type:"normal", label:"通常モード以上示唆", desc:"偶数順目扱い。リプ成立時出現で天国準備以上示唆（強）。", cond:null },
  ...["727","767","787"].map<DemeEntry>(c=>({code:c,type:"prep",label:"天国準備以上濃厚",desc:"7ハサミ+中偶数。遅れが条件。",
    cond:[{w:"遅れ演出あり",r:"天国準備以上濃厚",i:"🔥"},{w:"遅れなし",r:"特に意味なし",i:"—"}]})),
  { code:"747", type:"t_short", label:"天国以上示唆（強）", desc:"7ハサミ+中偶数。", cond:null },
  ...["701","703","705"].map<DemeEntry>(c=>({code:c,type:"prep",label:"天国準備以上濃厚",desc:"70+奇数。遅れが条件。",
    cond:[{w:"遅れ演出あり",r:"天国準備以上濃厚",i:"🔥"},{w:"遅れなし",r:"特に意味なし",i:"—"}]})),
];

// ===== パターン法則 =====
export function patterns(code: string): PatternMatch[] {
  if (code.length !== 3) return [];
  const r: PatternMatch[] = [];
  const [a, b, c] = code.split("");
  const O = ["1", "3", "5", "7"];
  const E = ["2", "4", "6", "8"];
  const oq = (x: string) => O.includes(x);
  const eq = (x: string) => E.includes(x);
  const has = DB.some((d) => d.code === code);

  if (a === "V" || b === "V" || c === "V")
    r.push({
      lv: "v",
      lb: "V図柄含み → Vモード示唆",
      ds: "V出現率: Vモード中 約1/4.66、その他 約1/132〜1/24（※前作参考値）。短期間に集中すればVモード濃厚。",
      cond: [
        { w: "単発", r: "弱い示唆", i: "△" },
        { w: "短期間に複数回", r: "上位モード滞在濃厚", i: "🔥" },
      ],
    });
  if ((a === "7" || b === "7" || c === "7") && !has)
    r.push({
      lv: "h",
      lb: "7図柄含み → 複数回出現で天国以上示唆",
      ds: "高モードほど出現率UP（低確:約1/991→天国S:約1/57→超天国:約1/40）。単発は弱い。",
      cond: null,
    });
  const n = [a, b, c].map((x) => ("0123456789".includes(x) ? +x : -1));
  if (!has && n[0] >= 1 && n[0] % 2 === 1 && n[1] === n[0] + 1 && n[2] === n[0] + 2)
    r.push({
      lv: "s",
      lb: "奇数順目 → 天国準備以上濃厚",
      ds: "成立役で変化。",
      cond: [
        { w: "ハズレ成立", r: "天国モード（ショート以上）濃厚", i: "🔥" },
        { w: "その他", r: "天国準備モード以上濃厚", i: "✅" },
      ],
    });
  if (!has && n[0] >= 2 && n[0] % 2 === 0 && n[1] === n[0] + 1 && n[2] === n[0] + 2)
    r.push({
      lv: "m",
      lb: "偶数順目 → 通常モード以上示唆",
      ds: "成立役で変化。通常モード滞在時に出現しやすい。",
      cond: [
        { w: "中段青7成立", r: "天国準備モード以上濃厚", i: "🔥" },
        { w: "その他", r: "通常モード以上期待度UP", i: "△" },
      ],
    });
  if (eq(a) && oq(b) && oq(c) && b === c && !has)
    r.push({
      lv: "w",
      lb: "左偶数+奇数ケツテンパイ → 通常モード以上示唆（弱）",
      ds: "弱い示唆。",
      cond: null,
    });
  if (oq(a) && oq(b) && oq(c) && b === c && a !== b && !has)
    r.push({
      lv: "m",
      lb: "左奇数+奇数ケツテンパイ → 通常モード以上濃厚",
      ds: "偶数順目と同等～やや上。",
      cond: null,
    });
  if (!has && b === c && a !== b && ((oq(a) && b === "V") || (a === "V" && oq(b))))
    r.push({
      lv: "m",
      lb: "左奇数+奇数ケツテンパイ → 通常モード以上濃厚",
      ds: "V関与のケツテンパイ。V含み示唆と併せて判断。",
      cond: null,
    });
  if (oq(a) && a === b && c !== a && !has) {
    const cd: Condition[] = [];
    if (c === "0" || c === "V" || c === "7")
      cd.push({ w: "右が0・V・7", r: "前兆期待度UP", i: "🔥" });
    cd.push({ w: "頻発", r: "GG前兆中に出現しやすい", i: "✅" });
    r.push({
      lv: "w",
      lb: "奇数テンパイ → 前兆示唆",
      ds: "左中同一奇数。右図柄で期待度変化。",
      cond: cd,
    });
  }
  if (oq(a) && oq(b) && oq(c) && a === c && a !== b && !has)
    r.push({
      lv: "s",
      lb: "奇数ハサミ+中奇数 → 天国準備以上濃厚",
      ds: "強いモード示唆。",
      cond: null,
    });

  const priority: Record<PatternLevel, number> = { s: 4, m: 3, v: 2, h: 1, w: 0 };
  r.sort((x, y) => priority[y.lv] - priority[x.lv]);
  return r;
}

export const TYPE_STYLES: Record<DemeType, TypeStyle> = {
  special: { c: "#FFD66A", accent: "#c99020", tg: "特典揃い目",     ic: "★" },
  reach:   { c: "#FF5252", accent: "#8a1020", tg: "リーチ目",       ic: "◆" },
  chance:  { c: "#FFA040", accent: "#a85a10", tg: "チャンス目",     ic: "◈" },
  gstop_w: { c: "#8FD0EE", accent: "#2a5870", tg: "Z-ZONE前兆(弱)", ic: "△" },
  gstop_s: { c: "#5B9BFF", accent: "#1d3a7a", tg: "Z-ZONE前兆(強)", ic: "▲" },
  ultra:   { c: "#FF66D9", accent: "#7a1e6a", tg: "超天国",         ic: "♛" },
  t_short: { c: "#C98BFF", accent: "#5a2a80", tg: "天国モード以上", ic: "✦" },
  v_mode:  { c: "#35E68A", accent: "#1a6a40", tg: "Vモード",        ic: "V" },
  prep:    { c: "#8FE08F", accent: "#2f6a2f", tg: "天国準備以上",   ic: "↑" },
  normal:  { c: "#C9C07E", accent: "#5a5230", tg: "通常以上",       ic: "↗" },
  joke:    { c: "#E0B0FF", accent: "#604080", tg: "ジョークMODE",   ic: "🤡" },
};
