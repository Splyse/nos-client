import React from 'react';
import { compose } from 'recompose';
import { withCall, withData } from 'spunky';

import authActions from 'auth/actions/authActions';
import withNetworkData from 'shared/hocs/withNetworkData';
import PriorityFee from 'account/components/Portfolio/TransactionsPanel/Send/PriorityFee';

import InvocationPrompt from './InvocationPrompt';
import withNullLoader from '../withNullLoader';
import withPrompt from '../withPrompt';

const mapBalancesDataToProps = (balances) => ({ balances });

export default function withInvocationPrompt(balancesActions) {
  return compose(
    withCall(balancesActions),
    withNullLoader(balancesActions),
    withData(balancesActions, mapBalancesDataToProps),
    withPrompt(InvocationPrompt, (props) => ({
      title: null,
      renderFooter: () => <PriorityFee {...props} editable={false} />
    }))
  );
}
