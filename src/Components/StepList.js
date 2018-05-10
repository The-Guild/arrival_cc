import React, { Component } from 'react';
import Step from './Step.js';

export default class StepList extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1
    }
  }

  preloadImages(input) {
		for (var i = 0; i < input.length; i++) {
			var image = new Image();
			image.src = input.image;
		}
  }

  componentWillMount() {
    this.preloadImages(this.props.arrivalSteps);
  }

  prevStep() {
    let currentStep = this.state.step;
    this.setState({
      step: currentStep - 1
    })
  }

  nextStep() {
    let currentStep = this.state.step;
    this.setState({
      step: currentStep + 1
    })
  }

  render() {
    return (
      <div>
        {this.props.arrivalSteps.map((step) =>
          <Step
            key={step.index}
            {...step}
            active={this.state.step === step.index ? true : false}
            maxSteps={this.props.arrivalSteps.length}
            setArrivalType={this.props.setArrivalType.bind(this)}
            prevStep={step.index > 1 ? this.prevStep.bind(this) : null}
            nextStep={step.index < this.props.arrivalSteps.length ? this.nextStep.bind(this) : null}
          />
        )}
      </div>
    )
  }
}
