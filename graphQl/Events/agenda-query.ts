import { SPEAKER_QUERY } from "./speaker-query";

export const AGENDA_QUERY = ` 
  id
  name
  talkTitle
  talkDescription
  time
  speaker {
    total
    results{
      __typename
      ... on Speaker {
        ${SPEAKER_QUERY}
      }
    }
  }
`;

export const ALL_AGENDA_QUERY = `{ 
    data: allTalk
    {
      __typename
      total
      results {
        ${AGENDA_QUERY}
      }
    }
  }
  `;

export default ALL_AGENDA_QUERY

