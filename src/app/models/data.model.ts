import { AccountInterface } from './account.model';
import { TotalsInterface } from './totals.model';

export interface DataInterface {
  totals: TotalsInterface[];
  account: AccountInterface;
}

