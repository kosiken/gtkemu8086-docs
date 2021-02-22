---
title: Editor Features
description: emu8086 emulator feature
---

## The main window

The main window is what you see when you launch the **emu8086** emulator 
program

### Toolbar

The toolbar contains a subset of the commands that you can use to control 
the running program, save files and take over the world 😎️. Okay maybe not 
that last part

![toolbar](../toolbar.png)

### Editor 

The editor contains the text of the asm file that you are working on.

![editor](../editor.png)

### Bottom Bar

The bottom bar displays information about current **emu8086** emulator 
activity and contains buttons with which you can use to view even more
information.

![bottom bar](../bb.png)

## Core Features

These are features offered out of the box by the emu8086 emulator but some
[features](#extended-features) are dependent on installed plugins. 

### Breakpoints

Well it would not be useful if there wasn't any way to add breakpoints now
would it.

![breakpoint](../bpt.png)

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

### Memory View

The **emu8086** emulator also has a window with which you 
can view the emulated memory that a running program produces

![mem-view](../mem-view.png)

To open the memory view you can click on the memory view button 
at the bottom bar of the main window

## Extended Features

These are features offered by plugins.

### Outline View

Inserts an outline of the code in the editor, for details click [here](https://kosiken.github.io/gtkemu8086-docs/plugins#outlineview)

![outlineview](../outline-view.png)

### Additional Features

The **emu8086** emulator can be extended to offer more features 

