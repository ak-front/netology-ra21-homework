import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootState } from '../../store/rootReducer';
import { fetchServiceDetails } from '../../store/services/actions';

import Loader from '../Loader';
import AlertRepeatRequest from '../AlertRepeatRequest';

interface IServiceDetailsProps {
  match: {
    params: {
      id: number
    }
  };
}

function ServiceDetails(props: IServiceDetailsProps): React.ReactElement | null {
  const { match } = props;
  const {
    data,
    error,
    isFetching,
  } = useSelector((state: RootState) => state.services.service);
  const dispatch = useDispatch();
  const { id } = match.params;

  const fetchData = () => {
    dispatch(fetchServiceDetails(id));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        {error ? (
          <AlertRepeatRequest onRepeatRequest={fetchData} />
        ) : (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.content}</p>
              <p className="card-text"><b>{data.price} руб</b></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



export default withRouter(ServiceDetails);
