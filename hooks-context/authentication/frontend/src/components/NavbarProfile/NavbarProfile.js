import React, { useContext } from 'react';
import {
  Button,
  Image,
  Spinner
} from 'react-bootstrap';

import AuthContext from './../../contexts/AuthContext';

function NavbarProfile() {
  const {
    isProfileLoading,
    profile,
    logout
  } = useContext(AuthContext);

  const handleLogoutClick = () => logout();

  return (
    <div>
      {isProfileLoading && (
        <Spinner
          animation="grow"
          role="status"
          size="sm"
        >
          <span className="sr-only">Загрузка...</span>
        </Spinner>
      )}
      {!isProfileLoading && profile && (
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

export default NavbarProfile;
