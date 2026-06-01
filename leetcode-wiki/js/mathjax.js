window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Material 的 navigation.instant 用 document$ 触发每次"页面切换"
// 需要在 MathJax 完全加载后才能调用 typeset；加守卫避免空引用
document$.subscribe(() => {
  if (typeof MathJax !== "undefined" && MathJax.startup) {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});
