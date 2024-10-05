export const factionNames = [
  "The Arborec",
  "The Barony of Letnev",
  "The Clan of Saar",
  "The Embers of Muaat",
  "The Emirates of Hacan",
  "The Federation of Sol",
  "The Ghosts of Creuss",
  "The L1Z1X Mindnet",
  "The Mentak Coalition",
  "The Naalu Collective",
  "The Nekro Virus",
  "Sardakk N'orr",
  "The Universities of Jol-Nar",
  "The Winnu",
  "The Xxcha Kingdom",
  "The Yin Brotherhood",
  "The Yssaril Tribes",
  "The Argent Flight",
  "The Empyrean",
  "The Mahact Gene-Sorcerers",
  "The Naaz-Rokha Alliance",
  "The Nomad",
  "The Titans of Ul",
  "The Vuil'Raith Cabal",
  "The Council Keleres",
];

export const convertNameToScrapePath = (name: string) => {
  return name.replace(/ /g, "_").replace(/'/g, "%27");
};
export const convertNameToAppPath = (name: string) => {
  return name
    .replace("The ", "")
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z-]/g, "")
    .toLowerCase();
};
