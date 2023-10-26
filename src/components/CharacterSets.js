const characterSets = {
    Guard: ["Specter", "Indra", "Swire"],
    DPS: ["Indra", "Swire", "Firewatch"],
    Support: ["Swire", "Ptilopsis", "Tsukinogi"],
  };

export default characterSets;
// {
//   Guard: ["Specter", "Indra", "Swire"],
//   DPS: ["Indra", "Swire", "Firewatch"],
//   Support: ["Swire", "Ptilopsis", "Tsukinogi"],
// };

// // Kalau pake export default, this thing is exported as default object
// // Kalau pake export default -> import things from directory
// export const characterSets = {};
// {
//   characterSets: {
//     Guard: ["Specter", "Indra", "Swire"],
//     DPS: ["Indra", "Swire", "Firewatch"],
//     Support: ["Swire", "Ptilopsis", "Tsukinogi"],
//   }
// };

// import things from directory

// things.characterSets

// import { characterSets } from directory

// // Kalau pake export const something, bisa banyak hal, jadi perlu di-destructure
// // Kalau pake export const something -> import { something } from directory

// Object
// const characterSets = {
//   Guard: ["Specter", "Indra", "Swire"],
//   DPS: ["Indra", "Swire", "Firewatch"],
//   Support: ["Swire", "Ptilopsis", "Tsukinogi"],
// };

// const a = characterSets;
// {
//   Guard: ["Specter", "Indra", "Swire"],
//   DPS: ["Indra", "Swire", "Firewatch"],
//   Support: ["Swire", "Ptilopsis", "Tsukinogi"],
// };

// const { Guard } = characterSets;
// ["Specter", "Indra", "Swire"]
