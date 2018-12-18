module.exports = {
  request: {
    path: '/beauty/smallArea',
    method: 'GET',
    params: {
      start: '{:start}'
    },
    values: {
      start: 1
    }
  },
  response: {
    body: {
      results: {
        results_available: '{:results_available}',
        results_returned: '{:results_returned}',
        results_start: '{:results_start}',
        status: '{:status}',
        small_area: '{:small_area}'
      }
    },
    values: {
      results_available: '4',
      results_returned: '4',
      results_start: '1',
      status: 'OK',
      small_area: [
        {
          code: 'X007',
          name: 'センター街・神南・公園通り・道玄坂・神泉',
          cnt: '98',
          middle_area: {
            code: 'AD',
            name: '渋谷',
            cnt: '180'
          },
          service_area: {
            code: 'SA',
            name: '関東',
            cnt: '13944'
          }
        },
        {
          code: 'X111',
          name: '宮益坂・明治通り・桜丘',
          cnt: '82',
          middle_area: {
            code: 'AD',
            name: '渋谷',
            cnt: '180'
          },
          service_area: {
            code: 'SA',
            name: '関東',
            cnt: '13944'
          }
        },
        {
          code: 'X566',
          name: '青山・外苑前',
          cnt: '135',
          middle_area: {
            code: 'JR',
            name: '青山・表参道・原宿',
            cnt: '519'
          },
          service_area: {
            code: 'SA',
            name: '関東',
            cnt: '13944'
          }
        },
        {
          code: 'X009',
          name: '表参道',
          cnt: '185',
          middle_area: {
            code: 'JR',
            name: '青山・表参道・原宿',
            cnt: '519'
          },
          service_area: {
            code: 'SA',
            name: '関東',
            cnt: '13944'
          }
        }
      ]
    }
  }
}
