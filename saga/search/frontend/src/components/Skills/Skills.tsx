import React, { Fragment, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeSearchField } from '../../actions/actionCreators';

interface SkillsObject {
  items: Array<any>,
  loading: boolean,
  error: string | null,
  search: string,
}

interface RootState {
  skills: SkillsObject
}

export default function Skills(){
  const { items, loading, error, search } = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  const handleSearch = (event: SyntheticEvent) => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
  };

  const hasQuery: boolean = search.trim() !== '';

  return (
    <Fragment>
      <div>
        <input
          type="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {!hasQuery && <div>Type something to search..</div>}
      {hasQuery && loading && <div>searching...</div>}
      {error ? (
        <div>Error...</div>
      ) : (
        <ul>
          {items.map(o => <li key={o.id}>{o.name}</li>)}
        </ul>
      )}
    </Fragment>
  );
}
