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
            heroCombatMessage:
               "You're too exhausted to do that.  Shield to restore your action points.",
            opponentCombatMessage: "Your opponent grumbles menacingly.",
         };

         this.props.setCombatMessage(outOfAp);
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
      const isCrit = this.checkCriticalHit(attacker, action, target);
      let critDamage = 0;
      if (isCrit) {
         critDamage = 10;
      }

      const targetHpLoss = Math.round(
         attackerCurrentPwr + critDamage - target.pwr / 2
      );
      const attackResolution = {
         targetHpLoss: targetHpLoss,
         isCrit: isCrit,
      };
      return attackResolution;
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

         const opponentAttackResolution = this.resolveAttack(
            opponent,
            opponentAction,
            hero
         );
         const heroAttackResolution = this.resolveAttack(
            hero,
            heroAction,
            opponent
         );

         const heroHpLoss = opponentAttackResolution.targetHpLoss;
         const heroCrit = heroAttackResolution.isCrit;
         const newHeroHp = hero.hp - heroHpLoss;
         const newHeroAp = hero.ap - heroAction.ap;

         const opponentHpLoss = heroAttackResolution.targetHpLoss;
         const newOpponentHp = opponent.hp - opponentHpLoss;

         let isHeroDead = false;
         if (newHeroHp <= 0) {
            isHeroDead = true;
         }

         let isOpponentDead = false;
         if (newOpponentHp <= 0) {
            isOpponentDead = true;
         }

         const heroCombatMessage =
            hero.name +
            " " +
            heroAction.description +
            " the " +
            opponent.name +
            " for " +
            opponentHpLoss +
            " damage.";

         const opponentCombatMessage =
            "The " +
            opponent.name +
            " " +
            opponentAction.description +
            " " +
            hero.name +
            " for " +
            heroHpLoss +
            " damage.";

         const combatMessage = {
            heroCombatMessage: heroCombatMessage,
            opponentCombatMessage: opponentCombatMessage,
         };

         const heroCombatResolution = {
            newHeroHp: newHeroHp,
            newHeroAp: newHeroAp,
            heroCrit: heroCrit,
            isHeroDead: isHeroDead,
         };
         const oppCombatResolution = {
            newOpponentHp: newOpponentHp,
            isOpponentDead: isOpponentDead,
         };
         this.props.setCharState(heroCombatResolution);
         this.props.setOppState(oppCombatResolution);
         this.props.setCombatMessage(combatMessage);
      } else if (heroAction.type === "defense") {
         //run defense()

         const opponentAttackResolution = this.resolveAttack(
            opponent,
            opponentAction,
            hero
         );

         const heroHpLoss = Math.max(
            0,
            opponentAttackResolution.targetHpLoss - heroAction.pwr
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

         const heroCombatMessage =
            hero.name +
            " " +
            heroAction.description +
            " the " +
            opponent.name +
            ".";

         const opponentCombatMessage =
            "The " +
            opponent.name +
            " " +
            opponentAction.description +
            " " +
            hero.name +
            " for " +
            heroHpLoss +
            " damage.";

         const combatMessage = {
            heroCombatMessage: heroCombatMessage,
            opponentCombatMessage: opponentCombatMessage,
         };

         const heroCombatResolution = {
            newHeroHp: newHeroHp,
            newHeroAp: newHeroAp,
            heroCrit: false,
            isHeroDead: isHeroDead,
         };
         const oppCombatResolution = {
            newOpponentHp: newOpponentHp,
            isOpponentDead: isOpponentDead,
         };
         this.props.setCharState(heroCombatResolution);
         this.props.setOppState(oppCombatResolution);
         this.props.setCombatMessage(combatMessage);
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
