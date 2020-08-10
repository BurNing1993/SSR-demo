import axios from "axios";

module.exports = aysnc(req, res) => {
  const { data } = await axios.get('https://api.muxiaoguo.cn/api/xiaohua')
  res.status(200).json(data)
}
