import { v4 as uuidv4 } from "uuid";
import { INPUT_LENGTH_CONSTRAINTS, Development, TAGS } from "./constants";

export const handleChangeTitle = (
  arr: Development[],
  index: number,
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  if (event.target.value.length <= INPUT_LENGTH_CONSTRAINTS.TITLE) {
    arr[index].title = event.target.value;
    setter([...arr]);
  }
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
  if (event.target.value.length <= INPUT_LENGTH_CONSTRAINTS.DESCRIPTION) {
    arr[index].description = event.target.value;
    setter([...arr]);
  }
};

export const handleAdd = (
  arr: Development[],
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  let newArr: Development[] = [
    ...arr,
    { id: uuidv4(), title: "", tags: [], description: "" },
  ];

  setter(newArr);
};

export const handleDelete = (
  arr: Development[],
  index: number,
  setter: React.Dispatch<React.SetStateAction<Development[]>>,
) => {
  setter([...arr.slice(0, index), ...arr.slice(index + 1)]);
};
