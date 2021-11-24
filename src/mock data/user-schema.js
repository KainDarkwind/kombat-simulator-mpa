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

         pwr: Number, // damage modification
         lck: Number, // crit
         actions: [
            // allows for different moves
            {
               name: String,
               description: String,
               type: String, //attack (target = opponent) or defend (target = self)
               modifiedStats: [
                  {
                     targetStat: String, //stat adjusted
                     mod: Number, //can be multiplicative or additive
                     isPermanent: Boolean, //for hp/ap
                  },
               ],
            },
         ],
      },
   ],
};

/*
Basic Ideal Premises *(These are coded already)
When you start a new character, I want all the base stats to reroll.  1-4.
When you select an opponent, I want that opponent to roll hit points in a range specific to them.

*When you select an action:
1.  Modify PWR/LCK
2.  Subtract AP mod from heroAp.  (If action is defense, this is added instead.)
3.  Send modified stats to target.  (Receive modified stats from opponent.)
4.  heroLuck/oppLuck * .05 is chance to crit.  (Reverse for opponent crit.)
5.  check crit vs chance. (check both crits)
6.  heroPwr - oppPwr is damage.  If crit, damage is x2.  (Reverse for opponent damage.)
7.  currentHp - damage = newCurrentHp  (apply both damage.)


When Hero reaches 0 hit points, the fight is lost.
When Opponent reaches 0 hit points, the fight is won, if it hasn't been lost.

If Hero wins the fight, hero goes up one level.
If Hero loses the fight, I want you to have a chance to retire (delete) your character or start the fight over.

When you level up, I want your stats to go up a random (small) amount.  0-2.*/
