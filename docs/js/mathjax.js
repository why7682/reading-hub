window.MathJax = {
  loader: {
    load: ['[tex]/boldsymbol', '[tex]/cancel', '[tex]/color', '[tex]/mhchem']
  },
  tex: {
    packages: {'[+]': ['boldsymbol', 'cancel', 'color', 'mhchem']},
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
