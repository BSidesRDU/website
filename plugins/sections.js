export default function ({ $config: { sections: defaults } }, inject) {
  inject(
    'sections',
    Object.keys(defaults).reduce((acc, key) => {
      acc[key] = defaults[key] === 'true';
      return acc;
    }, {})
  );
}
