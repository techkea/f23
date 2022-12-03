<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>


# Unix terminal commands and file system

## The unix file system

````
    .
    ├── README.md
    ├── code_from_today
    │   └── test.py
    ├── exercises
    │   └── UNIX_commands.md
    ├── other_materials
    │   ├── git-tutorial.md
    │   ├── learning_objectives.md
    │   ├── src
    │   │   ├── Agenda.png
    │   │   ├── Blank\ Diagram.glink
    │   │   ├── Recap_class_1.png
    │   │   ├── Recap_class_2.png
    │   │   ├── class_1.png
    │   │   ├── class_2.png
    │   │   ├── dir_tree.png
    │   │   ├── file_system.png
    │   │   └── mindmap.png
    │   ├── unix_commands.md
    │   └── using_the_UNIX_operating_system.md
    └── teacher
        ├── code
        │   ├── Example.class
        │   └── Example.java
        └── notes.md
````

## Unix terminal commands


**Change directory**

````
    cd                      # Change directory
    cd ..                   # Change dir to its parent (one folder back)
    cd .                    # stay in this directory (this one you will never use!)
    cd /path/to/folder/     # Change dir to path
````

**List folders content**
````
    ls                      # list of files and folders
````

**Print Working Directory**
````
    pwd                     # what folder am i in?
````

**Create folder and files**
````
    mkdir <foldername>      # create a folder
    touch <filname>         # create file

    # powershell
    echo $null >> <filename>
````


**Rename file**
````
    mv <oldname> <newname>  # rename file
````

**Cut and Paste**
````
    mv <file> <../dirname/>   # Move file to new location
````

**Copy file**
````
    cp <filename> <newname> # copy file 
````
**Delete files and folders**
````
    rm <filename>           # deletes file
    rm -r <foldername>      # delete folder and the content inside
````

**Open files**
````
    open <filename>         # open a file in its default editor or application
    
    # windows
    code <filename>         # Windows: this does not work instead use code <filename> to open a file in vscode    

````
**Administrator rights**
````
    sudo                    # put sudo in front of command to have admin rights (only mac / Linux) - ei. sudo rm -r <foldername>
````

**cat**
````
    cat example.py          # shows the content of the file in the terminal, and other things
````


**Keybord shortcuts**
* Arrow up ▲ : Toggle the previous terminal commands
* cmd + k : Clear terminal (you can also type: clear + enter)
* TAB ⇥ : type the start of a file- or folder-name press TAB for autocomplete.


<div align="center">
<a href="/../../../Lesson_01_introduction_to_python_and_python_strings/blob/master/README.md">back</a> 
</div>
