import React from 'react';
import { Spin } from 'antd';
import isEqual from 'lodash/isEqual';
import { isComponentClass } from "./Secured";

interface PromiseRenderProps<T,K>{
  ok:T;
  error: K;
  promise: Promise<boolean>;
}

interface PromiseRenderState{
  component:React.ComponentClass | React.FunctionComponent;
}

export default class PromiseRender<T,K> extends React.Component<
  PromiseRenderProps<T,K>,
  PromiseRenderState
>{
  state : PromiseRenderState = {
    component:()=>null,
  }
}