<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# Forbindelse til databasen gennem miljøvariabler
Indtil videre har i brugt jeres application.properties fil til at "holde" informationer vedrørende jeres database (elleer i har hard coded deet ind i en java klasse).

I denne tutorial skal lære i hvordan i opsætter og bruger miljøvariabler istedet for application.properties metoden, som i har brugt indtil nu. 

## Problemet som vi gerne vil løse 
Når i skriver brugernavn og password ind i application.properties filen ender denne fil på Github hvor alle kan se den. 

Problemet med denne metode er at alle i hele verden vil kunne se jeres brugernavn og password (da i sikkert bruger et public repository).    

### Private repository
En løsning er at gøre jeres github repository "private", men det kan give problemer i forhold til "colaborators" og andre der skal se jeres kode (feks. din lære).     

### .gitignore
Man vil kunne tilføje application.properties til jeres .gitignore fil. Problemet med denne løsning er at man gerne vil have denne konfigurationsfile med i projektet. (Da den kan bruges til alt muligt andet end database forbindelse mm.)

### Environment variabler (miljøvariabler)
En tredje mere holdbar løsning er at indsætte variable navne i application.properties og så istedet skrive username og password et andet sted end i selve spring boot projektet. Dette kan gøres i din computers miljøvariabler (og i miljøvariablerne på linux serveren hos Azure).

Det følgende er en beskrivelse af hvordan du gør dette. 

## Lokalt på din egen computer

Åben din Spring Boot Web App i Intellij. åben application.properties filen og ændre det følgende:

```
    spring.datasource.url=jdbc:mysql://localhost:3306/webshopdat22b
    spring.datasource.username=root
    spring.datasource.password=1234
```
til dette:

```
    spring.datasource.url=jdbc:mysql://${DBHOSTNAME}
    spring.datasource.username=${USERNAME}
    spring.datasource.password=${PASSWORD}
```
Efter dette skal du:

````
	Run -> Edit configurations -> Environment -> Environment Variables
```` 
Dette åbner en Gui som denne.    

![](../img/env_1.png)

Indtast de informationer vedrørende din database som du indtil nu har haft i din application.properties fil.     

![](../img/env_2.png)


## Environment Variables på din Linux Server
Åben den skjulte fil der hedder .profile (deen ligger i din home mappe)

```
    nano ~/.profile
```

Og skriv følgende ind i den:

```
    # DB environment variables
    export DBHOSTNAME=azurhostname
    export USERNAME=username
    export PASSWORD=password
```
Luk forbindelsen til serveren og åben den igen. Nu kan du kalde environment variablerne ved at skrive:

```
    echo $DBHOSTNAME
    echo $USERNAME
    echo $PASSWORD
```

og de skulle nu også kunne kaldes fra dit spring boot projekt.




<!--
### Ændring af DBManager fil
I din DBManager.java fil skal du ændre følgende kode.

Denne kodestump skal du slette:

````
	 try (InputStream input = new FileInputStream("src/main/resources/application.properties")) {
            Properties properties = new Properties();
            properties.load(input);
            url = properties.getProperty("url");
            user = properties.getProperty("user");
            password = properties.getProperty("password");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
````

Og herefter ændre det til dette:    


````
	url = System.getenv("url"); 
        user = System.getenv("mp_user"); 
        password = System.getenv("mp_password"); 

````

Du kan se de 2 forskellige versioner af DBManager.java her:

* [Gammel version](https://github.com/techkea/movie-project/blob/appplication_propeties_version/src/main/java/dk/clbo/repository/dbconnect/DBManager.java)
* [Ny Version](https://github.com/techkea/movie-project/blob/master/src/main/java/dk/clbo/repository/dbconnect/DBManager.java)


## Environment Variables på Heroku

På Heroku under din apps adminpanel klik på:

````
	Settings -> Reveal Config Vars
````
Dette åbner dette vindue:

![](../img/herokuconfigvars.png)

Udfyld felterne på samme måde som på din lokale computer.

Thats it!
-->

