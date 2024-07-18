export const storageKeys = (userId: string) => {
  const STORAGE_KEYS = {
    MESSAGES: `@gtk/${userId}/chat-messages`,
    SINGLE_WORD: `@gtk/${userId}/single-word`,
    TEMPLATE: `@gtk/${userId}/chat-template`,
    TIMER: `@gtk/${userId}/chat-timer`,
    TRANSITION: `@gtk/${userId}/transition`,
    VIDEO_CONTROLS: `@gtk/${userId}/video-controls`,
    VOTE_SINGLE_WORD: `@gtk/${userId}/chat-vote-single-word`
  };

  return STORAGE_KEYS;
};
