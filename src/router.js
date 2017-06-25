import React from 'react'
import { Router, Route } from 'dva/router'
import IndexPage from './routes/IndexPage'

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'))
        })
      },
    },
    {
      path: '/wuziqi',
      name: 'Wuziqi',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'))
          cb(null, require('./routes/wuziqi/index'))
        })
      },
    },
  ]
  return (
    <Router history={history} routes={routes}/>
  )
}

export default RouterConfig