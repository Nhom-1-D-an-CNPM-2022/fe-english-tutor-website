import React from 'react';
import { Box } from '@mui/material';
import { FormBody, FormFooter, FormHeader } from './base';
import { FormBodyProps } from './base/FormBody';
import { FormFooterProps } from './base/FormFooter';
import { FormHeaderProps } from './base/FormHeader';

type Props = FormHeaderProps & FormBodyProps & FormFooterProps;

export function TutorAccountFormBox({
  title,
  thirdPartyPrompt,
  authType,
  prompt,
  navPrompt,
  navLinkLabel,
  navLink,
}: Props) {
  return (
    <Box
      sx={{
        ...(authType === 'login' && {
          margin: '0 auto',
        }),

        ...(authType === 'signup' && {
          padding: '0 50px',
        }),
      }}
    >
      <FormHeader title={title} thirdPartyPrompt={thirdPartyPrompt} />
      <FormBody authType={authType} prompt={prompt} />
      <FormFooter navPrompt={navPrompt} navLinkLabel={navLinkLabel} navLink={navLink} />
    </Box>
  );
}
