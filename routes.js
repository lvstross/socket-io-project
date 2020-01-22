export const index = (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
}

export const javascript = (req, res) => {
  res.sendFile(__dirname + '/public/javascript.html');
}

export const swift = (req, res) => {
  res.sendFile(__dirname + '/public/swift.html');
}

export const css = (req, res) => {
  res.sendFile(__dirname + '/public/css.html');
}

export default {
  index,
  javascript,
  swift,
  css,
}
