import React from 'react';
import userResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = userResources(resource);
  return (
    <ul>
      { resources.map(record => 
        <li key={ record.id }>{ record.title }</li>
      ) }
    </ul>)
  ;
}

export default ResourceList;