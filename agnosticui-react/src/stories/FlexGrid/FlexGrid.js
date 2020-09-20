import React from 'react'
import PropTypes from 'prop-types'
import createProps from './createProps'
import getClass from './classNames'

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

/**
 * FlexGrid is a flexbox based React component for doing layout. Under the hood it uses
 * a customized version of [flexboxgrid2](https://evgenyrodionov.github.io/flexboxgrid2)
 * that removes the magic gutters used by the original flexboxgrid2 css library. This
 * customized version (at `./FlexBoxGrid2Custom.css.scss`) is pulled in using CSS Modules.
 *
 * @public
 *
 * @param {string} className - in addition to sizing attributes, you can add custom CSS for the grid container
 * @param {string} tagName - what type of html tag to use for the container defaults to `<div>`
 * @param {ReactNode} children - children to render within the grid
 */
const FlexGrid = (props) => {
  const containerClass = getClass('flexgrid-container')
  const classNames = [props.className, containerClass]
  const gridPropsCreated = createProps(propTypes, props, classNames)

  // We're essentially taking the props passed in and:
  //   - rejecting any props passed in that are not in propTypes
  //   - adding classNames to our new react element below
  //   - allowing for a custom tagName or falling back to 'div'
  return React.createElement(
    props.tagName || 'div',
    gridPropsCreated
  )
}

FlexGrid.propTypes = propTypes

export default FlexGrid;
