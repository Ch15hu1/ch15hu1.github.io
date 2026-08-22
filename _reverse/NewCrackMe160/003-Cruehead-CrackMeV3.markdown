---
layout: post
title:  "003 - Cruehead-CrackMeV3"
date: 2026-08-22 17:28:25 +0800
categories: NewCrackMe160
---

## info
1、软件名称：CrackMe V3.0
2、压缩包名：Cruehead-CrackMe-3.rar
3、编程语言：Assembler
4、星级评定：算 法：★★  爆 破：★★

## 查壳
![](https://ch15hu1.github.io/images/0B98C62BB328E26651A7FD83FF93E221.png)

## 界面
![](https://ch15hu1.github.io/images/82C7DB516FAE480BA9A149AE12367EAE.png)

## 开逆
通过这个发现了一个文字，这个难度应该和 abexcm5 差不多
![](https://ch15hu1.github.io/images/748A1AE4D7F3522CA00E4BBA7A0002C4.png)

1、4020F9 变量是一个 DWORD，用来存放 key
2、加密方法的过程中会改变 key，并且方法运行后 key 还要在 xor 12345678 一遍
3、最后读取文件前18个字符的后4个字符和key做对比。如果一样就 Win 了。
![](https://ch15hu1.github.io/images/A42907B4D2366CBA1E3C47E1D23CB69A.png)

加密方法怎么做的，贴张图自己和注册机的 `Encryption(char *pass)` 对着看吧。
![](https://ch15hu1.github.io/images/67D226D2E0E7D5BC5F19CEF408798F26.png)

## 注册机
```cpp
#include <Windows.h>

#include <fstream>
#include <iostream>
#include <string>

DWORD key = 0;  // 4020F9

void Encryption(char* pass) {
  char bl = 0x41;

  do {
    pass[0] ^= bl;
    key += pass[0];
    pass++;
    bl++;
    if (pass[0] == '\0') {
      break;
    }
  } while (bl != 0x4F);
}

int main() {
  char input[15] = {0}, input_bak[15] = {0};
  std::cout << "Please enter 14 characters: ";

  std::string temp;
  std::getline(std::cin, temp);

  if (temp.length() != 14) {
    std::cout << "Error: You entered more than 14 characters.\n";
    return 1;
  }
  temp.copy(input, 14);
  input[14] = '\0';
  std::copy(input, input + 15, input_bak);

  Encryption(input);

  key ^= 0x12345678;

  std::ofstream outFile("CRACKME3.KEY", std::ios::binary);

  if (!outFile) {
    std::cerr << "Failed to create file!" << std::endl;
    return 1;
  }

  outFile.write(input_bak, 14);
  outFile.write(reinterpret_cast<const char*>(&key), sizeof(key));

  outFile.close();

  std::cout << "over!!!" << std::endl;
  return 0;
}
```