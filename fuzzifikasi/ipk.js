const ipkFuzzyCukupBaik = (ipk) => {
  switch (true) {
    case ipk <= 2.5:
      return 1;
    case ipk > 2.5 && ipk <= 3:
      return (3 - ipk) / (3 - 2.5);
    case ipk > 3:
      return 0;
  }
};

const ipkFuzzyBaik = (ipk) => {
  switch (true) {
    case ipk < 2.5 || ipk > 3.5:
      return 0;
    case ipk >= 2.5 && ipk <= 3:
      return (ipk - 2.5) / (3 - 2.5);
    case ipk >= 3 && ipk <= 3.5:
      return (3.5 - ipk) / (3.5 - 3);
  }
};

const ipkFuzzySangatBaik = (ipk) => {
  switch (true) {
    case ipk <= 3:
      return 0;
    case ipk > 3 && ipk <= 3.5:
      return (ipk - 3) / (3.5 - 3);
    case ipk > 3.5:
      return 1;
  }
};

const buildIpkFuzzy = (ipk) => {
  return {
    ipk_cukup_baik: ipkFuzzyCukupBaik(ipk),
    ipk_baik: ipkFuzzyBaik(ipk),
    ipk_sangat_baik: ipkFuzzySangatBaik(ipk),
  };
};

module.exports ={buildIpkFuzzy}