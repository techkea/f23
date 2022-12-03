
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# The ```` tree ```` command line tool

I denne tutorial skal i installere et lille program som i kan bruge gennem terminalen (Mac: Terminal, Win: Git Bash).

Slutresultatet (som i kan se herinder) bliver at i vil kunne se en træstruktureret oversigt over de mapper og filer i har på jeres computer (eller mere præcist i den mappe i er i).

````
	iclbo:brainstorm2021 clbo$ tree 
	├── index.html
	├── readme.md
	├── ses1
	│   ├── git.txt
	│   └── readme.md
	├── ses2
	│   └── about.html
	└── ses3
````
Sidste gang lærte i kommandoen ```` ls ```` for at se en liste af filer og mapper i den mappe i befinder jer i. ```` tree ```` gør det samme men printer det ud i en træstruktur. 

## Installation af ```` tree ````

### Mac
På en Mac kan i installere stort set alle programmer gennem en Package Manager (https://brew.sh/). At bruge en Package Manager til at installere jeres programmer har mange fordele frem for at installere dem direkte og enkeltvis fra nettet. (Hvis du er interesseret kan du læse mere om det [her](https://en.wikipedia.org/wiki/Package_manager))  

Det første i skal gøre er at installere "Brew" på jeres computer.

I terminalen skriver i:

````
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
````

Dernest skal i installere programmet ```` tree ````.

````
	brew install tree
````
Genstart jeres terminal.


### Windows

Download denne zipfil [tree.zip](tree.zip)
Udpak den og og flyt ````tree.exe```` filen til ````C:\Program Files\Git\usr\bin```` 

Genstart Git Bash


## Brug programmet
I jeres terminal eller i Git Bash kan i nu skrive navnet på det nye program ```` tree ```` og se resultatet.










