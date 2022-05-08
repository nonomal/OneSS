# Github Actions

`记得让 E5 账户链接 GitHub 账户`

- 使用 Github Actions 定时构建任务，如索引等
- 有助于提升活跃度, 但活跃度计算方式并不公开，所以不保证有效

# 让示例运行

示例是给定时给所有文件编索引，若不想自己做，可以运行此示例

每日更新一次, 频率请自行修改 .github/workflows/auto.yml 文件的 schedule 部分 [(修改方法)](https://docs.github.com/cn/actions/using-workflows/workflow-syntax-for-github-actions#onschedule)

1. 修改 .github/workflows/auto.yml 文件以下部分
   [示例](/.github/workflows/auto_update.yml)

   ```shell
   git config --global user.email 你的Github邮件
   git config --global user.name 你的Github用户名
   ```

2. 修改 exp/setting.py 文件以下部分
   [示例](/auto/setting.py)
   ```python
   ONESS_DOMAIN = '你的OneSS域名'
   ```
3. 在自己的 Github 账户生成 GITHUB_SERCET 并以 OneSS 命名填入自己 OneSS 库的 settings>secrets>actions>New repository secret
4. Actions>All workflows>Auto>Run workflow 启用 Action 服务
