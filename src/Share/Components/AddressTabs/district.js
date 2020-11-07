const district = {
  台北市: {
    中正區,
    大同區,
    中山區,
    松山區,
    大安區,
    萬華區,
    信義區,
    士林區,
    北投區,
    內湖區,
    南港區,
    文山區,
  },
  新北市: {
    板橋區,
    汐止區,
    深坑區,
    石碇區,
    新店區,
    烏來區,
    永和區,
    中和區,
    土城區,
    三峽區,
    三重區,
    新莊區,
    蘆洲區,
    五股區,
    八里區,
    淡水區,
  },
}

export const countries = Object.getOwnPropertyNames(data)
export const townships = countries.map((v, i, array) =>
  Object.getOwnPropertyNames(data[array[i]])
)
export const postcodes = countries.map((v, i, array) =>
  Object.values(data[array[i]])
)
