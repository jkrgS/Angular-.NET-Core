import { Addresses } from './addresses';

export interface Users {
  id: number;
  name: string;
  addresses: Addresses[];
}
