const users = [
   {
      email: "mike@tenxcode.com",
      password: "7F70DA91F80FCA9EE4CF1826ABE3E181",
      characters: [
         {
            // allows for multiple characters in the future
            name: "She-Ra",
            level: 1,
            image: "hero-female.jpg",
            hp: 12, //hit points
            ap: 6, //action points
            ac: 8, // to hit roll needs to equal this or higher to deal damage.
            str: 2, // attack dmg
            dex: 1, // attack accuracy
            end: 2, // reduces enemy dmg, improves hp
            mnd: 1, // improves ap
            agi: 3, // improves AC/attack avoiding
            spr: 2, // 'Luck', improves crit
            actions: [
               // allows for different moves

               { description: "stabs", damage: 0, apCost: 2 },
               { description: "slashes", damage: 1, apCost: 3 },
               { description: "defends", damage: 0, apCost: -2 },
            ],
            weapons: [
               // modifies attacks (will be locked to single basic non-modifying for v.1)
               {
                  name: "sword",
                  description: "sword",
                  attack: 1,
                  damageMin: 1,
                  damageMax: 8,
                  apCost: 0,
                  backstab: 0,
                  inPossession: true,
               },
            ],
            armors: [
               //modifies defense (will be locked to single non-modifying for v.1)
               {
                  name: "breastplate v1",
                  description: "armor",
                  damageReduction: 0,
                  armorClass: 5,
                  apRegen: 0,
                  inPossession: true,
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
            ac: 11, // to hit roll needs to equal this or higher to deal damage.
            str: 6, // attack dmg
            dex: 5, // attack accuracy
            end: 6, // reduces enemy dmg, improves hp
            mnd: 5, // improves ap
            agi: 6, // improves AC/attack avoiding
            spr: 5, // 'Luck', improves crit
            actions: [
               // allows for different moves

               { description: "stabs", damage: 0, apCost: 2 },
               { description: "slashes", damage: 1, apCost: 3 },
               { description: "defends", damage: 0, apCost: -2 },
            ],
            weapons: [
               // modifies attacks (will be locked to single basic non-modifying for v.1)
               {
                  name: "sword",
                  description: "sword",
                  attack: 1,
                  damageMin: 1,
                  damageMax: 8,
                  apCost: 0,
                  backstab: 0,
                  inPossession: true,
               },
            ],
            armors: [
               //modifies defense (will be locked to single non-modifying for v.1)
               {
                  name: "breastplate v1",
                  description: "armor",
                  damageReduction: 0,
                  armorClass: 5,
                  apRegen: 0,
                  inPossession: true,
               },
            ],
         },
      ],
   },
];
