---
layout: post
title:  "002 - abexcm5"
date: 2026-08-22 14:08:29 +0800
categories: NewCrackMe160
---

## info
1、软件名称：abex' 5th crackme
2、压缩包名：abexcm5.rar
3、编程语言：TASM / MASM / FASM - assembler
4、星级评定：算 法：★  爆 破：★

## 查壳
没有壳，汇编编写的程序，32bit
![](https://ch15hu1.github.io/images/648EE734661E81B283B91DB3A8029994.png)

## 界面
![](https://ch15hu1.github.io/images/5C73CA07AB574F97DC7962226BC2365D.png)

## 开逆
点击 Check 后出现 Error
![](https://ch15hu1.github.io/images/50BCA601FA2029CAB908B3239306A8FB.png)

搜索字符串
![](https://ch15hu1.github.io/images/EE611B8DAEDA4AFEC0AFF4BA197DDC51.png)

找到了这个
![](https://ch15hu1.github.io/images/2766D1E990D5530F64D0493007BAFD52.png)

这一块是主函数区
![](https://ch15hu1.github.io/images/8EE2B534A211C7FE690F20E82FD31197.png)

这是 DialogProc 回调函数
![](https://ch15hu1.github.io/images/EB992065A723A764EF3AE79DBF5F2BC9.png)

## 源码
```cpp
#include <windows.h>

#pragma comment(lib, "user32.lib")
#pragma comment(lib, "gdi32.lib")

LPSTR lpString1 = (LPSTR) "4562-ABEX";
LPSTR lpString2 = (LPSTR) "LC-5781";
LPSTR lpString3;

char GetText[0x25];
LPSTR lpVolumeNameBuffer;
LPDWORD lpVolumeSerialNumber;
LPDWORD lpMaximumComponentLength;
LPDWORD lpFileSystemFlags;

INT_PTR CALLBACK DialogProc(HWND hwndDlg,
                            UINT uMsg,
                            WPARAM wParam,
                            LPARAM lParam) {
  switch (uMsg) {
    case WM_COMMAND:
      if (wParam == 0x65) {
        /* IDC_BUTTON_OK */
        GetDlgItemTextA(hwndDlg, 0x68, GetText, 0x25);
        GetVolumeInformationA(NULL, lpVolumeNameBuffer, 0x32,
                              lpVolumeSerialNumber, lpMaximumComponentLength,
                              lpFileSystemFlags, NULL, NULL);
        lstrcatA(lpVolumeNameBuffer, lpString1);

        for (int i = 0; i < 2; i++) {
          lpVolumeNameBuffer[0] += 1;
          lpVolumeNameBuffer[1] += 1;
          lpVolumeNameBuffer[2] += 1;
          lpVolumeNameBuffer[3] += 1;
        }

        lstrcatA(lpString3, lpString2);
        lstrcatA(lpString3, lpVolumeNameBuffer);
        MessageBoxA(hwndDlg, lpString3, "", NULL);
        if (lstrcmpiA(lpString3, GetText) == 0) {
          MessageBoxA(hwndDlg, "Yep, you entered a correct serial!",
                      "Well Done", NULL);
        } else {
          MessageBoxA(hwndDlg, "The serial you entered is not correct!",
                      "Error!", NULL);
        }
        EndDialog(hwndDlg, NULL);
      }
      break;
    case WM_DESTROY:
      EndDialog(hwndDlg, NULL);
  }
  return 0;
}

int WINAPI WinMain(HINSTANCE hInstance,
                   HINSTANCE hPreInstance,
                   LPSTR lpCmdLine,
                   int nCmdShow) {
  HMODULE hCurrentExe = GetModuleHandleA(NULL);
  DialogBoxParamA(hCurrentExe, MAKEINTRESOURCEA(1), 0, DialogProc, 0);
  ExitProcess(0);
}
```

## 注册机
```cpp
#include <windows.h>
#include <iostream>

LPSTR salt1 = (LPSTR) "4562-ABEX";
LPSTR salt2 = (LPSTR) "L2C-5781";
char key[255];

char GetText[0x25];
char lpVolumeNameBuffer[255];
LPDWORD lpVolumeSerialNumber;
LPDWORD lpMaximumComponentLength;
LPDWORD lpFileSystemFlags;

int main() {
  std::cout << "Please input a text(Max=25): ";
  std::cin >> GetText;

  if (!GetVolumeInformationA(NULL, lpVolumeNameBuffer, 0x32,
                             lpVolumeSerialNumber, lpMaximumComponentLength,
                             lpFileSystemFlags, NULL, NULL)) {
    std::cerr << "GetVolumeInformationA failed!" << std::endl;
    return 1;
  };

  lstrcatA(lpVolumeNameBuffer, salt1);

  for (int i = 0; i < 4; i++) {
    lpVolumeNameBuffer[i] += 2;
  }

  lstrcatA(key, salt2);
  lstrcatA(key, lpVolumeNameBuffer);

  std::cout << "Key: " << key << std::endl;
}
```