import Dialog from '../Dialog';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UploadIcon from '@mui/icons-material/Upload';
import { Box, FormHelperText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../../../base/Button/Button';
import DialogTextFieldContainer from '../base/DialogTextFieldContainer/DialogTextFieldContainer';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import {
  Certificate,
  CERTIFICATE_TYPES,
  EXCEED_SIZE_ERROR_MSG,
  MAX_CERTIFICATE_ITEMS,
  MAX_CERTIFICATE_SIZE,
} from './constants';
import { fileNameWrapperStyle } from './style';
import DialogContentActions from '../base/DialogContentActions/DialogContentActions';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import { isInvalidCertificate } from '../validation';

export default function AddTeachingCertificatesDialog() {
  const {
    profile,
    dialog,
    isErrorChecked,
    handleSaveDialog,
    handleUploadTeachingCertificate,
    handleUpdateProfile,
  } = useContext(ProfileStepContext);
  const [selectedTypes, setSelectedTypes] = useState<Array<string>>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [uploadingResult, setUploadingResult] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (dialog === 'ADD_TEACHING_CERTIFICATES') {
      setCertificates(
        profile.certificates.map(({ fileName, fileUrl, type }) => ({
          id: uuidv4(),
          fileName,
          fileUrl,
          type,
        })),
      );
    }
  }, [dialog]);

  useEffect(() => {
    if (uploadingResult) {
      setCertificates([
        ...certificates,
        {
          id: uuidv4(),
          fileName: uploadingResult.fileName,
          fileUrl: uploadingResult.url,
          type: '',
        },
      ]);
    }
  }, [uploadingResult]);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const file = e.target.files?.item(0);

    if (file) {
      if (file.size <= MAX_CERTIFICATE_SIZE) {
        previewFile(file);
      } else {
        setError(EXCEED_SIZE_ERROR_MSG);
      }
    }
  };

  const previewFile = (file: File) => {
    handleUploadTeachingCertificate(file, setUploadingResult);
  };

  const handleChangeCertificateType = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    certificates[index].type = event.target.value;
    selectedTypes.push(event.target.value);
    setSelectedTypes([...selectedTypes]);
    setCertificates([...certificates]);
  };

  const handleDelete = (index: number) => {
    setSelectedTypes(selectedTypes.filter((type) => type !== certificates[index].type));
    setCertificates([...certificates.slice(0, index), ...certificates.slice(index + 1)]);
  };

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      for (let i = 0; i < certificates.length; i++) {
        if (isInvalidCertificate(certificates[i])) {
          isError = true;
          break;
        }
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({
          certificates: certificates.map(({ fileName, fileUrl, type }) => ({
            fileName,
            fileUrl,
            type,
          })),
        });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_TEACHING_CERTIFICATES'}
      titleIcon={<VerifiedUserIcon />}
      title="Teaching Certificates"
      onClickSave={handleClickSave}
    >
      {certificates.map((certificate, index: number) => (
        <DialogTextFieldContainer
          key={certificate.fileName}
          handleDelete={() => handleDelete(index)}
          optional
        >
          <Box sx={fileNameWrapperStyle}>
            <Typography variant="subtitle1">{certificate.fileName}</Typography>
          </Box>
          <DialogTextField
            value={certificate.type}
            onChange={(e) => handleChangeCertificateType(index, e)}
            label="Certificate Type"
            variant="select"
            error={isErrorChecked && !certificate.type}
            helperText={
              isErrorChecked && !certificate.type ? 'Please select a certificate type' : ' '
            }
            select
          >
            {CERTIFICATE_TYPES.map((certificateType) => (
              <MenuItem
                disabled={selectedTypes.indexOf(certificateType) !== -1}
                key={certificateType}
                value={certificateType}
              >
                {certificateType}
              </MenuItem>
            ))}
          </DialogTextField>
        </DialogTextFieldContainer>
      ))}
      <DialogContentActions>
        <Button
          type="text"
          startIcon={<UploadIcon />}
          component="label"
          disabled={certificates.length === MAX_CERTIFICATE_ITEMS}
        >
          Upload file
          <input onChange={handleFileInputChange} accept="image/*" type="file" hidden />
        </Button>
        <FormHelperText error>{error}</FormHelperText>
      </DialogContentActions>
    </Dialog>
  );
}
