import { Steps } from './TutorSignUpProcedureContext';

interface CheckItem {
  name: string;
  step: Steps;
  isCompleted: boolean;
}

export const TUTOR_SIGN_UP_PROCEDURE_STEPS: Array<CheckItem> = [
  {
    name: 'Cambly profile',
    step: 'profile',
    isCompleted: false,
  },
  {
    name: 'Supplemental questions',
    step: 'supplemental',
    isCompleted: false,
  },
  {
    name: 'Demo lesson',
    step: 'demoLesson',
    isCompleted: false,
  },
];
