import React from 'react';

const HeadComponents = [<script key={0} src="./libs/font-awesome.js" />];

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

// eslint-disable-next-line import/prefer-default-export
export { onRenderBody };
