// Core
import { SagaIterator } from '@redux-saga/core';
// Instruments
import {
  startFetching,
  stopFetching,
  fill,
  setFetchingError,
} from '../../action';

// Types
import { Starships } from '../../types';

// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../api';

export function* fetchStarships(): SagaIterator {
  const options = {
    fetcher: api.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setFetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}
