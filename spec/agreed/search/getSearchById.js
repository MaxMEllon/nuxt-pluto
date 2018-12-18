module.exports = {
  request: {
    path: '/beauty/search/:id',
    method: 'GET'
  },
  response: {
    body: {
      results: {
        search: [
          {
            name: '{:name}',
            urls: {
              pc: '{:pc}',
              mobile: '{:mobile}'
            }
          }
        ]
      }
    },
    values: {
      name: 'サロン',
      pc: '/public/cat_large.jpeg',
      mobile: '/public/cat_small.jpeg'
    }
  }
}
