import React from 'react'
export default file => React.lazy(() => import(`@/views/${file}`))
