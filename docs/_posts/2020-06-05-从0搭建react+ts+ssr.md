---
title: 从0搭建react+ts+ssr
date: 2020-06-05
categories:
 - frontend
tags:
 - react
 - ssr
 - typescript
---

## 前言
vue和react的项目已经大大小小做过很多个了，基本都是基于cli搭建的，比如vue使用vue-cli，react使用umi、create-react-app、razzle、next等等，webpack也没有系统学习过，都是需要用时再翻文档。
所以也很想自己从零搭建，也算是学习一下。
> 此前看到过这样一个观点：团队中只要有一两个人很熟悉webpack就可以了，就算这一两个人离职了，再安排人去深入学习两个礼拜，也足够用了。还挺赞同的，因为我也感觉webpack就是各种配置，配配配。。

## 整体流程
关于ssr在此就不再赘述了，说白了前端还是spa的项目，node端接管部分或全部路由做服务端渲染，整体上来说，就是这4个步骤：

- [react+ts搭建前端工程]()
- [react-router+hooks搭建前端基础架构]()
    > 既然从0搭了，那就抛弃redux，使用hooks+router从0搭建一下吧
- [koa2+ts搭建node工程]()
- [ssr改造]()

我们需要2个工程：前端spa，后端node，然后针对ssr的需要对两个工程进行改造。
