# 部署

不支持 OneDrive 个人版, 也没有此支持计划(个人版自身很差劲

1. 应用注册部分
    1. 登录[Azure 管理中心](http://aad.portal.azure.com)
    2. 点击 Azure Active Directory>应用注册>新注册，名称随便填，受支持的帐户类型选 仅此组织目录中的帐户。注册
       ![1](/doc/deploy/1.png)
    3. 记录 CLIENT_ID，TENANT_ID 值
       ![2](/doc/deploy/2.png)
    4. 点击证书与密码>新客户端密码,记录值为 CLIENT_SECRET
       ![3](/doc/deploy/3.png)
    5. 选择 API 权限>添加权限>Microsoft Graph>应用程序权限，添加 Files.Read.All,User.Read.All 权限并代表管理员同意权限
       ![4](/doc/deploy/4.png)
2. github 部分
    1. fork [OneSS 库](https://github.com/Tualin14/OneSS),或者你可以复制一份传到自己私有库。
    2. 打开 setting 文件夹里的 userList，输入要分享的账户，如图
       ![5](/doc/deploy/5.png)
3. vercel 部分

    1. 在[vercel](https://vercel.com/new) 注册登录选择新项目。导入自己的 OneSS 库。
    2. 在环境变量处填入之前获取的 CLIENT_ID，TENANT_ID，CLIENT_SECRET
       ![6](/doc/deploy/6.png)
    3. 加入环境变量
        - NEXTAUTH_URL: 值为部署域名，例`https://oness.dzaaaaaa.com`
        - NEXTAUTH_SECRET: 加密用，建议设为随机生成密码，如用指令`openssl rand -base64 32`生成
        - PRIVATE_TOKEN: 登录用密码，自己设置
    4. 部署
    5. 自定义域名 (可选)

        - 在 Settings>Domains 添加自己的域名
        - 注意:

          若使用 cloudflare，官方不建议使用代理功能，具体见[官方链接](https://vercel.com/support/articles/using-cloudflare-with-vercel?query=cloudf)

4. 成功后及可访问

若根据 Readme 无法成功部署，可参考[视频流程](https://www.bilibili.com/video/BV1SZ4y1d73v/)
