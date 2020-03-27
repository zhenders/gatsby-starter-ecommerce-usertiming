import React from 'react';

export default class MeasureRender extends React.Component {
  constructor() {
    super();

    this.mounted = false;
  }

  render() {
    const name = this.props.name;
    if (this.mounted) {
      //window.performance.mark(`${name}UpdateStart`);
      //performance.mark(`${name}UpdateStart`);
    } else {
      //window.performance.mark(`${name}MountStart`);
      //performance.mark(`${name}MountStart`);
    }
    return this.props.children;
  }

  componentDidMount() {
    this.mounted = true;
    
    const name = this.props.name;
    //window.performance.mark(`${name}MountEnd`);
    //window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);
    performance.mark(`${name}MountEnd`);
    performance.measure(`${name}Mount`, , `${name}MountEnd`);
  }

  componentDidUpdate() {
    const name = this.props.name;
    //window.performance.mark(`${name}UpdateEnd`);
    //window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
    performance.mark(`${name}UpdateEnd`);
    performance.measure(`${name}Update`, , `${name}UpdateEnd`);
  }
}
