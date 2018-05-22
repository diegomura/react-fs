import React, { Fragment } from 'react';
import { render, File, Copy, Move, Delete } from './src';

render(
  <Fragment>
    <File name="test" extension="txt">
      Lorem ipsum dolor sit amet
    </File>
    <Copy from="test.txt" to="newTest.txt" />
    <Move from="newTest.txt" to="movedTest.txt" />
    <Delete file="movedTest.txt" />
    <Delete file="test.txt" />
  </Fragment>
);
