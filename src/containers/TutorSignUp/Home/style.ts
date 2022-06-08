import { listItemTextClasses } from '@mui/material';

export default {
  gettingStartedOuterWrapper: {
    width: '100%',
    height: '700px',
    backgroundImage: "url('/images/tutor-sign-up/home/smiling_tutor.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  },

  gettingStartedInnerWrapper: {
    height: '640px',
  },

  card: {
    marginBottom: '20px',
    background: '#ffffffcc',
    boxShadow: 'none',
  },

  cardContent: {
    padding: '30px 30px 0',
    textAlign: 'center',
  },

  cardContentTitle: {
    fontSize: '40px',
    textTransform: 'uppercase',
  },

  cardContentDescription: {
    fontSize: '20px',
  },

  getStartedButton: {
    width: '100%',
    padding: '20px 40px',
    fontSize: '18px',
    textTransform: 'none',
  },

  cardActions: {
    flexDirection: 'column',
    padding: '0 30px',
    margin: '30px',
  },

  introductionContainer: {
    width: '1181px',
    margin: '10px auto',
  },

  introductionList: {
    padding: 0,
  },

  introductionTitleWrapper: {
    padding: '48px 10px 0',
    textAlign: 'center',
  },

  introductionTitle: {
    fontSize: '36.8px',
    margin: '20px 0',
  },

  introductionSubtitle: {
    fontSize: '18px',
    margin: '20px 0',
  },

  introductionListItem: {
    display: 'block',
    margin: '8px 0',
  },

  introductionListItemIcon: {
    display: 'inline-block',
    width: '70px',
    height: '70px',
    marginBottom: '15px',
  },

  introductionListItemText: {
    [`& .${listItemTextClasses.primary}`]: {
      marginBottom: '10px',
      fontSize: '25.6px',
      fontWeight: 700,
    },

    [`& .${listItemTextClasses.secondary}`]: {
      marginBottom: '10px',
      fontSize: '17.6px',
      color: '#333333',
      lineHeight: 1.8,
    },
  },
};
