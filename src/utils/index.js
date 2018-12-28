export function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/**
 * 格式化日期时间
 * @param {Data} date 时间
 */
export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * 短横线格式化的日期
 * @param {Date} date 时间
 */
export function formatDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [year, month, day].map(formatNumber).join('-')

  return t1
}

/**
 * 延迟, 默认300ms
 */
export function sleep(time = 300) {
  return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * 编码
 * @param {any} data 需要编码的数据
 */
export function enCode(data) {
  return encodeURIComponent(JSON.stringify(data))
}

/**
 * 解码
 * @param {any} data 需要解码的数据
 */
export function deCode(data) {
  return JSON.parse(decodeURIComponent(data))
}

/**
 * 等待图片加载完成
 * @param {Image} img image实例
 */
export function imgLoad(img) {
  return new Promise(resolve => (img.onload = resolve))
}

/**
 * 圆角图片
 * @param {Object} {src: 图片链接，x: x 轴的位置，y: y 轴的位置, w:图像的宽度, h: 图像的高度, 圆弧的半径}
 */
export function drawRadiusImage(ctx, { img, x, y, w, h, r }) {
  ctx.save() // 保存设置
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.moveTo(x + r, y) // 移动到左上角的点
  ctx.arcTo(x + w, y, x + w, y + r, r) // 画右上角的弧
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r) // 画右下角的弧
  ctx.arcTo(x, y + h, x, y + h - r, r) // 画左下角的弧
  ctx.arcTo(x, y, x + r, y, r) // 画左上角的弧
  ctx.fill() // 填充白底
  ctx.clip()
  if (img) {
    let { x: ix, y: iy, w: iw, h: ih } = { x, y, w, h } // 图片自适应
    const { width, height } = img
    if (width > height) {
      ih = (height / width) * iw
      iy = iy + (iw - ih) / 2
    } else if (width < height) {
      iw = (width / height) * ih
      ix = ix + (ih - iw) / 2
    }

    ctx.drawImage(img, ix, iy, iw, ih)
  }
  ctx.restore()
}

/**
 * 根据券type获取券名称
 */
export function couponType2Name(type) {
  let name = ''
  switch (type) {
  case 'coupon':
    name = '优惠券'
    break
  case 'discount':
    name = '折扣券'
    break
  case 'service':
    name = '服务券'
    break
  case 'gift':
    name = '礼品券'
    break
  default:
    name = ''
  }
  return name
}

/**
 * 创建图片实例
 */
export async function createImage(src) {
  try {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = src
    await imgLoad(img)
    return img
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

/**
 * File对象转换为dataURL、Blob对象转换为dataURL
 */
export async function readBlobAsDataURL(blob) {
  return new Promise((resolve, reject) => {
    const a = new FileReader()
    a.onload = function(e) {
      resolve(e.target.result)
    }
    a.readAsDataURL(blob)
  })
}
