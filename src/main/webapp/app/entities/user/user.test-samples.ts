import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10116,
  login: 'IXm~@CbFJQ\\IhrA',
};

export const sampleWithPartialData: IUser = {
  id: 9335,
  login: 'Ii7d6H',
};

export const sampleWithFullData: IUser = {
  id: 31919,
  login: 'A',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
