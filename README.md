# Reading Hub

> ⚠️ **AI 生成内容声明**：本站「综述」板块由多 agent LLM 流水线自动产出，
> 「LeetCode 题解」板块也包含大量 AI 辅助生成的内容。文中论述、公式、引用**可能存在错误或幻觉**，
> 请勿作为权威来源，重要结论务必自行核对原始文献 / 官方资料。

**统一的阅读入口**，把多个子项目的内容聚合成一个 MkDocs Material 站点：

| 板块 | 来源目录 | 内容 |
|------|----------|------|
| 综述 | `../subagent-lab` | 优化理论 / 机器学习 / 电网 等方向的多 agent 综述 |
| LeetCode 题解 | `../leetcode-daily` | 每日 LeetCode 题目的数学/CS 背景、formulation、算法思想 |

> **这里是唯一的建站入口。** 子项目（subagent-lab / leetcode-daily）**不再单独 build/deploy**，
> 它们各自的 `mkdocs.yml` 只作为 nav 片段被本站 `!include` 进来。
> （历史上 leetcode-daily 有过独立的 `site/`、`.venv`、`SITE.md`，已于 2026-06 移除并统一到这里。）

## 工作原理

用 [`mkdocs-monorepo-plugin`](https://github.com/backstage/mkdocs-monorepo-plugin) 的 `!include`
指令，把子站 `mkdocs.yml` 的 `nav` 拼进本站（见本目录 `mkdocs.yml`）：

```yaml
plugins:
  - monorepo
nav:
  - 首页: index.md
  - 综述 (subagent-lab): '!include ../subagent-lab/mkdocs.yml'
  - LeetCode 题解 (leetcode-daily): '!include ../leetcode-daily/mkdocs.yml'
```

子站的页面路径相对各自 `docs_dir`（subagent-lab → `docs/`，leetcode-daily → `wiki/`）解析。
子站 `mkdocs.yml` 里的 theme / palette / plugins 等独立配置在被 include 时**被忽略**，
只有 `nav` 生效；本站的 theme 统一接管外观。

## 本地预览

```bash
# 环境已就绪（.venv 内含 mkdocs-material + mkdocs-monorepo-plugin）
.venv/bin/mkdocs serve -a 127.0.0.1:8000
```

打开 <http://127.0.0.1:8000/>。

## 构建静态站

```bash
.venv/bin/mkdocs build   # 输出到 _site/（约 ~2 分钟，含子站全部页面）
```

## 维护须知

- **新增内容**：直接在对应子项目里写（`subagent-lab/docs/` 或 `leetcode-daily/wiki/`），
  并更新该子项目 `mkdocs.yml` 的 `nav`。本站会自动 include，无需改本站配置。
- **leetcode-daily 的 nav** 由 `leetcode-daily/scripts/sync_nav.py` 等脚本生成，照旧运行即可。
- **不要**在子项目里再装 mkdocs / 跑 `mkdocs build` —— 统一用本站。
