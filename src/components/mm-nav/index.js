import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import './index.less'

// 页面导航栏组件

const MmNav = props => {
  const pathname = props.location.pathname;
  const showNav = /sheetlist|rank/.test(pathname);

  if (!showNav) return null;

  const { history } = props;
  const title = /sheetlist/.test(pathname) ? '歌单' :
                /rank/.test(pathname) ? '排行榜' : '';
  return (
    <nav className="mm-nav">
      <div className="mm-nav-left" onClick={history.goBack} />
      <div className="mm-nav-title">{title}</div>
      <div className="mm-nav-right" />
    </nav>
  )
}

MmNav.propTypes = {
  title: PropTypes.string //标题
}

export default withRouter(MmNav)
