const env = process.env.NODE_ENV || 'development'
const config = {
  development: require('./development.js').default
}

const general = {

}

export default { ...general, ...config[env] }
