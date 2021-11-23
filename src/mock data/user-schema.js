user = {
   email: String,
   password: String,
   characters: [
      {
         // allows for multiple characters in the future
         name: String,
         level: Number,
         image: String,
         hp: Number, //hit points
         ap: Number, //action points
         ac: Number, // to hit roll needs to equal this or higher to deal damage.
         str: Number, // attack dmg
         dex: Number, // attack accuracy
         end: Number, // reduces enemy dmg, improves hp
         mnd: Number, // improves ap
         agi: Number, // improves AC/attack avoiding
         spr: Number, // 'Luck', improves crit
         actions: [
            // allows for different moves
            { description: String, damage: Number, apCost: Number },
         ],
         weapons: [
            // modifies attacks (will be locked to single non-modifying for v.1)
            {
               name: String,
               description: String,
               attack: Number,
               damageMin: Number,
               damageMax: Number,
               apCost: Number,
               backstab: Number,
               inPossession: Boolean,
            },
         ],
         armors: [
            //modifies defense (will be locked to single non-modifying for v.1)
            {
               name: String,
               description: String,
               damageReduction: Number,
               armorClass: Number,
               apRegen: Number,
               inPossession: Boolean,
            },
         ],
      },
   ],
};

/*
Basic Ideal Premises *(These are coded already)
When you start a new character, I want all the base stats to reroll.  1-4.
When you select an opponent, I want that opponent to roll hit points in a range specific to them.

*When you select an attack, I want the attack to spend AP, check hit, check crit (backstab), roll damage, apply damage.  

*When you select a defense, I want the defend to regain AP, improve defense and resolve opponent's attack vs you.

When Hero reaches 0 hit points, the fight is lost.
When Opponent reaches 0 hit points, the fight is won, if it hasn't been lost.

If Hero wins the fight, I want you to gain XP.
If Hero loses the fight, I want you to have a chance to retire your character or start the fight over.

When you level up, I want your stats to go up a random (small) amount.  0-2.*/
