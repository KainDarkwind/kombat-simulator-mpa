const users = [
   {
      email: "mike@tenxcode.com",
      password: "7F70DA91F80FCA9EE4CF1826ABE3E181",
      characters: [
         {
            // allows for multiple characters in the future
            name: "She-Ra",
            level: 1,
            image: "hero-female.webp",
            hp: 12, //hit points
            ap: 6, //action points

            pwr: 3, // damage mod (incoming and outgoing)
            lck: 2, // 'Luck', crit (outgoing) and dodge (incoming)
            actions: [
               // allows for different moves

               {
                  name: "Stab",
                  description: "stabs",
                  type: "attack",
                  modifiedStats: [
                     { targetStat: "pwr", mod: 0, isPermanent: false },
                     { targetStat: "lck", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: 2, isPermanent: true },
                  ],
               },
               {
                  name: "Slash",
                  description: "slashes",
                  type: "attack",
                  modifiedStats: [
                     { targetStat: "pwr", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: 3, isPermanent: true },
                  ],
               },
               {
                  name: "Shield",
                  description: "blocks",
                  type: "defense",
                  modifiedStats: [
                     { targetStat: "pwr", mod: 5, isPermanent: false },
                     { targetStat: "lck", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: -2, isPermanent: true },
                  ],
               },
            ],
         },
      ],
   },
   {
      email: "kal@superman.com",
      password: "0F5F608196BD2B2172C562591B414941",
      characters: [
         {
            // allows for multiple characters in the future
            name: "He-ro",
            level: 10,
            image: "hero-male.jpg",
            hp: 160, //hit points
            ap: 11, //action points
            pwr: 11, //power modifies damage
            lck: 10, //luck modifies crit
            actions: [
               // allows for different moves

               {
                  name: "Stab",
                  description: "stabs",
                  type: "attack",
                  modifiedStats: [
                     { targetStat: "lck", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: 2, isPermanent: true },
                  ],
               },
               {
                  name: "Slash",
                  description: "slashes",
                  type: "attack",
                  modifiedStats: [
                     { targetStat: "pwr", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: 3, isPermanent: true },
                  ],
               },
               {
                  name: "Shield",
                  description: "blocks",
                  type: "defense",
                  modifiedStats: [
                     { targetStat: "pwr", mod: 5, isPermanent: false },
                     { targetStat: "lck", mod: 5, isPermanent: false },
                     { targetStat: "ap", mod: -2, isPermanent: true },
                  ],
               },
            ],
         },
      ],
   },
];

export default users;
