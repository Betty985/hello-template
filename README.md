# hello-template

> 脚手架是一个完全“启下”的功能模块，不存在任何前置依赖流程。脚手架的功能是创建项目初始文件，本质是方案的封装。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 编码规范

## 使用 **ESlint** 提高代码质量和一致性

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外：

- ESLint 使用 Espree 解析 JavaScript。
- ESLint 使用 AST 去分析代码中的模式
- ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。
  安装
  `npm install eslint --save-dev`
  设置配置文件
  `./node_modules/.bin/eslint --init`

### 解析器

默认使用 Espree 作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

- 它必须是一个 Node 模块，可以从它出现的配置文件中加载。通常，这意味着应该使用 npm 单独安装解析器包。
- 它必须符合 parser interface。
  `npm i @babel/eslint-parser --save-dev`

### 补充

设置 -> 搜索：eslint-plugin-vue -> 第一个(Vetur › Validation: Template )取消勾选

## ESLint 与 Prettier 配合

**`prettier`**

1. 一个代码格式化工具
2. 开箱即用
3. 可以直接集成到 `VSCode` 之中
4. 在保存时，让代码直接符合 `ESLint` 标准（需要通过一些简单配置）
   在项目中新建 `.prettierrc` 文件，该文件为 `perttier` 默认配置文件
   在该文件中写入如下配置：

   ```json
   {
     // 不尾随分号
     "semi": false,
     // 使用单引号
     "singleQuote": true,
     // 多行逗号分割的语法中，最后一行不加逗号
     "trailingComma": "none"
   }
   ```

   在设置中，搜索 `save` ，勾选 `Format On Save`

# git 规范

## 约定式提交规范

约定式提交规范是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更， 使这种惯例与 SemVer 相互对应。

提交说明的结构如下所示：

原文：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

译文：

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

fix: 类型 为 fix 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）。
feat: 类型 为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）。
BREAKING CHANGE: 在脚注中包含 BREAKING CHANGE: 或 <类型>(范围) 后面有一个 ! 的提交，表示引入了破坏性 API 变更（这和语义化版本中的 MAJOR 相对应）。 破坏性变更可以是任意 类型 提交的一部分。
除 fix: 和 feat: 之外，也可以使用其它提交 类型 ，例如 @commitlint/config-conventional（基于 Angular 约定）中推荐的 build:、chore:、 ci:、docs:、style:、refactor:、perf:、test:，等等。
脚注中除了`BREAKING CHANGE: <description>`，其它条目应该采用类似 git trailer format 这样的惯例。
其它提交类型在约定式提交规范中并没有强制限制，并且在语义化版本中没有隐式影响（除非它们包含 BREAKING CHANGE）。 可以为提交类型添加一个围在圆括号内的范围，以为其提供额外的上下文信息。例如 feat(parser): adds ability to parse arrays.。

## Commitizen：git 提交规范化工具

使用 Commitizen 提交时，系统将提示在提交时填写任何必需的提交字段。无需再等到稍后 git 提交钩子运行并拒绝提交（尽管这仍然有帮助）
`npm install -g commitizen`
可定制的 Commitizen 插件(或独立的实用工具)可以帮助实现一致的提交消息，就像 AngularJS 团队那样。
`npm i cz-customizable@6.3.0 --save-dev`
使用 `git cz` 代替 `git commit`，即可看到提示内容

## Git Hooks

Git 钩子是 Git 在事件之前或之后执行的脚本，例如：提交、推送和接收。Git 钩子是一个内置功能 - 无需下载任何内容。Git 钩子在本地运行。
每个 Git 存储库都有一个文件夹`.git/hooks`，其中包含可以绑定的每个钩子的脚本。您可以根据需要自由更改或更新这些脚本，Git 将在这些事件发生时执行它们。
可以添加脚本的完整列表：

- applypatch-msg
- pre-applypatch
- post-applypatch
- pre-commit
- prepare-commit-msg
- commit-msg
- post-checkout
- post-merge
- pre-receive
- update
- post-receive
- post-update
- pre-auto-gc
- post-rewrite
- pre-push
  关键钩子：

1. `commit-msg`：可以用来规范化标准格式，并且可以按需指定是否要拒绝本次提交
2. `pre-commit`：会在提交前被调用，并且可以按需指定是否要拒绝本次提交

## husky + commitlint 检查提交描述是否符合规范要求

### commitlint：用于检查提交信息

安装
`npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4`
创建 `commitlint.config.js` 文件
`echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`

### husky：`git hooks`工具

`npm install husky@7.0.1 --save-dev`
启动 hooks
`npx husky install`
在 `package.json` 中生成 `prepare` 指令
`npm set-script prepare "husky install"`
执行 `prepare` 指令

```
npm run prepare
```

添加 `commitlint` 的 `hook` 到 `husky`中，并指令在 `commit-msg` 的 `hooks` 下执行 `npx --no-install commitlint --edit "$1"` 指令

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## lint-staged 自动修复格式错误

只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送。
在你本地 `commit` 之前，校验你提交的内容是否符合你本地配置的 `eslint`规则(这个见文档 ESLint，校验如果符合规则：则会提交成功。 如果不符合规则：它会自动执行 `eslint --fix` 尝试帮你自动修复，如果修复成功则会把修复好的代码提交，如果失败，则会提示错误，修好错误之后才允许提交代码。

# webpack

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

```
npm install --save-dev webpack
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
npx webpack --config webpack.config.js
```

webpack 与 style-loader 版本冲突  
style-loader 降级

```
npm i  --save-dev style-loader  css-loader
```

在安装一个要打包到生产环境的安装包时，你应该使用 `npm install --save`，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 `npm install --save-dev`。
执行 npx webpack，会将我们的脚本作为入口起点，然后 输出 为 main.js。
打包文件配置

```js
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
/* eslint-disable no-cond-assign */
/* eslint-disable no-empty */
/* eslint-disable no-useless-escape */
/* eslint-disable no-extra-semi */
```

# npx

npx 可以运行使用 Node.js 构建并通过 npm 仓库发布的代码。

## 轻松地运行本地命令

运行 npx commandname 会自动地在项目的 node_modules 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包。

## 无需安装的命令执行

npx 的另一个重要的特性是，无需先安装命令即可运行命令。
不需要安装任何东西。
可以使用 @version 语法运行同一命令的不同版本。

## 使用不同的 Node.js 版本运行代码

使用 @ 指定版本，并将其与 node npm 软件包 结合使用：

```
BASH
npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1
```

这有助于避免使用 nvm 之类的工具或其他 Node.js 版本管理工具。

## 直接从 URL 运行任意代码片段

npx 并不限制使用 npm 仓库上发布的软件包。

# vscode

alt+鼠标左键 选中多行同时编辑

# 参考资料

- 《前端工程化——体系设计与实践》周俊鹏
- 《深入理解 JavaScript 特性》
- [ESLint](https://eslint.bootcss.com/docs/user-guide/getting-started)
- [prettier](https://www.prettier.cn/)
- [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [githooks](https://githooks.com/)
- [多行光标](https://www.cnblogs.com/shidawang/p/12220767.html#)
- [commitlint](https://commitlint.js.org/#/guides-upgrade)
- [webpack](https://www.webpackjs.com/concepts/)
- [node.js](http://nodejs.cn/learn/the-npx-nodejs-package-runner)
