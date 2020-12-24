---
title: Project Structure
description: emu8086 Project Structure
---

## Project Structure

### Configuring

Text

```c

#ifndef _EMU_8086_H_
#define _EMU_8086_H_
#define DEBUG 1
#define MAX_CALL_STACK 10
struct emu8086;

typedef void (*emu8086op)(struct emu8086 *aCPU, int *handled);

struct instruction
{

    struct instruction *next;
    struct instruction *prev;
    int line_number;
    int starting_address;
    int end_address;
    int is_16;
};
struct variable
{

    struct variable *right;
    struct variable *left;
    int line_number;
    int starting_address;
    int end_address;
    char name[20];
    int size;
    int offset;
    //int is_16;
};
struct instruction *_instruction_list;
struct instruction *_last_instruction;
struct instruction *_current_instruction, *_first_instruction;
struct variable *variable_list, *first_variable, *v_ordered_list;

struct emu8086
{
    int mCodeMemSize;
    emu8086op op[256]; // callback: SFR register written

    int mMemSize;
    int end_address;
    unsigned char mDataMem[0xfffff];
    char is_first;
    int code_start_addr;
    int mSFR[22];
    int skip_next;
    struct instruction *instructions_list;
    struct instruction *instruction_cache[MAX_CALL_STACK];
    struct instruction *instruction_cache_loop;
    char call_stack;
    struct variable *variable_list;
    __uint16_t last_ip;
};
enum MESSAGES_
{
    LOG = 0,
    WARN = 2,
    ERR = 1
};
enum registers_16
{
    REG_AX,
    REG_CX,
    REG_DX,
    REG_BX,
    REG_SP,
    REG_BP,
    REG_SI,
    REG_DI,

    REG_8,
    REG_9,
    REG_10,
    REG_11,
    REG_12,
    REG_13,
    REG_14,
    REG_15,

    REG_FLAGS,
    REG_IP,
    REG_CS,
    REG_DS,
    REG_ES,
    REG_SS

};

struct emu8086 *emu8086_new(void);
void do_assembly(struct emu8086 *aCPU, char *fname);
void sfrread(struct emu8086 *aCPU, int aRegister);
void sfrwrite(struct emu8086 *aCPU, int aRegister);

#define AX aCPU->mSFR[REG_AX]
#define BX aCPU->mSFR[REG_BX]
#define CX aCPU->mSFR[REG_CX]
#define DX aCPU->mSFR[REG_DX]
#define ES aCPU->mSFR[REG_ES]
#define CS aCPU->mSFR[REG_CS]
#define SP aCPU->mSFR[REG_SP]
#define BP aCPU->mSFR[REG_BP]
#define SI aCPU->mSFR[REG_SI]
#define DI aCPU->mSFR[REG_DI]
#define DS aCPU->mSFR[REG_DS]
#define REG_8 aCPU->mSFR[REG_8]
#define REG_9 aCPU->mSFR[REG_9]
#define REG_10 aCPU->mSFR[REG_10]
#define REG_11 aCPU->mSFR[REG_11]
#define REG_12 aCPU->mSFR[REG_12]
#define REG_13 aCPU->mSFR[REG_13]
#define REG_14 aCPU->mSFR[REG_14]
#define REG_15 aCPU->mSFR[REG_15]
#define FLAGS aCPU->mSFR[REG_FLAGS]
#define IP aCPU->mSFR[REG_IP]
#define _SS aCPU->mSFR[REG_SS]
#define CODE_SEGMENT aCPU->mDataMem + (CS * 0x10)
#define CODE_SEGMENT_IP aCPU->mDataMem + (CS * 0x10) + IP
#define DATA_SEGMENT aCPU->mDataMem + (DS * 0x10)
#define EXTRA_SEGMENT aCPU->mDataMem + (ES * 0x10)
#define GET_FLAG(f) (FLAGS >> f) & 1
#define SET_FLAG(f) FLAGS |= (1 << f)
#define CLEAR_FLAG(f) FLAGS &= (((~FLAGS & 0xffff) | (1 << f)) ^ FLAGS);

#define STACK_SEGMENT aCPU->mDataMem + (_SS * 0x10)
#define INSTRUCTIONS aCPU->instruction_list
#define _INSTRUCTIONS aCPU->instructions_list
#define SFRS aCPU->mSFR


#endif //_HEADER_FILE_H_

```

### Project Structure

- [src](#src)

The following is the structure

```
gtkemu8086/
|    ├── LICENSE
|    ├── README.md
|    ├── test.asm
|    ├── Untitled.asm
|    ├── .gitignore
|    ├── INSTALL
|    ├── COPYING
|    ├── compile
|    ├── install-sh
|    ├── missing
|    ├── depcomp
|    ├── AUTHORS
|    ├── ChangeLog
|    ├── README
|    ├── NEWS
|    ├── config.log
|    ├── config.status
|    ├── lion.sh
|    ├── configure.ac
|    ├── Makefile.am
|    ├── emu8086.desktop
|    ├── krc.png
|    ├── krc_small.png
|    ├── aclocal.m4
|    ├── configure
|    ├── Makefile.in
|    ├── Makefile
|   └── src/
|       ├── emu8086app.c
|       ├── emu8086.gresource.xml
|       ├── main.c
|       ├── emu8086.ui
|       ├── resources.c
|       ├── code.c
|       ├── emu8086aboutwin.c
|       ├── about.ui
|       ├── com.krc.emu8086app.gschema.xml
|       ├── emu80862.c
|       ├── Makefile.am
|       ├── assembler.c
|       ├── emu8086.c
|       ├── ops.c
|       ├── emu8086win.c
|       ├── Makefile.in
|       ├── Makefile
|       ├── about.ui~
|       ├── emu8086
|   └── egs/
|       ├── pillman.asm
|       ├── lion.asm
|       ├── ArraySum.asm
|       ├── RevStr.asm
|       ├── Makefile.am
|       ├── Makefile.in
|       ├── Makefile
|   └── include/
|       ├── emu8086.h
|       ├── assembler.h
|       ├── ins.h
|       ├── opcodes.h
|       ├── Makefile.am
|       ├── code.h
|       ├── emu8086aboutwin.h
|       ├── emu8086app.h
|       ├── emu8086win.h
|       ├── Makefile.in
|       ├── Makefile
|   └── pixbufs/
|       ├── leo.png
|       ├── Makefile.am
|       ├── Makefile.in
|       ├── Makefile
|   └── mime/
|       ├── x-asm.xml
|       ├── Makefile.am
|       ├── Makefile.in
|       ├── Makefile

```

### src

Contains