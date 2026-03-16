# Tab Code Complete

一个用于实验和实现 **Tab 驱动代码补全** 的 VS Code 扩展项目。当前仓库处于早期脚手架阶段，已经具备基础的 TypeScript 扩展开发环境，但核心补全能力尚未完成。

## 当前状态

目前项目已经具备：

- TypeScript + VS Code Extension 基础脚手架
- 扩展入口 `src/extension.ts`
- 示例命令 `tabCodeComplete.hello`
- 基础构建、类型检查与 watch 开发流程
- VS Code 调试配置（可直接 `F5` 启动 Extension Development Host）

当前尚未完成：

- Tab 补全 provider 的实际实现
- 上下文感知补全逻辑
- 补全接受 / 取消交互设计
- 自动化测试与打包发布流程

如果你现在运行项目，能验证扩展被正确加载，但还不能体验真正的 Tab code completion 功能。

## 环境要求

建议环境：

- Node.js 25+
- npm 11+
- VS Code 1.100+

仓库中已补充 `.nvmrc`，如果你使用 `nvm`，可以执行：

```bash
nvm use
```

如果本机还没有安装对应版本，也可以先安装：

```bash
nvm install
nvm use
```

## 安装依赖

在项目根目录执行：

```bash
npm install
```

## 常用开发命令

### 1. 构建

```bash
npm run build
```

将 `src/` 下的 TypeScript 编译到 `dist/`。

### 2. 监听编译

```bash
npm run watch
```

适合开发扩展时持续监听文件变化。

### 3. 类型检查

```bash
npm run check
```

只进行 TypeScript 类型检查，不输出构建产物。

## 在 VS Code 中调试扩展

你可以直接用 VS Code 打开该仓库，然后按下面流程运行：

1. 执行 `npm install`
2. 执行 `npm run build`，或直接让 VS Code 任务自动启动 `watch`
3. 按 `F5`
4. 会打开一个新的 **Extension Development Host** 窗口
5. 在新窗口中打开命令面板，执行 `Tab Code Complete: Hello`

如果一切正常，你会看到扩展激活后的提示消息。

## 项目结构

```text
.
├── .nvmrc
├── .vscode/
│   ├── launch.json
│   └── tasks.json
├── src/
│   ├── commands/
│   │   └── hello.ts
│   ├── providers/
│   │   └── index.ts
│   └── extension.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

## 关键文件说明

- `src/extension.ts`：扩展激活入口，负责注册命令与 provider
- `src/commands/hello.ts`：当前示例命令
- `src/providers/index.ts`：后续补全 provider 的主要扩展点
- `.vscode/launch.json`：本地调试 Extension Host 配置
- `.vscode/tasks.json`：本地构建 / watch 任务配置

## 下一步建议

如果你准备继续完善这个插件，比较自然的推进顺序是：

1. 明确 Tab 补全的触发时机与交互方式
2. 在 `src/providers/` 中实现最小可用的 completion provider
3. 增加配置项，例如启用/禁用、触发语言范围、提示样式
4. 补充测试、打包和发布流程

一个很适合先回答的问题是：

- 你希望这个插件更接近“内联建议（inline suggestion）”，还是更接近“补全面板 + Tab 接受”？

这个选择会直接影响后续 provider 的实现方式。

## 已验证

当前仓库已经完成以下本地验证：

- `npm install`
- `npm run build`

两者均可成功执行。
