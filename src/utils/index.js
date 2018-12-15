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
