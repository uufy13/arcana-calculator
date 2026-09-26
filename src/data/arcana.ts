export type Arcana = {
  number: number;
  name: string;
  description: string;
  meaning: string;
};

// Rider-Waite-Smith style numbering: Strength is VIII and Justice is XI.
// The Fool is represented by 0 in the page URLs and also has 22 as a birth-card alias.
export const arcanaCards: Arcana[] = [
  { number: 0, name: 'The Fool', description: 'A card of beginnings, openness, and the courage to step into the unknown.', meaning: 'Curiosity, possibility, freedom, and learning through experience.' },
  { number: 1, name: 'The Magician', description: 'The Magician brings attention to focused will and the tools already in your hands.', meaning: 'Resourcefulness, communication, intention, and turning ideas into action.' },
  { number: 2, name: 'The High Priestess', description: 'The High Priestess invites quiet attention to intuition, mystery, and what is not yet spoken.', meaning: 'Inner knowing, patience, reflection, and trust in the unseen layers of experience.' },
  { number: 3, name: 'The Empress', description: 'The Empress represents nurture, creativity, and the abundance that grows through care.', meaning: 'Creativity, connection with nature, sensuality, and generous support.' },
  { number: 4, name: 'The Emperor', description: 'The Emperor speaks to structure, responsibility, and the steady shaping of a world.', meaning: 'Stability, leadership, boundaries, and practical stewardship.' },
  { number: 5, name: 'The Hierophant', description: 'The Hierophant explores learning through tradition, teachers, communities, and shared values.', meaning: 'Guidance, ritual, belonging, and questioning inherited wisdom with care.' },
  { number: 6, name: 'The Lovers', description: 'The Lovers centers on meaningful choice, alignment, and the relationships that reflect our values.', meaning: 'Connection, commitment, values-based decisions, and honest partnership.' },
  { number: 7, name: 'The Chariot', description: 'The Chariot is a symbol of directed movement: bringing different forces into purposeful alignment.', meaning: 'Determination, self-direction, momentum, and holding a steady course.' },
  { number: 8, name: 'Strength', description: 'Strength suggests a calm, compassionate relationship with instinct and personal power.', meaning: 'Courage, patience, emotional steadiness, and gentle resilience.' },
  { number: 9, name: 'The Hermit', description: 'The Hermit turns inward to seek perspective, clarity, and a light that can be carried forward.', meaning: 'Solitude, discernment, reflection, and wisdom gained through attention.' },
  { number: 10, name: 'Wheel of Fortune', description: 'The Wheel of Fortune reminds us that cycles change and that our response is part of the story.', meaning: 'Change, cycles, timing, adaptability, and perspective.' },
  { number: 11, name: 'Justice', description: 'Justice brings a clear-eyed look at choices, consequences, balance, and what feels fair.', meaning: 'Integrity, accountability, truth, and considered judgment.' },
  { number: 12, name: 'The Hanged Man', description: 'The Hanged Man creates space for a pause, a new angle, and a release of automatic answers.', meaning: 'Surrender, patience, reframing, and insight through a changed viewpoint.' },
  { number: 13, name: 'Death', description: 'Death marks a transition: an old form ends so that a different chapter can begin.', meaning: 'Transformation, endings, renewal, and making room for change.' },
  { number: 14, name: 'Temperance', description: 'Temperance is the art of blending different elements into a more sustainable rhythm.', meaning: 'Balance, moderation, integration, healing, and patient progress.' },
  { number: 15, name: 'The Devil', description: 'The Devil invites honest attention to attachment, desire, and the stories that can make us feel stuck.', meaning: 'Awareness of patterns, agency, shadow work, and freedom through clarity.' },
  { number: 16, name: 'The Tower', description: 'The Tower represents a sudden clearing of structures that can no longer hold what is true.', meaning: 'Revelation, disruption, release, and rebuilding on firmer ground.' },
  { number: 17, name: 'The Star', description: 'The Star offers a quiet image of hope, restoration, and trust after a difficult passage.', meaning: 'Hope, renewal, generosity, inspiration, and a wider sense of direction.' },
  { number: 18, name: 'The Moon', description: 'The Moon moves through imagination, ambiguity, and the feelings that surface before clarity arrives.', meaning: 'Dreams, intuition, uncertainty, emotional depth, and compassionate discernment.' },
  { number: 19, name: 'The Sun', description: 'The Sun brings warmth, vitality, and the uncomplicated pleasure of seeing things clearly.', meaning: 'Joy, confidence, openness, vitality, and shared celebration.' },
  { number: 20, name: 'Judgement', description: 'Judgement is a call to listen closely, take stock, and answer a more honest version of your life.', meaning: 'Awakening, reflection, renewal, responsibility, and a meaningful next step.' },
  { number: 21, name: 'The World', description: 'The World represents integration, completion, and the feeling of a cycle becoming whole.', meaning: 'Completion, perspective, accomplishment, belonging, and readiness for a new cycle.' },
];

export function getArcana(number: number): Arcana {
  return arcanaCards[number === 22 ? 0 : number] ?? arcanaCards[0];
}
