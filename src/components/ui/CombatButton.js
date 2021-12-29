import React from "react";
import { getRandomInt } from "../../utils/helpers";

export default class CombatButton extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
      this.state = {};
   }

   checkAp(e) {
      if (this.props.action.ap > this.props.hero.ap) {
         // display this error message
         const outOfAp = {
            heroCombatAction:
               "You're too exhausted to do that.  Shield to restore your action points.",
            opponentCombatAction: "Your opponent grumbles menacingly.",
            newHeroHp: this.props.hero.hp,
            newHeroAp: this.props.hero.ap,
            newOpponentHp: this.props.opponent.hp,
            heroCrit: false,
            opponentCrit: false,
            isHeroDead: false,
            isOpponentDead: false,
         };

         this.props.setCharState(outOfAp);
      } else {
         this.rollCombat(e);
      }
   }

   rollCombat(e) {
      //   const action = e.target.id;

      const heroAction = this.props.action;
      const opponent = this.props.opponent;
      const hero = this.props.hero;

      console.log(
         hero.name,
         "wants to",
         heroAction.name,
         "against the",
         opponent.name
      );

      const heroCurrentPwr = heroAction.pwr + hero.pwr;

      console.log("This is a", heroAction.type, "action.");

      if (heroAction.type === "attack") {
         //run attack(target, attacker)
         console.log("Because this is a", heroAction.type, "action:");
         console.log(
            "Her power is",
            hero.pwr,
            "and she will have her power increased by",
            heroAction.pwr,
            "for a total of",
            heroCurrentPwr
         );

         console.log("Let's check if this is a crit!");
         const heroCurrentLck = hero.lck * heroAction.lck;
         console.log(
            "Her luck is",
            hero.lck,
            "and she will have her luck increased by",
            heroAction.lck,
            "for a total of",
            heroCurrentLck
         );

         let heroCritDamage = 0;
         let isHeroCrit = false;
         if (heroCurrentLck >= getRandomInt(1, 20)) {
            console.log("crit!");
            heroCritDamage = 10;
            isHeroCrit = true;
         } else {
            console.log("no crit!");
         }

         const opponentHpLoss =
            heroCurrentPwr + heroCritDamage - opponent.pwr / 2;

         console.log(opponent.name, "takes", opponentHpLoss, "damage");

         let opponentAction = opponent.actions[0];
         if (getRandomInt(0, 20) < opponent.lck) {
            opponentAction =
               opponent.actions[getRandomInt(0, opponent.actions.length - 1)];
         }

         console.log(opponent.name, "will try to", opponentAction.name);

         console.log("Let's check if this is a crit!");
         const opponentCurrentLck = opponent.lck * opponentAction.lck;
         console.log(
            "His luck is",
            opponent.lck,
            "and he will have his luck increased by",
            opponentAction.lck,
            "for a total of",
            opponentCurrentLck
         );

         let opponentCritDamage = 0;
         let isOpponentCrit = false;
         if (opponentCurrentLck >= getRandomInt(1, 20)) {
            console.log("crit!");
            opponentCritDamage = 10;
            isOpponentCrit = true;
         } else {
            console.log("no crit!");
         }

         const opponentCurrentPwr = opponent.pwr + opponentAction.pwr;

         console.log(
            "His power is",
            opponent.pwr,
            "and he will have his power increased by",
            opponentAction.pwr,
            "for a total of",
            opponentCurrentPwr
         );

         const heroHpLoss = Math.round(
            opponentCurrentPwr + opponentCritDamage - hero.pwr / 2
         );

         const newHeroHp = hero.hp - heroHpLoss;
         const newHeroAp = hero.ap - heroAction.ap;
         const newOpponentHp = opponent.hp - opponentHpLoss;

         let isHeroDead = false;
         if (newHeroHp <= 0) {
            isHeroDead = true;
         }

         let isOpponentDead = false;
         if (newOpponentHp <= 0) {
            isOpponentDead = true;
         }

         const heroCombatAction =
            hero.name +
            " " +
            heroAction.description +
            " the " +
            opponent.name +
            " for " +
            opponentHpLoss +
            " damage.";

         const opponentCombatAction =
            "The " +
            opponent.name +
            " " +
            opponentAction.description +
            " " +
            hero.name +
            " for " +
            heroHpLoss +
            " damage.";

         const combatResolution = {
            heroCombatAction: heroCombatAction,
            opponentCombatAction: opponentCombatAction,
            newHeroHp: newHeroHp,
            newHeroAp: newHeroAp,
            newOpponentHp: newOpponentHp,
            heroCrit: isHeroCrit,
            opponentCrit: isOpponentCrit,
            isHeroDead: isHeroDead,
            isOpponentDead: isOpponentDead,
         };
         this.props.setCharState(combatResolution);

         console.log(hero.name, "takes", heroHpLoss, "damage");

         console.log(
            "So the opponent took",
            opponentHpLoss,
            "damage which was a crit,",
            isHeroCrit,
            "and the hero took",
            heroHpLoss,
            "damage which was a crit,",
            isOpponentCrit,
            "and it cost her",
            heroAction.ap,
            "AP.  Now we have to send those five values back up the chain so we can update our state in Combat.js."
         );
      } else if (heroAction.type === "defense") {
         //run defense()
         console.log("Because this is a", heroAction.type, "action:");
         console.log(
            "Her power is",
            hero.pwr,
            "and she will have her power increased by",
            heroAction.pwr,
            "for a total of",
            heroCurrentPwr
         );
         const opponentHpLoss = 0;
         console.log(
            opponent.name,
            "takes",
            opponentHpLoss,
            "damage again because this is a",
            heroAction.type,
            "action.  Our combat log shouldn't even mention it as such, but we should still send it up at the end so it can update it even though it won't actually change."
         );

         let opponentAction = opponent.actions[0];
         if (getRandomInt(0, 20) < opponent.lck) {
            opponentAction =
               opponent.actions[getRandomInt(0, opponent.actions.length - 1)];
         }

         //We should adjust this opponentAction to use the start and end index of the opponent action array rather than hard coding a 0-1.

         console.log(opponent.name, "will try to", opponentAction.name);

         console.log("Let's check if this is a crit!");
         const opponentCurrentLck = opponent.lck * opponentAction.lck;
         console.log(
            "His luck is",
            opponent.lck,
            "and he will have his luck increased by",
            opponentAction.lck,
            "for a total of",
            opponentCurrentLck
         );

         let opponentCritDamage = 0;
         let isOpponentCrit = false;
         if (opponentCurrentLck >= getRandomInt(1, 20)) {
            console.log("crit!");
            opponentCritDamage = 10;
            isOpponentCrit = true;
         } else {
            console.log("no crit!");
         }

         const opponentCurrentPwr = opponent.pwr + opponentAction.pwr;

         console.log(
            "His power is",
            opponent.pwr,
            "and he will have his power increased by",
            opponentAction.pwr,
            "for a total of",
            opponentCurrentPwr
         );

         const heroHpLoss =
            opponentCurrentPwr + opponentCritDamage - heroCurrentPwr / 2;

         const heroCombatAction =
            hero.name +
            " " +
            heroAction.description +
            " the " +
            opponent.name +
            ".";

         const opponentCombatAction =
            "The " +
            opponent.name +
            " " +
            opponentAction.description +
            " " +
            hero.name +
            " for " +
            heroHpLoss +
            " damage.";

         const newHeroHp = hero.hp - heroHpLoss;
         const newHeroAp = hero.ap - heroAction.ap;
         const newOpponentHp = opponent.hp - opponentHpLoss;

         const combatResolution = {
            heroCombatAction: heroCombatAction,
            opponentCombatAction: opponentCombatAction,
            newHeroHp: newHeroHp,
            newHeroAp: newHeroAp,
            newOpponentHp: newOpponentHp,
         };
         this.props.setCharState(combatResolution);

         console.log(
            "The hero should now have",
            newHeroHp,
            "and the opponent should now have",
            newOpponentHp
         );

         console.log(hero.name, "takes", heroHpLoss, "damage");
         console.log(
            "So the opponent took",
            opponentHpLoss,
            "damage, and the hero took",
            heroHpLoss,
            "damage which was a crit,",
            isOpponentCrit,
            "and it cost her",
            heroAction.ap,
            "AP.  Now we have to send those four values back up the chain so we can update our state in Combat.js.  We didn't get a hero crit value, so maybe we should send false up for that.  We also might code the logic to understand if no crit value is sent then the action didn't have one."
         );
      }
   }

   render() {
      return (
         <button
            className="btn btn-block btn-primary ml-2 my-6"
            id={this.props.action.name}
            onClick={(e) => {
               this.checkAp(e);
            }}
         >
            {this.props.action.name}
         </button>
      );
   }
}
