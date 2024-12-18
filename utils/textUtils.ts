// textUtils.ts

export function capitalizeName(name:string) {
  const mots = name.split(" ");
  const motsFormattes = mots.map(
    (mot) => mot.charAt(0).toUpperCase() + mot.slice(1)
  );
  motsFormattes.shift();
  return motsFormattes.join(" ");
}

export function separateName(name:string) {
  const mots = name.split("-");
  return mots.join(" ");
}

export function getNameInitials(fullName:string) {
  return fullName
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}
