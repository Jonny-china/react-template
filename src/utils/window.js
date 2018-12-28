import { Toast } from 'antd-mobile'

window.$toast = (content = '', duration = 1.5, onClose, mask = true) => Toast.show(content, duration, onClose, mask)

window.$success = (content = '', duration = 1.5, onClose, mask = true) =>
  Toast.success(content, duration, onClose, mask)

window.$fail = (content = '', duration = 1.5, onClose, mask = true) => Toast.fail(content, duration, onClose, mask)

window.$offline = (content = '', duration = 1.5, onClose, mask = true) =>
  Toast.offline(content, duration, onClose, mask)

window.$loading = (content = '玩命加载中...', duration = 0, onClose, mask = true) =>
  Toast.loading(content, duration, onClose, mask)

window.$hide = () => Toast.hide()
