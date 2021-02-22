---
title: Examples
description: emu8086 emulator examples
---
This applications comes prebuilt with some examples which you can run, to add an example 
open a [pull request](https://github.com/kosiken/gtkemu8086) and ensure you conform to these requirements

- The example must contain at least one line of useful code 
    - Things like this are not valid

    ```asm
    ; ------- start
        label: equ 50
    ```

- The example must not contain **MASM** syntax as it is not supported
- It must not conatin operations that are not yet [implemented](/contributing/operations#Implemented) 

> Checkout the example below

## ArraySum

Text

```asm

sum: equ 0x900 ; Address to store sum


main:

        mov sp, 128     ; Initialize stack for use
        push cs         ; Set ds, es segments to cs = 0x7f00
        push cs
        pop ds
        pop es
        mov ax, 5
        push ax
        mov ax, Array

        push ax
        call ArraySum
        call WriteDec   ; display the sum
        jmp end


ArraySum:
        push bp
        mov bp,sp	    ; set frame pointer
        push si		    ; save ESI

        mov word [sum], 0		; sum = 0
        mov si,Array	; array pointer
        mov cx,5	    ; count

L1:

        mov ax,[si]	    ; get array value
        add  [sum],ax	; add to sum

        add si,2		; next array position
        loop L1

        pop si		    ; restore si
        pop bp
        ret

WriteDec:
        mov ax, [sum]
        int 40
        ret


Array:
        dw 50
        dw 50
        dw 50
        dw 50
        dw 50

end:
        nop

```

For a full list of examples check [here](https://github.com/kosiken/gtkemu8086/tree/main/examples)
