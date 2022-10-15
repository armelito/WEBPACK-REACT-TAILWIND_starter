const comments = `
// Auto-generated file created by svgr-cli source svg.template.js
// The svg components is generated when running dev or prod mode
// To update without starting a server : npm run svg
// Do not edit
`

const template = ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => 
{
  return tpl`
    ${comments}

    ${imports}
    import PropTypes from 'prop-types'

    ${interfaces}

    const ${componentName} = ${props} => ${jsx}

    ${componentName}.propTypes = 
    {
      title: PropTypes.string,
    }

    ${exports}
  `
}

export default template