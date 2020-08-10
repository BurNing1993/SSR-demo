import axios from 'axios'

module.exports = (req, res) => {
  axios
    .get('https://api.muxiaoguo.cn/api/bing?id=today&pn=8')
    .then(({ data: { data } }) => {
      res.status(200).json(data)
    })
}
