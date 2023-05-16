const umurFuzzyMuda = (umur) => {
  switch (true) {
    case umur <= 25:
      return 1;
    case umur >= 25 && umur <= 35:
      return (35 - umur) / (35 - 25);
    case umur >= 35:
      return 0;
  }
};

const umurFuzzyParobaya = (umur) => {
  switch (true) {
    case umur < 25 || umur > 40:
      return 0;
    case umur >= 25 && umur <= 35:
      return (umur - 25) / (35 - 25);
    case umur >= 35 && umur <= 40:
      return (40 - umur) / (40 - 35);
  }
};

const umurFuzzyTua = (umur) => {
  switch (true) {
    case umur <= 35:
      return 0;
    case umur > 35 && umur <= 40:
      return (umur - 35) / (40 - 35);
    case umur >= 40:
      return 1;
  }
};

const buildUmurFuzzy = (umur) => {
  return {
    umur_muda: umurFuzzyMuda(umur),
    umur_parobaya: umurFuzzyParobaya(umur),
    umur_tua: umurFuzzyTua(umur),
  };
};

module.exports = { buildUmurFuzzy };
