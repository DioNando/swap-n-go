// textUtils.ts

export function capitalizeName(name: string) {
  const mots = name.split(" ");
  const motsFormattes = mots.map(
    (mot) => mot.charAt(0).toUpperCase() + mot.slice(1)
  );
  motsFormattes.shift();
  return motsFormattes.join(" ");
}

export function separateName(name: string) {
  const mots = name.split("-");
  return mots.join(" ");
}

export function getNameInitials(fullName: string): string {
  return fullName
    .split(" ")
    .filter((word) => word.length > 0) // S'assure de ne pas inclure d'espaces vides
    .slice(0, 2) // Ne garde que les deux premiers mots
    .map((word) => word[0].toUpperCase()) // Prend la première lettre en majuscule
    .join("");
}

