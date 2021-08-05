const fs = require('fs')

const streams = (source, ...ips) => {
  const readStream = fs.createReadStream(source, 'utf8')

  if (ips.length == 0) throw new Error('IP адреса не были переданы')

  ips.forEach((ip) => {
    const writeStream = fs.createWriteStream(`./${ip}_requests.log`, {
      flag: 'a',
      encoding: 'utf8',
    })

    let prev = ''
    readStream.on('data', (chunk) => {
      const str = prev + chunk.toString()
      const res = str
        .split('\n')
        .filter((el) => el.indexOf(`${ip}`) != -1)
        .join('\n')

      writeStream.write(res)
    })
  })
}

streams('./access.log', '89.123.1.41', '34.48.240.111')
