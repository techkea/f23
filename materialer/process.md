
# Processes and the Operating System
Whenever you use a computer, you’ll always be interacting with programs. A process is the operating system’s abstraction of a running program. So, using a computer always involve processes. Start menus, app bars, command-line interpreters, text editors, browsers, and more—every application comprises one or more processes.

A typical operating system will report hundreds or even thousands of running processes, which you’ll get to explore shortly. However, central processing units (CPUs) typically only have a handful of cores, which means that they can only run a handful of instructions simultaneously. So, you may wonder how thousands of processes can appear to run at the same time.

In short, the operating system is a marvelous multitasker—as it has to be. The CPU is the brain of a computer, but it operates at the nanosecond timescale. Most other components of a computer are far slower than the CPU. For instance, a magnetic hard disk read takes thousands of times longer than a typical CPU operation.

If a process needs to write something to the hard drive, or wait for a response from a remote server, then the CPU would sit idle most of the time. Multitasking keeps the CPU busy.

Part of what makes the operating system so great at multitasking is that it’s fantastically organized too. The operating system keeps track of processes in a process table or process control block. In this table, you’ll find the process’s file handles, security context, references to its address spaces, and more.

The process table allows the operating system to abandon a particular process at will, because it has all the information it needs to come back and continue with the process at a later time. A process may be interrupted many thousands of times during execution, but the operating system always finds the exact point where it left off upon returning.

An operating system doesn’t boot up with thousands of processes, though. Many of the processes you’re familiar with are started by you. In the next section, you’ll look into the lifetime of a process.

## Process Lifetime
Think of how you might start a Python application from the command line. This is an instance of your command-line process starting a Python process:

## Animation of basic process creation
The process that starts another process is referred to as the parent, and the new process is referred to as the child. The parent and child processes run mostly independently. Sometimes the child inherits specific resources or contexts from the parent.

As you learned in Processes and the Operating System, information about processes is kept in a table. Each process keeps track of its parents, which allows the process hierarchy to be represented as a tree. You’ll be exploring your system’s process tree in the next section.

    Note: The precise mechanism for creating processes differs depending on the operating system. For a brief overview, the Wikipedia article on process management has a short section on process creation.

For more details about the Windows mechanism, check out the win32 API documentation page on creating processes

On UNIX-based systems, processes are typically created by using fork() to copy the current process and then replacing the child process with one of the exec() family of functions.

The parent-child relationship between a process and its subprocess isn’t always the same. Sometimes the two processes will share specific resources, like inputs and outputs, but sometimes they won’t. Sometimes child processes live longer than the parent. A child outliving the parent can lead to orphaned or zombie processes, though more discussion about those is outside the scope of this tutorial.

When a process has finished running, it’ll usually end. Every process, on exit, should return an integer. This integer is referred to as the return code or exit status. Zero is synonymous with success, while any other value is considered a failure. Different integers can be used to indicate the reason why a process has failed.

In the same way that you can return a value from a function in Python, the operating system expects an integer return value from a process once it exits. This is why the canonical C main() function usually returns an integer:

```
    // minimal_program.c

    int main(){
        return 0;
    }
``` 

This example shows a minimal amount of C code necessary for the file to compile with gcc without any warnings. It has a main() function that returns an integer. When this program runs, the operating system will interpret its execution as successful since it returns zero.

So, what processes are running on your system right now? In the next section, you’ll explore some of the tools that you can use to take a peek at your system’s process tree. Being able to see what processes are running and how they’re structured will come in handy when visualizing how the subprocess module works.

## Active Processes on Your System
You may be curious to see what processes are running on your system right now. To do that, you can use platform-specific utilities to track them:

## Linux + macOS
For UNIX-based systems, there are many command-line utilities to choose from:

top: The classic process and resource monitor, often installed by default. Once it’s running, to see the tree view, also called the forest view, press Shift+V. The forest view may not work on the default macOS top.
htop: More advanced and user-friendly version of top.
atop: Another version of top with more information, but more technical.
bpytop: A Python implementation of top with nice visuals.
pstree: A utility specifically to explore the process tree.
On macOS, you also have the Activity Monitor application in your utilities. In the View menu, if you select All Processes, Hierarchically, you should be able to see your process tree.

You can also explore the Python psutil library, which allows you to retrieve running process information on both Windows and UNIX-based systems.

One universal attribute of process tracking across systems is that each process has a process identification number, or PID, which is a unique integer to identify the process within the context of the operating system. You’ll see this number on most of the utilities listed above.

Along with the PID, it’s typical to see the resource usage, such as CPU percentage and amount of RAM that a particular process is using. This is the information that you look for if a program is hogging all your resources.

The resource utilization of processes can be useful for developing or debugging scripts that use the subprocess module, even though you don’t need the PID, or any information about what resources processes are using in the code itself. While playing with the examples that are coming up, consider leaving a representation of the process tree open to see the new processes pop up.

You now have a bird’s-eye view of processes. You’ll deepen your mental model throughout the tutorial, but now it’s time to see how to start your own processes with the Python subprocess module.


## Windows
There are many tools available for Windows, but one which is easy to get set up, is fast, and will show you the process tree without much effort is Process Hacker.

You can install Process Hacker by going to the downloads page or with Chocolatey:

PS> choco install processhacker
Open the application, and you should immediately see the process tree.

One of the native commands that you can use with PowerShell is Get-Process, which lists the active processes on the command line. tasklist is a command prompt utility that does the same.

The official Microsoft version of Process Hacker is part of the Sysinternals utilities, namely Process Monitor and Process Explorer. You also get PsList, which is a command-line utility similar to pstree on UNIX. You can install Sysinternals by going to the downloads page or by using Chocolatey:

PS> choco install sysinternals
You can also use the more basic, but classic, Task Manager—accessible by pressing Win+X and selecting the Task Manager.

You can also explore the Python psutil library, which allows you to retrieve running process information on both Windows and UNIX-based systems.

One universal attribute of process tracking across systems is that each process has a process identification number, or PID, which is a unique integer to identify the process within the context of the operating system. You’ll see this number on most of the utilities listed above.

Along with the PID, it’s typical to see the resource usage, such as CPU percentage and amount of RAM that a particular process is using. This is the information that you look for if a program is hogging all your resources.

The resource utilization of processes can be useful for developing or debugging scripts that use the subprocess module, even though you don’t need the PID, or any information about what resources processes are using in the code itself. While playing with the examples that are coming up, consider leaving a representation of the process tree open to see the new processes pop up.

You now have a bird’s-eye view of processes. You’ll deepen your mental model throughout the tutorial, but now it’s time to see how to start your own processes with the Python subprocess module.

