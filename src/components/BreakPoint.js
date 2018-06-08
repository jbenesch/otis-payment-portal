import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Break Point Component
 *
 * Only renders children if viewport matches the provided media query.
 *
 * @param  {Object} props
 * @return {ReactElement}
 */
class BreakPoint extends Component {
  constructor(props) {
    super(props)
    this.mediaList = window.matchMedia(this.props.mediaQuery)
    this.state = {
      matches: this.mediaList.matches
    }
  }

  /**
   * Attaches the event listener to the MediaQueryList object
   * once the component has mounted on the dom.
   * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
   */
  componentDidMount() {
    this.mediaList.addListener(this._listener)
  }

  /**
   * Removes the event listener on the MediaQueryList object
   * before the component unmounts from the dom.
   * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
   */
  componentWillUnmount() {
    this.mediaList.removeListener(this._listener)
  }

  /**
   * MediaQueryList listener
   * @param  {Boolean} {matches} true is the document currently matches the media query list
   * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
   */
  _listener = ({ matches }) => {
    this.setState({ matches })
  }

  /**
   * Only render children if the document matches the media query
   */
  render() {
    if (typeof this.props.children === 'function') {
      return this.props.children(this.state.matches)
    }
    return this.state.matches && this.props.children
  }
}

BreakPoint.displayName = 'BreakPoint'

BreakPoint.propTypes = {
  mediaQuery: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}

export default BreakPoint

export const breakpoints = {
  mini: 360,
  miniMax: 479,
  small: 480,
  smallMax: 767,
  medium: 768,
  mediumMax: 959,
  large: 960,
  largeMax: 1219,
  xlarge: 1220,
  mobileLandscape: 823,
  mobileLandscapeLarger: 824
}

/**
 * Create a BreakPoint component for a specific form factor.
 * @param {Number} min The minimum number of pixels for this break point, inclusive.
 * @param {Number} max The maximum number of pixels for this break point, inclusive.
 * @param {String} displayName
 * @return {Component}
 */
export const createBreakpoint = (min, max, displayName) => {
  const BreakPointComponent = props => {
    const orientation = props.orientation
      ? ` and (orientation: ${props.orientation})`
      : ''
    const rangeQuery = (() => {
      if (min && max && props.range) {
        const queryVal = props.range
          ? `(min-width: ${min}px) and (max-width: ${max}px)`
          : ''
        return queryVal
      }
      const queryVal = props.smaller
        ? `(max-width: ${min - 1}px)`
        : `(min-width: ${min}px)`
      return queryVal
    })()
    return (
      <BreakPoint mediaQuery={`${rangeQuery}${orientation}`}>
        {props.children}
      </BreakPoint>
    )
  }

  BreakPointComponent.displayName = displayName || 'CustomBreakPoint'
  BreakPointComponent.propTypes = {
    smaller: PropTypes.bool,
    larger: PropTypes.bool,
    range: PropTypes.bool,
    orientation: PropTypes.oneOf(['portrait', 'landscape']),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  }

  return BreakPointComponent
}

export const Mobile = createBreakpoint(
  breakpoints.small, // 480
  breakpoints.smallMax, // 767
  'Mobile'
)

export const Tablet = createBreakpoint(
  breakpoints.medium, // 768
  breakpoints.mediumMax, // 959
  'Tablet'
)

export const Laptop = createBreakpoint(
  breakpoints.large, // 960
  breakpoints.largeMax, // 1219
  'Laptop'
)

export const Desktop = createBreakpoint(
  breakpoints.xlarge, // 1220
  null,
  'Desktop'
)
