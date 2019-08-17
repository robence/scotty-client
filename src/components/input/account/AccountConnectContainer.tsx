import Presenter from './CreateAndSelectAccountContainer';

import { connect } from 'react-redux';
import { createAccount, selectAccount } from '../../../store/account/actions';
import { Account } from '../../../types/model';
import { State } from '../../../store/initialState';

const mapStateToProps = ({ account, accountList }: State) => ({
  account,
  accountList,
});

const mapDispatchToProps = (dispatch: any) => ({
  createAccount: (account: Account) => dispatch(createAccount(account)),
  selectAccount: (account: Account) => dispatch(selectAccount(account)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presenter);
