// Všechny texty na jednom místě, ať se dá web snadno upravit.
export const jmeno = "František";

export const menu = [
  { id: "home", label: "Domů" },
  { id: "omne", label: "O mně" },
  { id: "dovednosti", label: "Dovednosti" },
  { id: "kontakt", label: "Kontakt" },
];

export const dovednosti = [
  { nazev: "Cyber Security", popis: "OWASP Top 10, základy pentestingu a bezpečný návrh systémů.", tagy: ["OWASP", "Pentesting"] },
  { nazev: "Web Development", popis: "Responzivní weby v HTML, CSS a JavaScriptu, WordPress a React.", tagy: ["HTML", "CSS", "JS", "React"] },
  { nazev: "C#", popis: "První konzolové programy, OOP a základy v .NET.", tagy: [".NET", "OOP"] },
  { nazev: "Python", popis: "Skriptování a vlastní bezpečnostní nástroje, třeba skener portů.", tagy: ["Scripting", "Sockets"] },
  { nazev: "Sítě", popis: "TCP/IP, subnetting a analýza síťového provozu.", tagy: ["TCP/IP", "Subnetting"] },
  { nazev: "Linux & databáze", popis: "Práce v terminálu, Bash a SQL včetně ochrany proti SQL injection.", tagy: ["Bash", "SQL"] },
];

export const kontakty = [
  { label: "GitHub", hodnota: "Moje repozitáře a projekty", href: "https://github.com/frantiseknahlik" },
  { label: "Instagram", hodnota: "@frantissekk", href: "https://www.instagram.com/frantissekk" },
];
