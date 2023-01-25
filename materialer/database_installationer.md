<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# Installation af Database (MySQL)
Installtion af MySql databasen foregår på samme måde som da du installerede Linux for 2 uger siden.     

Så som det første skal du sørge for at **Docker Desktop** er startet. 

Herefter skal du Copy/Paste de følgende kommandoer ind i PowerShell på Windows, eller terminalen på Mac. 

```
	cd 
	cd Documents
	mkdir mysql
	cd mysql
	
	docker run --name mysql_database -v ${PWD}:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql:8.0.31-debian
``` 
Dette tager ca. et minuts tid.    

Nu kan du starte og stoppe MySQL på samme måde som du gør med din [Linux maskine](https://techkea.github.io/f23/materialer/installationer.html). 

## Forbind til MySQL
Umiddelbart kan du ikke gøre meget med det databasemanagment system som du har installeret. Så det første du skal gøre er at finde et interface som du kan bruge som "vindue" ind i databasen. Til dette kan du endten bruge terminalen, eller en af de utal af GUI´er (Graphical User Interface) der findes til fri download på nettet.

Du skal gøre begge dele og vi starter med at gøre det gennem terminalen. 

### Forbind gennem terminalen
[Åben terminalen på samme måde som du har gjort da vi arbejde med Linux](https://techkea.github.io/f23/materialer/installationer.html#%C3%A5ben-terminalen-i-linux) (husk at skrive "bash" som det første i terminalen).

Herefter skriver du:

```
	# mysql -u root -p
	Enter password: 1234
```
Herefter ser du følgende:

```
	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 11
	Server version: 8.0.31 MySQL Community Server - GPL

	Copyright (c) 2000, 2022, Oracle and/or its affiliates.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

	mysql> 
```

Skriv nu ````show databases;```` og du kan se hvilke databaser der allerede er i systemet. 

```
	mysql> show databases;
	+--------------------+
	| Database           |
	+--------------------+
	| information_schema |
	| mysql              |
	| performance_schema |
	| sys                |
	+--------------------+
	4 rows in set (0.02 sec)

```

### Forbind gennem programmet MySQL Workbench
MySQL Workbench er et GUI, og altså et grafisk interface som kan bruges til at forbinde til din(e) databaser. Både databaser lokalt installeret på din egen computer (som det du lige har gjort) eller databaser som ligger online (og altså installeret på nogle andres computer).


#### Installation
Det første du skal gøre er at installere dette program. Dette gør vi nu gennem chocolatey (Windows) eller brew (Mac OS).

Windows: 

```
	choco install mysql.workbench
```

Mac:

```
	$ brew install --cask mysqlworkbench

```






