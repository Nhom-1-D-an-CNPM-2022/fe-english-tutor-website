import { v4 as uuidv4 } from 'uuid';
import { isInvalidDevelopment } from '../validation';
import { Development, TAGS, MAX_ITEMS } from './constants';

export const handleChangeTitle = (
  arr: Development[],
  index: number,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  arr[index].title = event.target.value;
  setter([...arr]);
};

export const handleChangeTags = (
  arr: Development[],
  index: number,
  _: React.SyntheticEvent<Element, Event>,
  value: string[],
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  arr[index].tags = value as [typeof TAGS[number]];
  setter([...arr]);
};

export const handleChangeDescription = (
  arr: Development[],
  index: number,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  arr[index].description = event.target.value;
  setter([...arr]);
};

export const handleAdd = (
  arr: Development[],
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  if (arr.length < MAX_ITEMS) {
    let newArr: Development[] = [...arr, { id: uuidv4(), title: '', tags: [], description: '' }];

    setter(newArr);
  }
};

export const handleDelete = (
  arr: Development[],
  index: number,
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  setter([...arr.slice(0, index), ...arr.slice(index + 1)]);
};

export const initDevelopmentDialog = (
  profileDevelopment: Omit<Development, 'id'>[],
  developmentSetter: (development: Development[]) => void,
) => {
  developmentSetter(
    profileDevelopment.length !== 0
      ? profileDevelopment.map((development) => ({
          id: uuidv4(),
          ...development,
        }))
      : [
          {
            id: uuidv4(),
            title: '',
            tags: [],
            description: '',
          },
        ],
  );
};

export const clickSaveCallback = (
  developmentType: 'experience' | 'education',
  development: Development[],
  handleUpdateProfile: (newInformation: any) => void,
) => {
  let isError = false;

  for (let i = 0; i < development.length; i++) {
    if (isInvalidDevelopment(development[i])) {
      isError = true;
      break;
    }
  }

  if (isError) {
    return true;
  } else {
    if (developmentType === 'experience') {
      handleUpdateProfile({
        experience: development.map(({ title, description, tags }) => ({
          title,
          description,
          tags,
        })),
      });
    } else {
      handleUpdateProfile({
        education: development.map(({ title, description, tags }) => ({
          title,
          description,
          tags,
        })),
      });
    }

    return false;
  }
};
