# Reading Hub

一个集中阅读入口，把两个独立项目的内容并到同一个站：

- [**综述**](surveys/index.md) — 2026 年 2–5 月用多 agent 流水线产出的 13 篇综述（优化理论 / 机器学习 / 电网三大领域），来源项目 `subagent-lab/`
- [**LeetCode 题解**](leetcode-wiki/index.md) — 每日 LeetCode 题目的数学/CS 背景、formulation、算法思想，来源项目 `leetcode-daily/`

顶部 tabs 切换两个子站，左侧 nav 进入各自详情。**跨站搜索**通过顶部搜索栏（覆盖两个 child site 的全部内容）。

## 结构

```
vibe-coding-miscellaneous/
├── reading-hub/         <- 本站，唯一建站入口（合并视图）
│   ├── mkdocs.yml        <- 用 monorepo plugin !include 两个 child 的 nav
│   └── docs/
├── subagent-lab/        <- 内容来源，mkdocs.yml 仅作 nav 片段被 include
│   ├── mkdocs.yml
│   └── docs/             <- 13 篇综述 final.md
└── leetcode-daily/      <- 内容来源，mkdocs.yml 仅作 nav 片段被 include
    ├── mkdocs.yml
    └── wiki/             <- 167+ LeetCode 题解 + 索引
```

子站**不再单独建站**，统一由本站渲染/部署（详见 `reading-hub/README.md`）。

## 启动 / 构建

```bash
cd reading-hub
.venv/bin/mkdocs serve -a 127.0.0.1:8000   # 本地预览
.venv/bin/mkdocs build                      # 构建到 _site/
```
