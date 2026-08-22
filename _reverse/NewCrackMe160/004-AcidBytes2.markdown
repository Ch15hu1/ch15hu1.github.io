---
layout: post
title:  "004 - AcidBytes2"
date: 2026-08-23 00:04:57 +0800
categories: NewCrackMe160
---

## info
1、软件名称：CrackMe2.exe
2、压缩包名：Acid Bytes.2.zip
3、编程语言：Delphi
4、星级评定：算 法：★  爆 破：★  脱 壳：★

cff.nfo 文件可以理解为一个 text 文本文件
```nfo

         	        oOOoOOoooo ooOOooOOO ooOOooOOO
       		        oooOOOOOoO ooo       ooo
          	       ooo         ooo       ooo
                       ooo         OOOOOOOOO OOOOOOOOO
                       ooo         OOOOOOOOO OOOOOOOOO
                       ooo         ooo       ooo
                        oooooooooo ooo       ooo
                        ooOOoOoooo OOO       OOO
                
                C R A C K E R S    F O R    F R E E D O M !

                   oooooooooo      oooooo     oooooo     oooooo
                    oooooooooo    oo      o oo      o oo       o
                            oo    oo      o oo      o oo       o
                           oo     oo      o oo      o oo       o
                          oo      oo      o oo      o oo       o
                         oo       oo      o oo      o oo       o
                        oo        oo      o oo      o oo       o
                       oooooooo   oo      o oo      o oo       o
                       oooooooo    oooooo     oooooo    oooooo

              
                                   P-R-E-S-E-N-T-S

                       oooooooooooooooooooooooooooooooooooooooooooo
                       oo   Official CFF CrackMe #2 *CRACKME*    oo
                       oooooooooooooooooooooooooooooooooooooooooooo

  
  ******************************************************************************************************************** 
  * CRACK TYPE......... [ ] CRACK    [ ] UPDATE/PATCHER    [ ] KEYFILE   [ ] KEYGEN    [ ] SERIAL   [ ] TUTORIAL     *
  * DATE............... [08/05/2000]										     *
  * CRACKER/CODER...... [Acid Bytes]										     *
  * PACKAGER........... [Acid Bytes]										     *
  * SIZE............... [1x1,44MB  ]										     *
  * PROTECTION......... [x] SERIAL  [ ] NAG  [ ] TIMELIMIT  [ ] KEYFILE  [ ] CD-CHECK  [ ] CRIPPLED DEMO [ ] DONGLE  *  
  * DOWNLOAD URL....... [?]	    	    				                                             *
  * PROT.RATING........ [YOU DECIDE]										     *
  * USER RATING........ [YOU DECIDE]										     *
  ********************************************************************************************************************
  

                           ******************************
                           ** INFORMATION/INSTALLATION **
                           ******************************
  
  Here it is: The Official Crackers For Freedom CrackMe #2 !
  You will be accepted as a Trial Member in Crackers For Freedom if you can crack it.
  Just send the Serial# to acidbytes@gmx.net.
  It's Ok, if you can patch it, but i need the Serial - understood? ;)
  
  Have phun & good luck,
  PS: Our 1st CrackMe was a fake-CrackMe which was uncrackable. Respect to all who tried
      to crack it ;)
      This one is should be no problem for any newbie :)
  
    

            /------------------------------------------------------------\
           /                       TEAM MEMBERS:                          \
           |	[COUNCiLS] : Acid Bytes , The Did			  |
           | 	[PERM.MEM] :						  |
           |	[TRIALS]   :						  |
           |        							  |
           | 								  |
           \  Contact AcidBytes@gmx.net to apply for a trial membership	  /
            \------------------------------------------------------------/

                           ******************************
                           **    GROUP    GREETZ       **
                           ******************************

                     -= LineZer0, GWA, GCF, CORE, eMiNENCE, eVC=-

                           ******************************
                           **    PERSONAL GREETZ       **
                           ******************************

                 -= Nostradamus, HeXcrasher, hermes, eGIS, The Did=-
               -= Krichmar Kobi, Zer0, Virtual Daemon, Fabs, Helge =-  
             

                           ******************************
                           **       GROUP INFO         **
                           ******************************

    We are a very young german group and we are currently looking for talented crackers/packagers/suppliers.
    If you think you are talented and you already got some experience, feel free to contact one of our
    Councils: ACIDBYTES@GMX.NET   or   THE_DID@YAHOO.DE . Please don't apply if you are a newbie.

    We will soon get an own homepage/ftp so that you will be able to get all our releases there.

  .nfo by Acid Bytes, last updated May 2nd 2000
  Best viewed in Notepad in 1024x768 and
  Fixedsys or Courier New Fonts
```
“Crackers For Freedom” 的德国破解组织（CFF），发时间 2000 年，这是他们发布的第二个 CrackMe 挑战。

