import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

global.React = React;
global.screen = screen;
global.render = render;
global.userEvent = userEvent;
