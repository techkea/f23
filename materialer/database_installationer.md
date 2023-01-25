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
Umiddelbart kan du ikke gøre meget med det databasegment system som du har installeret. Først skal du forbinde gennem en GUI eller en terminal. 

Du skal gøre begge dele og vi starter med at gøre det gennem terminalen. 

### Forbind gennem terminalen
Åben terminalen på samme måde som du har gjort da vi arbejde med [Linux](https://techkea.github.io/f23/materialer/installationer.html#%C3%A5ben-terminalen-i-linux). 




### Forbinde gennem programmet MySQL Workbench





