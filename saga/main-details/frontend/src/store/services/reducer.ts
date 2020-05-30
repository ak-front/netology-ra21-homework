import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
  IServicesState,
  TServicesAction,
} from './types';

const initialState: IServicesState = {
  services: {
    error: null,
    isFetching: false,
    items: [],
  },
  service: {
    data: {},
    error: null,
    isFetching: false,
  }
};

export default function servicesReducer(state = initialState, action: TServicesAction) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST: {
      return {
        ...state,
        services: {
          error: null,
          isFetching: true,
          items: [],
        }
      }
    }

    case FETCH_SERVICES_SUCCESS: {
      const { items } = action.payload;

      return {
        ...state,
        services: {
          ...state.services,
          isFetching: false,
          items,
        }
      }
    }

    case FETCH_SERVICES_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        services: {
          error,
          isFetching: false,
          items: [],
        }
      }
    }

    case FETCH_SERVICE_DETAILS_REQUEST: {
      return {
        ...state,
        service: {
          data: {},
          error: null,
          isFetching: true,
        }
      }
    }

    case FETCH_SERVICE_DETAILS_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        service: {
          ...state.service,
          data,
          isFetching: false,
        }
      }
    }

    case FETCH_SERVICE_DETAILS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        service: {
          data: {},
          error,
          isFetching: false,
        }
      }
    }

    default: {
      return state;
    }
  }
}
