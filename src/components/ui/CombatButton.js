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

   checkCriticalHit(attacker, action, target) {
      const attackerCurrentLck = attacker.lck * action.lck;
      const targetLck = target.lck;

      let isCrit = false;
      if (attackerCurrentLck / targetLck >= getRandomInt(1, 20)) {
         console.log("crit!");

         isCrit = true;
         return isCrit;
      }
   }

   resolveAttack(attacker, action, target) {
      const attackerCurrentPwr = action.pwr + attacker.pwr;
      let critDamage = 0;
      if (this.checkCriticalHit(attacker, action, target)) {
         critDamage = 10;
      }

      const targetHpLoss = Math.round(
         attackerCurrentPwr + critDamage - target.pwr / 2
      );
      return targetHpLoss;
   }

   rollCombat(e) {
      //   const action = e.target.id;

      const heroAction = this.props.action;
      const opponent = this.props.opponent;
      const hero = this.props.hero;
      let opponentAction = opponent.actions[0];
      if (getRandomInt(0, 20) < opponent.lck - hero.lck) {
         opponentAction =
            opponent.actions[getRandomInt(0, opponent.actions.length - 1)];
      }

      if (heroAction.type === "attack") {
         //run attack(target, attacker)

         const heroHpLoss = this.resolveAttack(opponent, opponentAction, hero);
         const newHeroHp = hero.hp - heroHpLoss;
         const newHeroAp = hero.ap - heroAction.ap;

         const opponentHpLoss = this.resolveAttack(hero, heroAction, opponent);
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

            isHeroDead: isHeroDead,
            isOpponentDead: isOpponentDead,
         };
         this.props.setCharState(combatResolution);
      } else if (heroAction.type === "defense") {
         //run defense()
         const heroHpLoss = Math.max(
            0,
            this.resolveAttack(opponent, opponentAction, hero) - heroAction.pwr
         );
         const newHeroHp = hero.hp - heroHpLoss;
         const newHeroAp = hero.ap - heroAction.ap;

         const opponentHpLoss = 0;
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

         const combatResolution = {
            heroCombatAction: heroCombatAction,
            opponentCombatAction: opponentCombatAction,
            newHeroHp: newHeroHp,
            newHeroAp: newHeroAp,
            newOpponentHp: newOpponentHp,

            isHeroDead: isHeroDead,
            isOpponentDead: isOpponentDead,
         };
         this.props.setCharState(combatResolution);
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
