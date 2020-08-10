import axios from 'axios'

module.exports = (req, res) => {
  axios
    .get('https://api.muxiaoguo.cn/api/xiaohua')
    .then(({ data: { data } }) => {
      res.status(200).json(data)
    })
}
