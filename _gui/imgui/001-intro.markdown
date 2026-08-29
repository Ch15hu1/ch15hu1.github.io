---
layout: post
title:  "001 - intro"
date: 2026-08-27 14:07:42 +0800
categories: IMGUI
---

## 版本选择
IMGUI 有很多版本，我要学习 docking。

| 分支名称                                      | 简介                                                                                |
| ----------------------------------------- | ----------------------------------------------------------------------------------- |
| **master**                                | ImGui 主开发分支。包含最新代码，不一定是“稳定版”。ImGui 没有严格 release/stable 分支，master 通常就是大家使用的版本。       |
| **docking**                               | **最重要的扩展分支**。加入 Docking（窗口停靠）和 Multi-Viewport（多窗口）功能。很多商业工具、编辑器都会使用这个版本。            |
| **external/win98**                        | 外部实验分支。主要是测试 ImGui 在非常老的 Windows 环境（Windows 98 等）上的兼容性，不是普通用户需要的。                   |
| **features/demo_input_owner_and_routing** | 输入系统实验分支。用于测试新的输入拥有权（Input Ownership）和事件路由机制，例如多个窗口、控件之间决定谁接收键盘鼠标输入。                |
| **features/drawlist_193**                 | 和 Issue #193 有关的实验分支。DrawList 是 ImGui 最底层的绘制命令列表，这个分支用于测试某些 DrawList 改进。现在基本属于历史分支。 |
| **features/potocapv-newer-lines-2**       | 内部实验分支，和线条绘制、新版本 line rendering 相关。普通用户不用关注。                                        |
| **features/premake5**                     | 测试使用 Premake5 生成工程文件。ImGui 官方示例主要使用 premake/cmake 等构建方式。                            |
| **features/sdl_renderer3_multiviewports** | SDL3 + SDL_Renderer 后端实验，用于支持 Multi-Viewport。比如 ImGui 窗口可以拖出去成为真正的系统窗口。             |
| **features/shadows**                      | 阴影效果实验。ImGui 默认没有窗口阴影，这个分支探索增加类似现代 UI 的阴影。                                          |
| **features/string_view**                  | 尝试使用 `std::string_view` 优化字符串处理。后来 ImGui 自己有内部字符串处理方案，并没有成为主线。                      |

## 平台层和图形层
我选择使用：Win32 + Dx11 

### 平台层

| 平台后端 | 核心定位 |
| :--- | :--- |
| **Win32** | Windows 原生 API，直接创建窗口和处理消息，无任何第三方依赖。 |
| **GLFW** | 轻量级窗口与上下文管理库，专为 OpenGL/Vulkan 设计，API 简洁，跨平台。 |
| **SDL2 / SDL3** | 全面的多媒体库，除窗口外还管理音频、输入、游戏手柄等，跨平台能力最强（甚至支持 Web）。 |
| **Apple 专属** | 基于 Cocoa/UIKit 的原生实现，仅用于 macOS/iOS 平台。 |
| **Android / QNX** | 面向移动设备或嵌入式实时系统的后端。 |
| **Allegro / GLUT** | 历史悠久的教学或复古游戏库，目前主要用于维护旧项目。 |

### 图形层

| 图形 API | 性能层级 | 复杂度 | 支持平台 |
| :--- | :--- | :--- | :--- |
| **DirectX 11** | ⭐⭐⭐  | ⭐  | Windows（7 ~ 11） |
| **DirectX 12** | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ | Windows 10+ |
| **DirectX 9 / 10** | ⭐⭐  | ⭐  | Windows（含 XP） |
| **OpenGL 3** | ⭐⭐⭐  | ⭐⭐  | Windows、Linux、macOS 等（跨平台） |
| **Vulkan** | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐  | Windows、Linux、Android、macOS（通过 MoltenVK） |
| **Metal** | ⭐⭐⭐⭐  | ⭐⭐  | macOS、iOS（苹果生态专属） |
| **WGPU / SDL_gpu** | ⭐⭐⭐  | ⭐⭐⭐  | Windows、Linux、macOS、Web（跨平台，基于 WebGPU） |

## 配置环境
编译器：VS 2026

安装库
```powershell
PS D:\C++Library
> git clone https://github.com/ocornut/imgui.git
Cloning into 'imgui'...
remote: Enumerating objects: 71010, done.
remote: Counting objects: 100% (260/260), done.
remote: Compressing objects: 100% (81/81), done.
remote: Total 71010 (delta 218), reused 179 (delta 179), pack-reused 70750 (from 2)
Receiving objects: 100% (71010/71010), 126.53 MiB | 15.33 MiB/s, done.
Resolving deltas: 100% (55673/55673), done.

PS D:\C++Library
> cd imgui

PS D:\C++Library\imgui
> git switch docking
branch 'docking' set up to track 'origin/docking'.
Switched to a new branch 'docking'

PS D:\C++Library\imgui
> git branch
* docking
  master
```

imgui\examples 下有一个项目文件
![](https://ch15hu1.github.io/images/A67724B5D4424BD3BF93535860B8DB99.png)

打开后右键 Solution，选择 Retarget solution
![](https://ch15hu1.github.io/images/D13A71C997672D5CD4CE593B280E57B3.png)

更改项目 SDK
![](https://ch15hu1.github.io/images/6369D109FDFC0A1A1902E6558F93025A.png)

然后就可以编译运行了，这个 Demo Window 有所有需要的控件教学。
![](https://ch15hu1.github.io/images/BB270DF8B5CF1A21BFCF15913A98BEEB.png)