// src/data/members/index.js

import { biodata } from './biodata';
import { skills } from './skills';


export const members = biodata.map((member) => ({
  ...member,
  skills: skills[member.id] || [],

}));