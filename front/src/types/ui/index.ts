export interface ILayout {
  children: string | JSX.Element | JSX.Element[];
}

export interface IFlexBox {
  children: string | JSX.Element | JSX.Element[];
}

export interface IFormLayout {
  title: string;
  desc: string;
  children: string | JSX.Element | JSX.Element[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IFormButton {
  text: string;
}

export interface IInputLabel {
  label: string;
  type: 'text' | 'password' | 'email';
  name: string;
  htmlfor?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
