<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>


# Unix terminal commands and file system

## The unix file system


Et linux OS vil som udgangspunkt indeholde disse mapper i rod mappen.

```
    .
    ├── app
    ├── bin -> usr/bin
    ├── boot
    ├── config
    ├── defaults
    ├── dev
    ├── etc
    ├── home
    ├── lib -> usr/lib
    ├── media
    ├── mnt
    ├── opt
    ├── root
    ├── run
    ├── sbin -> usr/sbin
    ├── sys
    ├── tmp
    ├── usr
    └── var
```





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
	nano <filename>         # open a file in the 'nano' editor
	or
	cat <filename>          #  open a file with the 'cat' application

````

**Administrator rights**
````
	sudo                    # put sudo in front of command to have admin rights (ei. sudo rm -r <foldername>)    
				# on your linux installation your user has:
	# username: clbo
	# password: clbo
````
**Install programs / applications on Linux**
````
	sudo apt install <application name>		#  
	sudo apt install <application name> -y  	# -y to accept all yes/no questions during installation

````

**Search for apt applications**
````
	apt-cache search keyword			# search the application repository for alikes based on the keyword    

````

**Keybord shortcuts**
* Arrow up ▲ : Toggle the previous terminal commands
* ctrl + l : Clear terminal (you can also type: clear + enter)
* TAB ⇥ : type the start of a file- or folder- name, then press TAB for autocomplete.






