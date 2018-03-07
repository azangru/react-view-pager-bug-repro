import React, { Component } from 'react';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import './Slider.css';

class Slider extends Component {

  colors = [
    'indianred',
    'hotpink',
    'darkorange',
    'darkkhaki',
    'mediumpurple',
    'indigo',
    'mediumseagreen',
    'olive',
    'cadetblue',
    'tan'
  ]

  showPrev = () => {
    this.slider.prev();
  };

  showNext = () => {
    this.slider.next();
  };


  render() {
    return (
      <div>
        <ViewPager>
          <Frame
            className='slider__frame'
          >
            <Track
              ref={component => this.slider = component}
              viewsToShow={1}
              infinite={true}
              className='slider__track'
            >
              { this.renderSlides().map((slide, index) => <View key={index}>{slide}</View>) }
            </Track>
          </Frame>
        </ViewPager>
        <div>
          { this.renderControls() }
        </div>
      </div>
    );
  }

  renderSlides() {
    return this.colors.map(color => (
      <div style={{ background: color, height: '500px' }} />
    ));
  }

  renderControls() {
    return (
      <div className="slider__controls">
        <span onClick={this.showPrev}>Previous</span>
        <span onClick={this.showNext}>Next</span>
      </div>
    );
  }

}

export default Slider;
