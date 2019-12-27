import axios from 'axios';
import Qs from 'qs'

const STATUS = 'storeStatus';

export const CALL_API = 'API';

export default store => next => action => {
  const opts = action[CALL_API];

  if (opts === undefined) {
    return next(action);
  }
  const { url } = opts;
  const [requestType, successType, failureType] = opts.types;
  opts.url = '/api' + url;

  function actionWith(_action) {
    _action = Object.assign(action, _action);

    // 'fetching' 'success' 'fail'
    const obj = {
      [STATUS]: 'fetching'
    };

    _action.data = Object.assign(_action.data || {}, obj);

    const finalAction = _action;

    delete finalAction[CALL_API];
    return finalAction;
  }

  const data = Object.assign({}, opts.data);

  next(actionWith({
    type: requestType,
    data
  }));

  // 处理post请求下会把参数转为字符串的问题
  opts.transformRequest = [function (data) {
    return Qs.stringify(data)
  }],

  console.log('opts--->', opts);

  return axios(opts).then(data => {
    if (data && data.data) {
      data.data.extra = opts.extra;
    }

    const cameData = data && data.data || data || {};

    const finalAction = actionWith({
      type: successType,
      transferParam: opts.transferParam,
      data: cameData
    });
    next(finalAction);

    return finalAction;
  }).catch(data => {
    const finalAction = actionWith({
      type: failureType,
      transferParam: opts.transferParam,
      data
    });
    next(finalAction);

    setTimeout(function () {
      throw data;
    }, 0);
  });
};
