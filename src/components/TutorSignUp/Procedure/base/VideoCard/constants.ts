interface Link {
  href: string;
  label: string;
}

export interface InputPhaseProps {
  title: string;
  description: string;
  links: Link[];
  videoSrc?: string;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PreviewPhaseProps {
  previewSource: string;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VideoCardProps extends Omit<InputPhaseProps, 'handleFileInputChange'> {
  profileMediaType: 'videoIntroduction' | 'demoLesson';
  handleUpdateVideo: (mediaType: string, file: File) => void;
}
