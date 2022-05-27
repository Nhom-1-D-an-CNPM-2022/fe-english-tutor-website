import { v4 as uuidv4 } from 'uuid';
import { TutorSignUpProfile } from '../../../redux/slice/appSlice/tutorSignUpSlice';

export const handleUploadFile = (
  file: File,
  successCallback?: (response: any) => void,
  failureCallback?: (response: any) => void,
) => {
  let POST_URL = 'https://api.cloudinary.com/v1_1/' + process.env.CLOUD_NAME + '/auto/upload';

  let publicId = uuidv4();
  let XUniqueUploadId = +new Date();

  let size = file.size;
  let sliceSize = 20000000;
  let start = 0;

  setTimeout(loop, 3);

  function loop() {
    let end = start + sliceSize;

    if (end > size) {
      end = size;
    }
    let s = file.slice.bind(file)(start, end);

    send(s, start, end - 1, size);

    if (end < size) {
      start += sliceSize;
      setTimeout(loop, 3);
    }
  }

  function send(piece: Blob, start: number, end: number, size: number) {
    let formData = new FormData();

    formData.append('file', piece);
    formData.append('cloud_name', process.env.CLOUD_NAME as string);
    formData.append('upload_preset', process.env.CLOUD_UNSIGNED_UPLOAD_PRESET as string);
    formData.append('public_id', publicId);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', POST_URL, false);
    xhr.setRequestHeader('X-Unique-Upload-Id', XUniqueUploadId.toString());
    xhr.setRequestHeader('Content-Range', 'bytes ' + start + '-' + end + '/' + size);

    xhr.onloadend = function () {
      const response = JSON.parse(this.responseText);

      if (response.url) {
        if (successCallback) {
          successCallback(response);
        }
      } else {
        if (failureCallback) {
          failureCallback(response);
        }
      }
    };

    xhr.send(formData);
  }
};

export const validateProfileStep = ({
  displayName,
  hometown,
  dateOfBirth,
  introduction,
  videoIntroduction,
  languages,
}: TutorSignUpProfile) => {
  return (
    Boolean(displayName) &&
    Boolean(hometown) &&
    Boolean(dateOfBirth) &&
    Boolean(introduction) &&
    Boolean(videoIntroduction) &&
    Boolean(languages[0].language) &&
    Boolean(languages[0].dialect)
  );
};

export const validateSupplementalStep = ({ motivation, source }: TutorSignUpProfile) => {
  return Boolean(motivation) && Boolean(source);
};

export const validateDemoLessonStep = ({ demoLesson }: TutorSignUpProfile) => {
  return Boolean(demoLesson);
};
