import { Steps } from '../../../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';

interface CheckItem {
  name: string;
  step: Steps;
}

export const checkList: Array<CheckItem> = [
  {
    name: 'Cambly profile',
    step: 'profile',
  },
  {
    name: 'Supplemental questions',
    step: 'supplemental',
  },
  // {
  //   name: "Demo lesson",
  //   step: "kidsDemoLesson",
  // },
  {
    name: 'Connection test',
    step: 'connection',
  },
];
