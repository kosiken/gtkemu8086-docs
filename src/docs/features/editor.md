---
title: Editor Features
description: emu8086 emulator feature
---

## Core Features

These are features offered out of the box by the emu8086 emulator but some
[features](#extended-features) are dependent on installed plugins. 

### Highlighting

The editor allows good quality highlighting.

![highlighting](../hl.gif)

No more wondering if **mon** is an *opcode* 😁️. The highlighting fairly covers most
 `intel x86` syntax (the one's that the emulator can handle) however it doesn't handle
 directives like `%if` and the like

### Register View

Whenever an *asm* program is running you can view the register
values to the side of the editor.

![reg-view](../reg-view.png)

So things like 

```asm

call regDump ; are not needed

```

## Extended Features

These are features offered by plugins.

### Outline View

Inserts an outline of the code in the editor, for details click [here](https://kosiken.github.io/gtkemu8086-docs/plugins#outlineview)

![outlineview](../outline-view.png)

### Additional Features

The **emu8086** emulator can be extended to offer more features 

