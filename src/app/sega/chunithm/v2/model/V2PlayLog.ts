import {ChusanMusic} from './ChusanMusic';

export interface V2PlayLog {
  playDate: Date;
  userPlayDate: Date;
  musicId: number;
  songInfo?: ChusanMusic;
  level: number;
  customId: number;
  playedCustom1: number;
  playedCustom2: number;
  playedCustom3: number;
  track: number;
  score: number;
  rank: number;
  maxCombo: number;
  maxChain: number;
  rateTap: number;
  rateHold: number;
  rateSlide: number;
  rateAir: number;
  rateFlick: number;
  judgeGuilty: number;
  judgeAttack: number;
  judgeJustice: number;
  judgeCritical: number;
  judgeHeaven: number;
  playerRating: number;
  fullChainKind: number;
  characterId: number;
  skillId: number;
  playKind: number;
  skillLevel: number;
  skillEffect: number;
  isNewRecord: boolean;
  isFullCombo: boolean;
  isAllJustice: boolean;
  isClear: boolean;
}
