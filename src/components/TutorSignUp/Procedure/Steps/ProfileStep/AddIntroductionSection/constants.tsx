import React from 'react';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PublicIcon from '@mui/icons-material/Public';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const MAIN_INTRODUCTION = {
  VIDEO_CARD: {
    TITLE: 'Greet students with a video introduction',
    DESCRIPTION:
      'Let students know what they can expect from a lesson with you by recording a video highlighting your teaching style, expertise and personality. Students can be nervous to speak with a foreigner, so it really helps to have a friendly video that introduces yourself and invites students to call you.',
    LINKS: [
      {
        href: 'https://support.cambly.com/hc/en-us/articles/360056439391-Complete-Your-Tutor-Profile',
        label: 'Link to best practices',
      },
    ],
  },
  DESCRIPTION:
    'Say hello and introduce yourself to students! This will be the first thing students read about you when looking at their tutor matches.',
};

export const SUPPLEMENTAL_INTRODUCTION = {
  INFORMATION_LIST: [
    {
      icon: <HistoryEduIcon />,
      title: 'Teaching Style',
      description: 'Tell people more details about your teaching style',
      openDialogButtonLabel: 'Add teaching style',
      valueRepresentation: 'text',
    },
    {
      icon: <EmojiPeopleIcon />,
      title: 'About Me',
      description: 'Write any additional information to expand on your introduction',
      openDialogButtonLabel: 'Add about me',
      valueRepresentation: 'text',
    },
    {
      icon: <PublicIcon />,
      title: 'Languages',
      description: 'Tell students your English accent and any other languages you speak',
      openDialogButtonLabel: 'Add languages',
      valueRepresentation: 'chip',
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Work Experience',
      description: '',
      openDialogButtonLabel: 'Add work experience',
      valueRepresentation: 'personal development',
    },
    {
      icon: <SchoolIcon />,
      title: 'Education',
      description: '',
      openDialogButtonLabel: 'Add education',
      valueRepresentation: 'personal development',
    },
    {
      icon: <VerifiedUserIcon />,
      title: 'Teaching Certificates',
      description: 'Optional',
      openDialogButtonLabel: 'Add teaching certificates',
      valueRepresentation: 'chip',
    },
  ],
};
