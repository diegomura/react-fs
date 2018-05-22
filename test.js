import React, { Fragment } from 'react';
import { render, File } from './src';

render(
  <Fragment>
    <File name="test" format="txt">
      Lorem ipsum dolor sit amet
    </File>
  </Fragment>
);
