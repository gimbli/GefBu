import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4cd06dff-f786-41fd-a371-f8578d13d6d3',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c89fea6a-e385-4c64-a733-f5009824f494',
};

export const sampleWithFullData: IAuthority = {
  name: 'ffa98215-3776-4a66-bcc6-dcc27c267866',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
