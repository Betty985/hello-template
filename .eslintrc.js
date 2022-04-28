// ESLint 配置文件遵循 commonJS 的导出规则
module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  // env 表示启用 ESLint 检测的环境
  env: {
    browser: true,
    node: true,
  },
  //  'plugin:vue/vue3-essential'不会限制根节点只有一个
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  //  解析器ESLint
  parserOptions: {
    sourceType: 'module',
    // 不限制import的使用位置
    allowImportExportEverywhere: true,
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-template-root': 'off',
    'space-before-function-paren': 'off',
    'vue/comment-directive': 'off',
    'no-undef': 'off',
    'no-control-regex': 'off',
  },
}
