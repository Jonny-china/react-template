import React from 'react'
import loadingImage from '@/assets/images/loading.svg'

const Loading = () => (
  <div style={styles.loadingWrap}>
    <img alt="Loading..."
      src={loadingImage}
      style={styles.loading} />
  </div>
)

const styles = {
  loadingWrap: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999999999999999,
    backgroundColor: '#fff'
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    width: '30vw',
    height: '30vw'
  }
}

export default Loading
