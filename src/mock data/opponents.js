const opponents = [
   {
      name: "Goblin",
      level: 1,
      image: "goblin2.jpg",
      hp: 15, //hit points
      ap: 0, //action points
      pwr: 2, // damage modification
      lck: 2, //luck check crit
      actions: [
         // allows for different moves

         {
            name: "Bash",
            description: "bashes",
            type: "attack",
            modifiedStats: [{ targetStat: "Pwr", mod: 0, isPermanent: false }],
         }, //In my mind, since it doesn't targetStat LCK, it never sends a luck stat to check for a crit.  If it did targetStat LCK, even if it left luck unmodified, it would check for crit.
      ],
   },
   {
      name: "Orc",
      level: 2,
      image: "orc.jpg",
      hp: 30, //hit points
      ap: 0, //action points
      pwr: 4, // damage modification
      lck: 3, //luck check crit
      actions: [
         // allows for different moves

         {
            name: "Mash",
            description: "mashes",
            type: "attack",
            modifiedStats: [
               { targetStat: "Pwr", mod: 0, isPermanent: false },
               { targetStat: "Lck", mod: 0, isPermanent: false },
            ],
         },
      ],
   },
   {
      name: "Ogre",
      level: 3,
      image: "ogre.jpg",
      hp: 60, //hit points
      ap: 0, //action points
      pwr: 6, // damage modification
      lck: 3, //luck check crit
      actions: [
         // allows for different moves

         {
            name: "Smash",
            description: "Smashes",
            type: "attack",
            modifiedStats: [
               { targetStat: "Pwr", mod: 5, isPermanent: false },
               { targetStat: "Lck", mod: 0, isPermanent: false },
            ],
         },
      ],
   },
];
