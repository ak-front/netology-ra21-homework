import React, { ReactElement } from 'react'

import ServiceDetails from '../components/ServiceDetails';

interface Props {}

function ServicePage({}: Props): ReactElement {
  return (
    <ServiceDetails />
  );
}

export default ServicePage;