只要你能够破解它并找到正确的序列号（Serial），就可以申请成为该组织的试用成员。

FILE_ID.DIZ 文件。
```text
**********************************************
** C R A C K E R S   F O R   F R E E D O M! **
**           p-r-e-s-e-n-t-s                **
**       Official CFF CrackMe #2            **
**             *CRACKME*                    **
** Yet another fine rls by.....Acid Bytes   **
**********************************************
```
## 查壳
![](https://ch15hu1.github.io/images/525997F2EBDA62846E96CD361B44091B.png)

## 脱壳
用吾爱的脱壳程序，给他拖到这里就好了
![](https://ch15hu1.github.io/images/C6F9AFDA3CF924B87A9415432022B865.png)

原本来是 Delphi 编写的。
![](https://ch15hu1.github.io/images/2B7569D163BD88A1C60DBF0C77312057.png)

## 界面
左边 Check 按钮，右边 Leave 按钮 
![](https://ch15hu1.github.io/images/6290465A17B160D79871AD97BC123EB6.png)‘

随便输入一个密码点击 Check 后，发现有提示
![](https://ch15hu1.github.io/images/46B96D88DA72D1C1BFD43FA6A7317509.png)

点击 Leave 按钮也有一个提示
![](https://ch15hu1.github.io/images/4C21D6A3AA8981F2149D7D744EA12E5B.png)

## 开逆
先找字符串吧
![](https://ch15hu1.github.io/images/663D543AD24AC7AD6F1EACF139C9D42D.png)

Check 有三套提示，他们的内存距离都很近（一套成功、一套没有输入、一套失败）
![](https://ch15hu1.github.io/images/7CF1F63ACF0761EF57BA98E5B09B1C99.png)

确实还有一个空输入的
![](https://ch15hu1.github.io/images/BE26FAF912E6AB150AE8CA184547F7E7.png)、

双击 "Wroing Serial" 进去看看
![](https://ch15hu1.github.io/images/621A7FCE8E9C1A6AD82C2B3A6A7372B5.png)

这就是这个方法结束的地方了
![](https://ch15hu1.github.io/images/CF47B06E62C87F7F8EFB652DF6D16244.png)

向上滑动，感觉这里应该是函数头，先打个断点看看
![](https://ch15hu1.github.io/images/8CC82489922D93995DE26DB4BA782444.png)

随便输入一下然后程序确实卡在这里了
![](https://ch15hu1.github.io/images/8F1DE017D697811582307E7888B5DF5C.png)

这个 `call` 大概率是一个获取文本的函数
![](https://ch15hu1.github.io/images/7E31721168A9BA6D12A26DA9009CC205.png)

这个 `call` 大概率是一个加密函数。把我输入的密码 "123" 和 "12011982" 当参数搞过去了。
JNE 是 Jmp Not Equal，如果 `ZF = 0` 则跳转。
然后我们双击这个 `call` 的地址，进去看看。
![](https://ch15hu1.github.io/images/D2F004CCE24AE72815DCC8558382F376.png)

差不多应该就是加密函数了。
![](https://ch15hu1.github.io/images/528DACEFDBC6E3FB15E8A34E7FE4B3F2.png)

**想要运行成功结果**，就要必须要满足 `ZF = 1`，不让 `jne` 跳转
![](https://ch15hu1.github.io/images/2A8A1232A9113D875D2C3330EBF5C84D.png)

```assembly
00403B44 | push ebx
00403B45 | push esi
00403B46 | push edi
00403B47 | mov esi,eax
00403B49 | mov edi,edx
00403B4B | cmp eax,edx
00403B4D | je crackme2.403BE2
00403B53 | test esi,esi
00403B55 | je crackme2.403BBF
00403B57 | test edi,edi
00403B59 | je crackme2.403BC6
00403B5B | mov eax,dword ptr ds:[esi-0x4]
00403B5E | mov edx,dword ptr ds:[edi-0x4]
00403B61 | sub eax,edx
00403B63 | ja crackme2.403B67
00403B65 | add edx,eax
00403B67 | push edx
00403B68 | shr edx,0x2
00403B6B | je crackme2.403B93
00403B6D | mov ecx,dword ptr ds:[esi]
00403B6F | mov ebx,dword ptr ds:[edi]
00403B71 | cmp ecx,ebx
00403B73 | jne crackme2.403BCD
00403B75 | dec edx
00403B76 | je crackme2.403B8D
00403B78 | mov ecx,dword ptr ds:[esi+0x4]
00403B7B | mov ebx,dword ptr ds:[edi+0x4]
00403B7E | cmp ecx,ebx
00403B80 | jne crackme2.403BCD
00403B82 | add esi,0x8
00403B85 | add edi,0x8
00403B88 | dec edx
00403B89 | jne crackme2.403B6D
00403B8B | jmp crackme2.403B93
00403B8D | add esi,0x4
00403B90 | add edi,0x4
00403B93 | pop edx
00403B94 | and edx,0x3
00403B97 | je crackme2.403BBB
00403B99 | mov ecx,dword ptr ds:[esi]
00403B9B | mov ebx,dword ptr ds:[edi]
00403B9D | cmp cl,bl
00403B9F | jne crackme2.403BE2
00403BA1 | dec edx
00403BA2 | je crackme2.403BBB
00403BA4 | cmp ch,bh
00403BA6 | jne crackme2.403BE2
00403BA8 | dec edx
00403BA9 | je crackme2.403BBB
00403BAB | and ebx,0xFF0000
00403BB1 | and ecx,0xFF0000
00403BB7 | cmp ecx,ebx
00403BB9 | jne crackme2.403BE2
00403BBB | add eax,eax
00403BBD | jmp crackme2.403BE2
00403BBF | mov edx,dword ptr ds:[edi-0x4]
00403BC1 | sub eax,edx
00403BC3 | jmp crackme2.403BE2
00403BC6 | mov eax,dword ptr ds:[esi-0x4]
00403BC9 | sub eax,edx
00403BCB | jmp crackme2.403BE2
00403BCD | pop edx
00403BCE | cmp cl,bl
00403BD0 | jne crackme2.403BE2
00403BD2 | cmp ch,bh
00403BD4 | jne crackme2.403BE2
00403BD6 | shr ecx,0x10
00403BD9 | shr ebx,0x10
00403BDC | cmp cl,bl
00403BDE | jne crackme2.403BE2
00403BE0 | cmp ch,bh
00403BE2 | pop edi
00403BE3 | pop esi
00403BE4 | pop ebx
00403BE5 | ret
```
<br/>
这里判断 eax 和 edx 是不是同一块地址，如果是就跳转，跳转就结束了。
![](https://ch15hu1.github.io/images/AE34E32FA654694BB2F7C113CBC7CCE6.png)

JE` ZF = 1` 就跳转，就是 eax & eax（5 & 5 = 5），结果不是 0 所以 ZF = 0。
test eax, eax 就是判断 eax == 0，如果等于 0 ，JE 就跳转到指定位置。
![](https://ch15hu1.github.io/images/5CA6D7CDB44CAB339F6C8E7440B7F8B2.png)

这一行也就是把 `*(int*)(esi - 4)` 放到 `eax` 里。
`*(int*)(esi - 4)` 的位置是这个字符串的长度。
![](https://ch15hu1.github.io/images/DD88B0F222E5E5E49C4E4EA694AAE44E.png)

JA 大于则条转，`ZF = 0` && `CF = 0`
这一块是在获取字符串长度，如果并且检查
![](https://ch15hu1.github.io/images/A666EFB3505B467005596616A006A174.png)

假设 eax 的长度小于 edi
2(eax) - 8(edi) = 0xFFFFFFFA，这个结果大于 8 所以 JA 会触发。
JA 触发后就知道 edi 的长度大于 eax 了。

假设 eax 的长度大于 edi
10 - 8 = 2，不触发 JA
edi + 2 = 10，就获取 10 了，10是最大的字符串。

**获取最长的数后保存这个数字**。

然后除以 4，因为下面会对的字符串一次进行 4 位的进行比较。

这一块是关键，获取字符串后会一次比较四位，循环 (max(p1, p2) / 4) 次
如果不等于就 G 了。
![](https://ch15hu1.github.io/images/3F022E19880C0FA0F2350F33A3EC2FA9.png)

如果等于的话，他把最长的数拿出来，跟 0x3 异或比较。
and 把结果写到写到第一次寄存器里，test 不会。
`edx = 8`, 8 & 3 = 0，所以 `ZF = 0`，所以 JE 跳转 
![](https://ch15hu1.github.io/images/F2D9F9B8086BF1A351231991F79FA8C0.png)

然后是一个无条件 JMP
![](https://ch15hu1.github.io/images/ECC2A16B03AB29CA2DAE2931336579A1.png)

最后结束了，结束时候 ZF=1
![](https://ch15hu1.github.io/images/5CCE72822613FBDFA03D4652B1F0EA15.png)

前面的 **想要运行成功结果**，就要必须要满足 `ZF = 1`，不让 `jne` 跳转，就满足了。

如果有残余的数他还会在这里对比一遍，残余的数肯定小于 4。因为前面算最长的数长度了。
![](https://ch15hu1.github.io/images/76BC86EA882DE1D9083EBCD4D1A9AE1A.png)

但是残余的数，只能和 00 对比了，所以结果肯定是错的。
![](https://ch15hu1.github.io/images/C9D28A6DF39FE6D383315DF8F4942913.png)

这个跳转太多了，慢慢梳理
从算法上来看很多都东西都是他用汇编来实现的没有用方法
比如计算max(p1,p2)，还有 cmp(p1,p2)。

所以 Serial 就是 "12011982"

## 代码
```cpp
#include <Windows.h>

#include <print>
#include <string>

const char* parameter2 = "12011982";

bool comparison(const char* serial, const char* parameter2);

int main() {
  std::string serial = "12011982";
  if (serial.c_str() == nullptr) {
    MessageBoxA(NULL, "You have to enter a serial", "Nothing entered", MB_OK);
  } else if (comparison(serial.c_str(), parameter2)) {
    MessageBoxA(NULL, "Congrats! You were successful!",
                "Trial CrackMe Cracked!", MB_OK);
  } else {
    MessageBoxA(NULL, "You are a bad cracker!", "Wrong Serial", MB_OK);
  }
}

bool comparison(const char* serial, const char* parameter2) {
  bool ret = false;

  // 判断是否是同一个地址
  if (serial == parameter2) {
    return true;
  }

  // 判断地址是否为 0，我们肯定传送一个地址所以结果不可能是 0
  if (serial == nullptr || parameter2 == nullptr) {
    return ret;
  }

  // 获取最大的长度
  int len = max(strlen(serial), strlen(parameter2));

  // 对比
  if (memcmp(serial, parameter2, len) == 0) {
    ret = true;
  }

  return ret;
}
```