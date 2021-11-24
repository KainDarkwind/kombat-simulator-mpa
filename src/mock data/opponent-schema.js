const opponentSchema = {
   name: String,
   level: Number,
   image: String,
   hp: Number,
   ap: Number,
   pwr: Number,
   lck: Number,
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
};
