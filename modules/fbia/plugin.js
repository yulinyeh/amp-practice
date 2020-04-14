export default ({ route }, inject) => {
  if (route.path.match('fbia')) {
    inject('isFBIA', true)
  } else {
    inject('isFBIA', false)
  }
}
