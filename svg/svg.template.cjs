const comment = `
// Auto-generated file created by svgr-cli source svg.template.js
// The svg components is generated when running dev or prod
// To update without starting a server : npm run svg
// Do not edit
`
const getAttributeValue = (jsx, name) => 
{
  return jsx.find((e) => 
  {
    return e.name.name === name
  })
};

const template = (variables, { tpl }) => 
{
  const widthAttr = getAttributeValue(variables.jsx.openingElement.attributes, 'width')
  const heightAttr = getAttributeValue(variables.jsx.openingElement.attributes, 'height')

  const width = widthAttr.value.expression.value
  const height = heightAttr.value.expression.value
  const aspectRatio = width / height

  const widthExpr = tpl(`props.width || (props.height && Math.floor(+props.height * ${aspectRatio})) || ${width}`)
  const heightExpr = tpl(`props.height || (props.width && Math.floor(+props.width / ${aspectRatio})) || ${height}`)

  widthAttr.value.expression = widthExpr.expression
  heightAttr.value.expression = heightExpr.expression

  return tpl`
    ${comment}
    
    ${variables.imports}
    import PropTypes from 'prop-types'

    ${variables.interfaces}

    const ${variables.componentName} = (${variables.props}) => ( ${variables.jsx} )
 
    ${variables.componentName}.propTypes = 
    {
      title: PropTypes.string,
    }

    ${variables.exports}
  `
}

module.exports = template