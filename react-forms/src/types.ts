export interface IForm {
  setFormValues: React.Dispatch<React.SetStateAction<ICardData[]>>;
}

export interface IErrors {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  agree?: boolean;
}

export interface ICard {
  cardData: ICardData;
}

export interface ICardData {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: boolean;
}

export interface IToggleSwitch {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
