const camelCased = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase())

export default function(context, inject) {
  inject('camelCased', camelCased)
}

export { camelCased }
