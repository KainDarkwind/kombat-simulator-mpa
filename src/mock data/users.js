const users = [
   {
      email: "mike@gmail.com",
      password: "7F70DA91F80FCA9EE4CF1826ABE3E181",
      fakePassword: "codeiscool",
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
                  pwr: 0,
                  lck: 5,
                  ap: 2,
               },
               {
                  name: "Slash",
                  description: "slashes",
                  type: "attack",
                  pwr: 5,
                  lck: 0,
                  ap: 3,
               },
               {
                  name: "Shield",
                  description: "blocks",
                  type: "defense",
                  pwr: 5,
                  lck: 5,
                  ap: -2,
               },
            ],
         },
      ],
   },
   {
      email: "kal@superman.com",
      password: "0F5F608196BD2B2172C562591B414941",
      fakepassword: "supermaniscool",
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
                  pwr: 0,
                  lck: 5,
                  ap: 2,
               },
               {
                  name: "Slash",
                  description: "slashes",
                  type: "attack",
                  pwr: 5,
                  lck: 0,
                  ap: 3,
               },
               {
                  name: "Shield",
                  description: "blocks",
                  type: "defense",
                  pwr: 5,
                  lck: 5,
                  ap: -2,
               },
            ],
         },
      ],
   },
];

export default users;
