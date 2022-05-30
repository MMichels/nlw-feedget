export interface IFeedbackType {
  title: string;
  image: any;
}


export const feedbackTypes = {
  'BUG': {
    title: 'Problema',
    image: require('../assets/bug.png')
  },
  'IDEA': {
    title: 'Ideia',
    image: require('../assets/idea.png'),
  },
  'OTHER': {
    title: 'Outro',
    image: require('../assets/thought.png'),
  },
};

export type FeedbackTypeKey = keyof typeof feedbackTypes;