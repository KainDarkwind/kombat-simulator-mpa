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

            pwr: 3, // damage mod (incoming and outgoing)
            lck: 2, // 'Luck', crit (outgoing) and dodge (incoming)
            actions: [
               // allows for different moves

               {
                  name: "Stab",
                  description: "stabs",
                  type: "attack",
                  modifiedStats: [
                    { targetStat: "Pwr", mod: 0, isPermanent: false },
                     { targetStat: "Lck", mod: 5, isPermanent: false },
                     { targetStat: "Ap", mod: 2, isPermanent: true },
                  ],
               },
               {
                  name: "Slash",
                  description: "slashes",
                  type: "attack",
                  modifiedStats: [
                     { targetStat: "Pwr", mod: 5, isPermanent: false },
                     { targetStat: "Ap", mod: 3, isPermanent: true },
                  ],
               },
               {
                  name: "Shield",
                  description: "blocks",
                  type: "defense",
                  modifiedStats: [
                     { targetStat: "Pwr", mod: 5, isPermanent: false },
                     { targetStat: "Lck", mod: 5, isPermanent: false },
                     { targetStat: "Ap", mod: 2, isPermanent: true },
                  ],
               },
            ],

            /*
            When an action occurs.
            PWR modified.  LCK modified.
            Attacker LCK/Target LCK checks crit.  5% base chance.
            Attacker PWR - Target PWR is removed from Target HP
            Attacker AP is reduced by AP cost of action.
            
            */

            /*name: String,
               description: String,
               type: String, //attack or defend
               modifiedStats: [
                  {
                     target: String, //self or opponent
                     statName: String, //existing stats
                     mod: Number, //can be multiplicative or additive
                     isPermanent: Boolean, //for hp/ap
                  },
               ],*/
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
            pwr: 11 //power modifies damage
            lck: 10 //luck modifies crit
            actions: actions: [
                // allows for different moves
 
                {
                   name: "Stab",
                   description: "stabs",
                   type: "attack",
                   modifiedStats: [
                      { targetStat: "Lck", mod: 5, isPermanent: false },
                      { targetStat: "Ap", mod: 2, isPermanent: true },
                   ],
                },
                {
                   name: "Slash",
                   description: "slashes",
                   type: "attack",
                   modifiedStats: [
                      { targetStat: "Pwr", mod: 5, isPermanent: false },
                      { targetStat: "Ap", mod: 3, isPermanent: true },
                   ],
                },
                {
                   name: "Shield",
                   description: "blocks",
                   type: "defense",
                   modifiedStats: [
                      { targetStat: "Pwr", mod: 5, isPermanent: false },
                      { targetStat: "Lck", mod: 5, isPermanent: false },
                      { targetStat: "Ap", mod: 2, isPermanent: true },
                   ],
                },
             ],
         },
      ],
   },
];
