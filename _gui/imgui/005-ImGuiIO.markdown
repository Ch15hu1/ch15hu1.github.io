---
layout: post
title:  "005 - ImGuiIO"
date: 2026-08-30 07:40:52 +0800
categories: IMGUI
---

`ImGuiIO`包含了**配置项、输入状态和输出信息**三大部分。
## 配置项
这些字段通常在程序初始化时设置一次，用于控制 ImGui 的全局行为。

### 核心显示与时间

* **`DisplaySize`**: ：Win32 窗口有多大，必须每帧设置。
* **`DeltaTime`**: 上一帧到当前帧的时间间隔（秒）。用于控制动画速度。
* **`DisplayFramebufferScale`**:  framebuffer 与显示尺寸的缩放比，常用于高分屏（Retina）。

### 文件与持久化

* **`IniFilename`**: 窗口位置、大小等状态保存的 `.ini` 文件路径。设为 `NULL` 可禁用此功能。
* **`IniSavingRate`**: 自动保存状态到 `.ini` 文件的时间间隔（秒）。
* **`LogFilename`**: `ImGui::LogToFile` 默认的日志文件名。

### 鼠标与键盘行为

* **`MouseDoubleClickTime`**: 判定双击的最大时间间隔（秒）。
* **`MouseDoubleClickMaxDist`**: 判定双击时鼠标允许移动的最大距离（像素）。
* **`MouseDragThreshold`**: 判定鼠标开始拖拽的最小移动距离（像素）。
* **`KeyRepeatDelay`**: 按键首次重复前的延迟时间（秒）。
* **`KeyRepeatRate`**: 按键重复的速率（秒）。
* **`KeyMap`**: 将 ImGui 逻辑键（如 `ImGuiKey_Tab`）映射到 `KeysDown` 数组的索引。

### 字体

* **`Fonts`**: 指向 `ImFontAtlas` 对象的指针，包含所有加载的字体。
* **`FontDefault`**: 指向默认字体的指针，可手动设置。
* **`FontGlobalScale`**: 所有字体的全局缩放比例。
* **`FontAllowUserScaling`**: 是否允许用户通过 `Ctrl+滚轮` 缩放字体。

### 高级与平台行为

* **`ConfigFlags`**: **`ImGuiConfigFlags_`** 枚举，控制导航、视口、停靠等主功能开关。
* **`BackendFlags`**: **`ImGuiBackendFlags_`** 枚举，由后端（Backend）设置，用于告知 ImGui 其支持的能力。
* **`UserData`**: 一个 `void*` 指针，供开发者存储任意自定义数据。
* **`WordMovementUsesAltKey`**: `true` 时，文本编辑中按 `Alt` 而非 `Ctrl` 进行词移动（macOS 风格）。
* **`ShortcutsUseSuperKey`**: `true` 时，快捷键使用 `Cmd/Super` 而非 `Ctrl`（macOS 风格）。

### 其他

* **`AntiAliasedLines` / `AntiAliasedShapes`**: 控制线条和形状的抗锯齿。
* **`CurveTessellationTol`**: 曲线细分容差，值越小曲线越平滑（性能开销越大）。

## 输入

你的应用程序需要**每帧**在调用 `ImGui::NewFrame()` 前，填充这些字段，将输入事件传递给 ImGui。
* **`MousePos`**: 鼠标在显示区域内的当前位置（像素），没有鼠标时设为 `(-1, -1)`。
* **`MouseDown[5]`**: 鼠标按钮按下状态，索引 0-4 分别代表左、右、中、侧键1、侧键2。
* **`MouseWheel`**: 鼠标滚轮滚动量，正值向上滚动。
* **`MouseDrawCursor`**: 是否让 ImGui 绘制鼠标光标（用于无光标平台）。
* **`KeyCtrl` / `KeyShift` / `KeyAlt` / `KeySuper`**: 键盘修饰键（Ctrl, Shift, Alt, Win/Cmd）的按下状态。
* **`KeysDown[512]`**: 键盘按键的按下状态数组。
* **`InputCharacters[16+1]`**: 输入的 UTF-16 字符数组。建议使用 `AddInputCharacter()` 等辅助函数填充。

## 输出

在调用 `ImGui::NewFrame()` 后，你可以读取这些字段，了解 ImGui 对输入的需求或当前状态。
* **`WantCaptureMouse`**: 若为 `true`，表示 ImGui 正在使用鼠标输入，你的应用程序应忽略鼠标事件。
* **`WantCaptureKeyboard`**: 若为 `true`，表示 ImGui 正在使用键盘输入，你的应用程序应忽略键盘事件。
* **`WantTextInput`**: 若为 `true`，表示 ImGui 需要文本输入（如输入框激活时），你可能需要显示屏幕键盘。
* **`WantSetMousePos`**: 若为 `true`，表示 ImGui 想将鼠标移动到 `MousePos` 指定的位置。
* **`WantSaveIniSettings`**: 若为 `true`，表示 ImGui 希望立即保存 `.ini` 设置。
* **`NavActive` / `NavVisible`**: 表示键盘/游戏手柄导航是否处于激活/可见状态。
* **`Framerate`**: 估算的帧率。
* **`MetricsRenderXXX`**: 一系列用于性能分析的渲染统计数据。

## 逻辑与功能标志详解

`ConfigFlags` 是控制 ImGui **核心功能开关**的位标志。设置方式如下：
```cpp
ImGuiIO& io = ImGui::GetIO();
io.ConfigFlags |= ImGuiConfigFlags_NavEnableKeyboard; // 开启键盘导航
```
#### 导航相关

* **`ImGuiConfigFlags_NavEnableKeyboard`**: 启用键盘导航（Tab/方向键）。
* **`ImGuiConfigFlags_NavEnableGamepad`**: 启用游戏手柄导航。
* **`ImGuiConfigFlags_NavEnableSetMousePos`**: 允许 ImGui 通过 `WantSetMousePos` 控制鼠标位置。
* **`ImGuiConfigFlags_NavNoCaptureKeyboard`**: 即使激活导航，也不捕获键盘（让应用也能响应）。

#### 视口与停靠

* **`ImGuiConfigFlags_DockingEnable`**: **启用窗口停靠（Docking）功能**。
* **`ImGuiConfigFlags_ViewportsEnable`**: **启用多视口（Viewport）功能**，允许 ImGui 窗口脱离主窗口。

#### 输入与交互

* **`ImGuiConfigFlags_NoMouse`**: 禁用所有鼠标输入。
* **`ImGuiConfigFlags_NoMouseCursorChange`**: 阻止 ImGui 更改鼠标光标形状。

## 后端能力标志详解

`BackendFlags` 由**后端（Platform/Renderer Backend）** 设置，用来告诉 ImGui 它支持哪些高级功能。
- **`ImGuiBackendFlags_HasGamepad`**: 后端支持游戏手柄且当前已连接。
* **`ImGuiBackendFlags_HasMouseCursors`**: 后端支持设置不同的鼠标光标形状。
* **`ImGuiBackendFlags_HasSetMousePos`**: 后端支持通过 `io.WantSetMousePos` 来移动系统鼠标。
* **`ImGuiBackendFlags_RendererHasVtxOffset`**: 渲染后端支持 `ImDrawCmd::VtxOffset` 特性。
