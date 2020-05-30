import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../store/rootReducer';
import { fetchServices } from '../../store/services/actions';

import Loader from '../Loader';
import AlertRepeatRequest from '../AlertRepeatRequest';

function Services(): React.ReactElement | null {
  const {
    error,
    isFetching,
    items,

  } = useSelector((state: RootState) => state.services.services);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchServices());
  };

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
          <>
            {items.length > 0 && (
              <ul className="list-group">
                {items.map(item => (
                  <li
                    key={item.id}
                    className="list-group-item"
                  >
                    <Link to={`/${item.id}/details`}>
                      {item.name} - {item.price} руб
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Services;
