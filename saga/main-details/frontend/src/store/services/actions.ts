import {
  FETCH_SERVICES,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_DETAILS,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
  IFetchServicesAction,
  IFetchServicesRequestAction,
  IFetchServicesSuccessAction,
  IFetchServicesFailureAction,
  IFetchServiceDetailsAction,
  IFetchServiceDetailsRequestAction,
  IFetchServiceDetailsSuccessAction,
  IFetchServiceDetailsFailureAction,
  IServiceItem,
  IServiceDetails,
  TError,
} from './types';

export const fetchServices = (): IFetchServicesAction => ({
  type: FETCH_SERVICES,
});

export const fetchServicesRequest = (): IFetchServicesRequestAction => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesSuccess = (items: IServiceItem[]): IFetchServicesSuccessAction => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: { items },
});

export const fetchServicesFailure = (error: TError): IFetchServicesFailureAction => ({
  type: FETCH_SERVICES_FAILURE,
  payload: { error },
});

export const fetchServiceDetails = (id: number): IFetchServiceDetailsAction => ({
  type: FETCH_SERVICE_DETAILS,
  payload: { id },
});

export const fetchServiceDetailsRequest = (): IFetchServiceDetailsRequestAction => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
});

export const fetchServiceDetailsSuccess = (data: IServiceDetails): IFetchServiceDetailsSuccessAction => ({
  type: FETCH_SERVICE_DETAILS_SUCCESS,
  payload: { data },
});

export const fetchServiceDetailsFailure = (error: TError): IFetchServiceDetailsFailureAction => ({
  type: FETCH_SERVICE_DETAILS_FAILURE,
  payload: { error },
});
