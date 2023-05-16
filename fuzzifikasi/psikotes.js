const psikotesFuzzyCukupBaik = (skor) => {
  switch (true) {
    case skor <= 70:
      return 1;
    case skor >= 70 && skor <= 80:
      return (80 - skor) / (80 - 70);
    case skor >= 80:
      return 0;
  }
};

const psikotesFuzzyBaik = (skor) => {
  switch (true) {
    case skor < 70 || skor > 90:
      return 0;
    case skor >= 70 && skor <= 80:
      return (skor - 70) / (80 - 70);
    case skor >= 80 && skor <= 90:
      return (90 - skor) / (90 - 80);
  }
};

const psikotesFuzzySangatBaik = (skor) => {
  switch (true) {
    case skor <= 80:
      return 0;
    case skor > 80 && skor <= 90:
      return (skor - 80) / (90 - 80);
    case skor >= 90:
      return 1;
  }
};

const buildPsikotesFuzzy = (skor) => {
  return {
    psikotes_cukup_baik: psikotesFuzzyCukupBaik(skor),
    psikotes_baik: psikotesFuzzyBaik(skor),
    psikotes_sangat_baik: psikotesFuzzySangatBaik(skor),
  };
};

module.exports = { buildPsikotesFuzzy };
