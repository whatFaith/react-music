export const PLAYLIST_CONFIG = 'PLAYLIST_CONFIG';
export const PLAYLIST_CONFIG_SUCCESS = 'PLAYLIST_CONFIG_SUCCESS';
export const PLAYLIST_CONFIG_FAIL = 'PLAYLIST_CONFIG_FAIL';

export function playlist(offset, order = 'hot') {
  return {
    actionType: PLAYLIST_CONFIG,
    'API': {
      url: 'top/playlist',
      types: [PLAYLIST_CONFIG, PLAYLIST_CONFIG_SUCCESS, PLAYLIST_CONFIG_FAIL],
      methods: 'get',
      data: {
        offset,
        order,
        limit: 20
      }
    }
  }
}
