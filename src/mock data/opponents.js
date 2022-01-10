const opponents = [
   {
      name: "Goblin",
      level: 1,
      image: "goblin.webp",
      hp: 15,
      ap: 0,
      pwr: 2,
      lck: 2,
      actions: [
         {
            name: "Bash",
            description: "bashes",
            type: "attack",
            pwr: 0,
            lck: 0,
         },
      ],
   },
   {
      name: "Orc",
      level: 2,
      image: "orc.webp",
      hp: 30,
      ap: 0,
      pwr: 4,
      lck: 3,
      actions: [
         {
            name: "Mash",
            description: "mashes",
            type: "attack",
            pwr: 1,
            lck: 0,
         },
         {
            name: "Super Mash",
            description: "MASHES",
            type: "attack",
            pwr: 3,
            lck: 0,
         },
      ],
   },
   {
      name: "Ogre",
      level: 3,
      image: "ogre.webp",
      hp: 60,
      ap: 0,
      pwr: 6,
      lck: 3,
      actions: [
         {
            name: "Smash",
            description: "smashes",
            type: "attack",
            pwr: 4,
            lck: 0,
         },
      ],
   },
];

export default opponents;
