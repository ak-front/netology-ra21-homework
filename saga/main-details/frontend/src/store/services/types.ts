export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export const FETCH_SERVICE_DETAILS = 'FETCH_SERVICE_DETAILS';
export const FETCH_SERVICE_DETAILS_REQUEST = 'FETCH_SERVICE_DETAILS_REQUEST';
export const FETCH_SERVICE_DETAILS_SUCCESS = 'FETCH_SERVICE_DETAILS_SUCCESS';
export const FETCH_SERVICE_DETAILS_FAILURE = 'FETCH_SERVICE_DETAILS_FAILURE';

export interface IFetchServicesAction {
  type: typeof FETCH_SERVICES;
}

export interface IFetchServicesRequestAction {
  type: typeof FETCH_SERVICES_REQUEST;
}

export interface IFetchServicesSuccessAction {
  type: typeof FETCH_SERVICES_SUCCESS;
  payload: {
    items: IServiceItem[];
  };
}

export interface IFetchServicesFailureAction {
  type: typeof FETCH_SERVICES_FAILURE;
  payload: {
    error: TError;
  };
}

export interface IFetchServiceDetailsAction {
  type: typeof FETCH_SERVICE_DETAILS;
  payload: {
    id: number;
  };
}

export interface IFetchServiceDetailsRequestAction {
  type: typeof FETCH_SERVICE_DETAILS_REQUEST;
}

export interface IFetchServiceDetailsSuccessAction {
  type: typeof FETCH_SERVICE_DETAILS_SUCCESS;
  payload: {
    data: IServiceDetails;
  };
}

export interface IFetchServiceDetailsFailureAction {
  type: typeof FETCH_SERVICE_DETAILS_FAILURE;
  payload: {
    error: TError;
  };
}

export interface IServiceItem {
  id?: number;
  name?: string;
  price?: number;
}

export interface IServiceDetails extends IServiceItem {
  content?: string;
}

export interface IServicesState {
  services: {
    error: TError;
    isFetching: boolean;
    items: IServiceItem[];
  };
  service: {
    data: IServiceDetails;
    error: TError;
    isFetching: boolean;
  };
}

export type TError = string | null;

export type TServicesAction = IFetchServicesAction | IFetchServicesRequestAction | IFetchServicesSuccessAction | IFetchServicesFailureAction | IFetchServiceDetailsRequestAction | IFetchServiceDetailsSuccessAction | IFetchServiceDetailsFailureAction;
