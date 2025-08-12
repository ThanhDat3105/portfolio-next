import JavascriptIcon from './Javascript';
import ReactIcon from './React';
import VueIcon from './Vue';
import NextIcon from './NextJS';
import TypescriptIcon from './Typescript';
import TailwindIcon from './Tailwind';
import HtmlIcon from './Html';
import CssIcon from './Css';
import SassIcon from './Sass';
import BootstrapIcon from './Bootstrap';
import ReduxIcon from './Redux';
import ZodIcon from './Zod';
import SwrIcon from './Swr';
import ReactRouterIcon from './ReactRouter';
import AxiosIcon from './Axios';
import Antd from './Antd';
import Shadcn from './Shadcn';
import NodeJs from './NodeJs';
import Express from './Express';
import DaisyUi from './DaisyUi';

export const iconMap: Record<
  string,
  React.FC<{ size?: number; color?: string }>
> = {
  'js-icon': JavascriptIcon,
  'ts-icon': TypescriptIcon,
  'react-icon': ReactIcon,
  'vue-icon': VueIcon,
  'next-icon': NextIcon,
  'nodejs-icon': NodeJs,
  'express-icon': Express,

  'tailwind-icon': TailwindIcon,
  'bootstrap-icon': BootstrapIcon,
  'sass-icon': SassIcon,
  'html-icon': HtmlIcon,
  'css-icon': CssIcon,
  'antd-icon': Antd,
  'shadcn-icon': Shadcn,

  'redux-icon': ReduxIcon,
  'react-router-icon': ReactRouterIcon,
  'axios-icon': AxiosIcon,
  'swr-icon': SwrIcon,
  'zod-icon': ZodIcon,
  'daisyui-icon': DaisyUi
};
