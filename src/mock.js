const Mock = require('mockjs')
Mock.mock('123.0.0.1/api/a', (req, res) => {
  return {
    data: ['a','b']
  }
})
