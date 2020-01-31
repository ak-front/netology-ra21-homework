import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Image,
  Spinner
} from 'react-bootstrap';
import store from 'store2';

const { REACT_APP_PROFILE_URL } = process.env;
const PROFILE_DEFAULT_STATE = null;
const STORE_KEY_PROFILE = 'profile';

function NavbarProfile({
  token,
  onLogout
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(store.get(STORE_KEY_PROFILE) || PROFILE_DEFAULT_STATE);
  const logout = () => {
    setProfile(PROFILE_DEFAULT_STATE);
    store.remove(STORE_KEY_PROFILE);
    onLogout();
  };
  const fetchProfile = async () => {
    setIsLoading(true);

    if (token === '') {
      return;
    }

    try {
      const response = await fetch(REACT_APP_PROFILE_URL, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok && response.status === 401) {
        logout();
      }

      setIsLoading(false);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      store.set(STORE_KEY_PROFILE, data);
      setProfile(data);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  const handleLogoutClick = () => logout();

  useEffect(() => {
    if (profile === null) {
      fetchProfile();
    }
  }, []);

  return (
    <div>
      {isLoading && (
        <Spinner
          animation="grow"
          role="status"
          size="sm"
        >
          <span className="sr-only">Загрузка...</span>
        </Spinner>
      )}
      {!isLoading && profile !== null && (
        <>
          <span className="mr-2">{profile.name}</span>
          <Image
            className="mr-2"
            roundedCircle
            src={profile.avatar}
          />
          <Button
            variant="outline-danger"
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
}

NavbarProfile.propTypes = {
  token: PropTypes.string,
  onLogout: PropTypes.func
}

NavbarProfile.defaultProps = {
  token: '',
  onLogout: () => null
};

export default NavbarProfile;

