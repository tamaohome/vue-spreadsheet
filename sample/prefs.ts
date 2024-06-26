export const data = [
  // ["都道府県名", "県庁所在地", "人口", "面積", "特産品"],
  ["北海道", "札幌市", 5281297, 83453.57, "ジンギスカン"],
  ["青森県", "青森市", 1273122, 9645.65, "りんご"],
  ["岩手県", "盛岡市", 1279594, 15275.01, "わんこそば"],
  ["宮城県", "仙台市", 2320351, 7282.22, "牛タン"],
  ["秋田県", "秋田市", 966428, 11637.55, "なまはげ"],
  ["山形県", "山形市", 1123891, 9323.15, "さくらんぼ"],
  ["福島県", "福島市", 1906640, 13783.74, "福島牛"],
];

export const columns = [
  { type: "text", title: "都道府県名", width: 100 },
  { type: "text", title: "県庁所在地", width: 100 },
  { type: "numeric", title: "人口", width: 100 },
  { type: "numeric", title: "面積", width: 100 },
  { type: "text", title: "特産品", width: 150 },
];
